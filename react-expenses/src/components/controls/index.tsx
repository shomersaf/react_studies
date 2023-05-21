import { Button } from "primereact/button";
import css from "./style.module.css";
import { Dropdown } from "primereact/dropdown";

export default function Controls(props: {
  isAddExpenseVisible: boolean;
  changeExpenseVisibility: Function;
  optionsYears: Array<{ code: string; name: string }> | any;
  setYearHandler: Function;
  selectedYear: any;
  optionsCategories: Array<{ code: string; name: string }> | any;
  setCategoryHander: Function;
  selectedCategory: any;
}) {
  const { isAddExpenseVisible, changeExpenseVisibility, selectedYear, selectedCategory } = props;
  const text = isAddExpenseVisible ? "Hide" : "Show";
 
  return (
    <div style={styles.mainDiv}>
      <h3> Controls </h3>
      <div className={css.controlsContainer}>
        <Button
          onClick={() => {
            changeExpenseVisibility(!isAddExpenseVisible);
          }}
        >
          {text} Expense Form
        </Button>
        <Button>Reports</Button>
        <Dropdown
          value={selectedCategory}
          onChange={(e) => {
            props.setCategoryHander(e.value);
          }}
          options={props.optionsCategories}
          optionLabel="name"
          placeholder="Select a Category"
          filter
          className="w-full md:w-14rem"
        />
        <Dropdown
          value={selectedYear}
          onChange={(e) => {
            props.setYearHandler(e.value);
          }}
          options={props.optionsYears}
          optionLabel="name"
          placeholder="Select a Year"
          filter
          className="w-full md:w-14rem"
        />
      </div>
    </div>
  );
}

const styles = {
  mainDiv: {
    background: "lightblue",
    padding: "10px",
    border: "1px solid black",
    borderRadius: "10px",
  },
};
