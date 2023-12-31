"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";
function isInvalidText(text:string) {
    return !text || text.trim() === '';
  }
const shareMeal = async (PrevState:any ,formdata: FormData) => {

    const meal:any = {
      title: formdata.get("title"),
      summary: formdata.get("summary"),
      instructions: formdata.get("instructions"),
      image: formdata.get("image"),
      creator: formdata.get("name"),
      creator_email: formdata.get("email"),
    };

    if (
        isInvalidText(meal.title) ||
        isInvalidText(meal.summary) ||
        isInvalidText(meal.instructions) ||
        isInvalidText(meal.creator) ||
        isInvalidText(meal.creator_email) ||
        !meal.creator_email.includes('@') ||
        !meal.image ||
        meal.image.size === 0
      ) {
        return{
            message:'Invalid input, please try again.'
        }
      }
    await saveMeal(meal);
    revalidatePath('/meals','page')
    redirect('/meals');
  };
  export { shareMeal };