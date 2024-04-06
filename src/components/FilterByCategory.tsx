import { ChangeEvent } from "react";
import { categories } from "../data/categories";
import { useBudget } from "../hooks/useBudget";

export const FilterByCategory = () => {
  const { state, dispatch } = useBudget();

  const hanfleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({type:"add-filter-category", payload:{id: e.target.value}});
  }

  return (
    <>
      {state.expenses.length > 0 && (
        <section className="bg-white shadow-lg p-10">
          <form>
            <div className="flex flex-col md:flex-row md: items-center gap-5">
              <label htmlFor="category"></label>
              <select
                name="category"
                id="category"
                className="bg-slate-100 p-3 flex-1 rounded"
                onChange={hanfleChange}
              >
                <option value="">-- Todas las Categorias</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </form>
        </section>
      )}
    </>
  );
};
