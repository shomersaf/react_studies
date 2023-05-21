import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Controls from "./components/controls";
import AddExpense from "./components/add-expense";
import ExpensesList from "./components/expenses-list";
import Reports from "./components/reports";
import { data } from "./data";
// type Expense = (typeof data)[0];
function App() {
  const [isAddExpenseVisible, setIsExpenseVisible] = useState(true);
  const [expenses, setExpenses] = useState(data);
  const [selectedYear, setSelectedYear] = useState<{
    name: string;
    code: string;
  } | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<{
    name: string;
    code: string;
  } | null>(null);
  const handler = (expenseVisibility: boolean) => {
    setIsExpenseVisible(expenseVisibility);
  };
 
  
  const allYears = expenses
    .map((e) => {
      const year = new Date(e.date).getFullYear().toString();
      return { code: year, name: year };
    })
    .reduce((yearsObj: any, currentYear) => {
      yearsObj[currentYear.code] = currentYear;
      return yearsObj;
    }, {});
  const allCategories = expenses
    .map((e) => {
      return { code: e.category, name: e.category };
    })
    .reduce((categoriesObj: any, currentCategory) => {
      categoriesObj[currentCategory.code] = currentCategory;
      return categoriesObj;
    }, {});

  var filteredExpenses =
    !selectedYear || selectedYear?.code === "all"
      ? expenses
      : expenses.filter((e) => {
          return e.date.getFullYear().toString() === selectedYear?.code;
        });
  
  filteredExpenses =
    !selectedCategory || selectedCategory?.code === "all"
      ? filteredExpenses
      : filteredExpenses.filter((e) => {
          return e.category === selectedCategory?.code;
        });

  return (
    <div style={{ background: "coral" }}>
      {expenses.length}
      <Header text={"My Expenses"} />
      <Controls {..._getControlsProps()} />
      {isAddExpenseVisible ? (
        <AddExpense {..._getAddExpenseProps()}/>
      ) : null}
     
      <Reports expenses={filteredExpenses}/>
      <ExpensesList expenses={filteredExpenses} />
    </div>
  );

  function _getControlsProps() {
    return {
      changeExpenseVisibility: handler,
      isAddExpenseVisible: isAddExpenseVisible,
      optionsYears: [{ code: "all", name: "All" }, ...Object.values(allYears)],
      setYearHandler: setSelectedYear,
      selectedYear,
      optionsCategories: [{ code: "all", name: "All" }, ...Object.values(allCategories)],
      setCategoryHander: setSelectedCategory,
      selectedCategory,
    };
  }
  function _getAddExpenseProps() {
    return {
      onSave: (expense: any) => {
        setExpenses([...expenses, expense]);
      }
    };
  }
}

export default App;
