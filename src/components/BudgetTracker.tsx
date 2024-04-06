import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useBudget } from "../hooks/useBudget";
import AmountDisplay from "./AmountDisplay";
import "react-circular-progressbar/dist/styles.css";

export const BudgetTracker = () => {
  const { state, totalExpenses, remainingBudget, dispatch } = useBudget();
  const percentage = +((totalExpenses / state.budget) * 100).toFixed(2);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex justify-center">
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({
            pathColor: percentage === 100 ? "#DC2626" : "#16A34A",
            trailColor: "#f5f5f5",
            textSize:8,
            textColor:percentage === 100 ? "#DC2626" :"#16A34A"
          })}
          text={`${percentage}% Gastado`}
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-8">
        <button
          onClick={() => dispatch({type:"reset-app"})}
          type="button"
          className="bg-green-600 w-full p-2 text-white uppercase font-bold rounded-lg select-none"
        >
          Resetear App
        </button>
        <AmountDisplay label="Presupuesto" amount={state.budget} />
        <AmountDisplay label="Disponible" amount={remainingBudget} />
        <AmountDisplay label="Gastado" amount={totalExpenses} />
      </div>
    </section>
  );
};
