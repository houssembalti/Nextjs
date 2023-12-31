import sql from 'better-sqlite3'
import slugify from 'slugify';
import xss from 'xss';
import fs from 'fs';
const db=sql('meals.db')

const  GetMeals = async () => {
await new Promise((resolve, reject) => {setTimeout(resolve, 5000)});
//throw new Error('Error in GetMeals');
return db.prepare('SELECT * FROM meals').all();

}

const GetMeal=(slug: string) => {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}
const saveMeal = async (meal: any) => {
    meal.slug=slugify(meal.title, {lower: true});
    meal.instructions=xss(meal.instructions);

    const extension=meal.image.name.split('.').pop();
    const FIleName=`${meal.slug}.${extension}`;
    const stream=fs.createWriteStream(`public/images/${FIleName}`);
    const buffer=await meal.image.arrayBuffer();
    stream.write(Buffer.from(buffer), (error)=>{
        if(error){
           throw new Error('Error in saveMeal');
    }})
    meal.image=`/images/${FIleName}`;
    db.prepare('INSERT INTO meals (title, summary, instructions, image, creator, creator_email, slug) VALUES (@title, @summary, @instructions, @image, @creator, @creator_email, @slug)').run(meal);
    
}
export {GetMeals, GetMeal,saveMeal};