import { ChangeEvent, useMemo, useState } from "react"
import { useBudget } from "../hooks/useBudget"

export const BudgetForm = () => {

    const [budget, setBudget] = useState(0)
    const {dispatch} = useBudget()

    const isValid = useMemo(() => isNaN(budget) || budget <= 0 ,[budget])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setBudget(e.target.valueAsNumber)
    }

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch({type:'add-budget', payload:{budget}})
    }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>

        <div className="flex flex-col space-y-5">
            <label className="text-3xl text-green-600 font-bold text-center uppercase" htmlFor="budget">Definir Presupuesto</label>
            <input type="number" id="budget" value={budget} onChange={(e) => handleChange(e)}  className="w-full bg-white border border-gray-200 p-2 placeholder:text-green-600" placeholder="Define tu presupuesto" name="budget"/>
        </div>
        <input disabled={isValid} type="submit" value='Definir Presupuesto'  className="bg-green-600 disabled:opacity-20 hover:bg-green-700 cursor-pointer w-full p-2 text-white font-black uppercase" />

    </form>
  )
}
