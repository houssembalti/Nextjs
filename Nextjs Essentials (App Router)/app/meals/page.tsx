import Link from "next/link";
import React, { Suspense } from "react";
import styles from "./page.module.css";
import MealsGrid from "@/components/meals/meals";
import { GetMeals } from "@/lib/meals";
import LoadingData from "./loading-out";

const FetchMeals = async () => {
  const mealsList = await GetMeals();
  return <MealsGrid meals={mealsList} />;
};
const Meals = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense fallback={<LoadingData />}>
          <FetchMeals />
        </Suspense>
      </main>
    </>
  );
};

export default Meals;
