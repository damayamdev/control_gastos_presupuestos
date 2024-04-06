import { useMemo } from "react"
import { useBudget } from "../hooks/useBudget"
import { ExpenseDetail } from "./ExpenseDetail"

export const ExpenseList = () => {

    const {state} = useBudget()



    const filteredExpenses = state.currentCategory ? state.expenses.filter(expense => expense.category === state.currentCategory) : state.expenses

    console.log(filteredExpenses)
    const isEmpty = useMemo(() => filteredExpenses.length === 0, [filteredExpenses])

  return (
    <section className="mt-10">
        {
            isEmpty ? <p className="text-green-600 text-2xl font-bold">No hay  gastos registrados</p> : (
                <>

                <p className="text-green-600 text-2xl font-bold my-5">Listado de Gastos.</p>
                {
                  filteredExpenses.map((expense) => (
                    <ExpenseDetail key={expense.id} expense={expense} />
                  ))
                }
                </>
            )
        }
    </section>
  )
}
