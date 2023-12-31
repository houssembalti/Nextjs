import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { GetMeal } from "@/lib/meals";
import { mealItemProps } from "@/components/meals/meal-item";
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";
type Props = {
  params: Params;
};

const generateMetadata = async (
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const meal: any = GetMeal(params.slug);
  if (!meal) {
    notFound();
  }
  return {
    title: meal.title,
    description: meal.summary,
  };
};
const Mealsslug = ({ params }: Props) => {
  const meal: any = GetMeal(params.slug);
  if (!meal) {
    notFound();
  }
  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image fill src={meal.image} alt="" />
        </div>
        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={styles.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator_email}</a>
          </p>
          <p className={styles.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          dangerouslySetInnerHTML={{
            __html: meal.instructions.replace(/\n/g, "<br />"),
          }}
          className={styles.instructions}
        ></p>
      </main>
    </>
  );
};

export default Mealsslug;
export { generateMetadata };
