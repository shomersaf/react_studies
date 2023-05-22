import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Dropdown } from 'primereact/dropdown';
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Toast } from 'primereact/toast';
import css from "./style.module.css";


function DropdownPage(props:any) {
    const toast = useRef<any>(null);
    const [resValues, setValues] = useState<any>(null);
    const [resValue, setValue] = useState<any>(null);

    useEffect(() => {
        async function getExpenses() {
            try {
                const result = await axios.get(props.url);
                const dataWithDates = result.data.map((e: any) => {
                    return { ...e, date: new Date(e.date).getFullYear() };
                });
                setValues(dataWithDates);
            } catch (error) {
                toast?.current?.show({
                    severity: error,
                    summary: "Something Went wrong",
                    detail: "Please try again",
                });

            } finally {

            }
        }

        getExpenses()
    }, []);

    return (
        <div className={css.DropdownPage}>
            <Toast ref={toast} />
            <Dropdown value={resValue} options={resValues} onChange={(e) => setValue(e.value)} optionLabel="category" placeholder="Select a category" className={css.dropdown}/>
            <Dropdown value={resValue} options={resValues} onChange={(e) => setValue(e.value)} optionLabel="date" placeholder="Select a year" className={css.dropdown} />
        </div>
    )
}

export default DropdownPage;