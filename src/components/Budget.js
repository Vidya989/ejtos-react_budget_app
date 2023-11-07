import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
//import ExpenseTotal from './ExpenseTotal';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if(newBudget > 19990) {
            alert("The Budget cannot exceed 20000");
        }
        else if(newBudget < 1500)
        {
            alert("The Budget cannot be less than total spending");
        }
        else{
        setNewBudget(event.target.value);
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: $</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
