import { DraftExpense, Expense } from "../types";
import {v4 as uuidv4} from 'uuid'

/* Acciones */

export type BudgetActions =
  | { type: "add-budget"; payload: { budget: number } }
  | { type: "show-modal" }
  | {type:'add-expense', payload: {expense: DraftExpense}}
  | {type:'remove-expense', payload: {id: Expense['id']}}

/* Estados */


export type BudgetState = {
  budget: number;
  modal: boolean;
  expenses: Expense[]
};

/* Estado inicial del estado*/

const localStorageExpenses = (): Expense[] => {
  const expenses = localStorage.getItem("expenses");
  return expenses ? JSON.parse(expenses) : [];
};

const localStorageBudget = (): number => {
  const budget = localStorage.getItem("budget");
  return budget ? JSON.parse(budget) : 0;
}

export const initialState: BudgetState = {
  budget: localStorageBudget(),
  modal: false,
  expenses: localStorageExpenses()
};

const createExpense = (draftExpense: DraftExpense) : Expense => {
  return{
    ...draftExpense,
    id: uuidv4()
  }
}

/* Reducer*/

export const budgetReducer = (
  state: BudgetState = initialState,
  action: BudgetActions
) => {
  if (action.type === "add-budget") {
    return {
      ...state,
      budget: action.payload.budget,
    };
  }

  if (action.type === "show-modal") {
    return {
      ...state,
      modal: !state.modal,
    };
  }

  if (action.type === 'add-expense') {
    
    const expense = createExpense(action.payload.expense)

    return {
      ...state,
      expenses: [...state.expenses, expense],
      modal: false
    }
  }

  if (action.type === "remove-expense") {
    return {
      ...state,
      expenses: state.expenses.filter(expense => expense.id !== action.payload.id)
    };
  }

  return state;
};
