import MealItem from "./meal-item";
import styles from "./meals-grid.module.css";
type MealsGridProps = {
  meals: any[];
};
const MealsGrid = (props: MealsGridProps) => {
  return (
    <ul className={styles.meals}>
      {props.meals.map((meal) => {
        
        return (
          <>
            <li key={meal.id}>
              <MealItem {...meal} />
            </li>
          </>
        );
      })}
    </ul>
  );
};
export default MealsGrid;
