import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import RemainingBudget from './components/Remaining';


const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <Budget />
                    </div>
                    <div className='col-sm'>
                        <RemainingBudget />
                    </div>
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>
                    <div className='col-sm'>
                        <div className='alert alert-secondary'>
                            <div className='cur-st'>
                            <select className="custom-select" id="CurrencySelector" style={{backgroundColor:'lightgreen' }}>
                                <option defaultValue>Currency (£ Pound)</option>
                                <option value="Dollar" name="dollar">$ Dollar</option>
                                <option value="Pound" name="pound">£ Pound</option>
                                <option value="Euro" name="euro">€ Euro </option>
                                <option value="Rupee" name="rupee">₹ Rupee</option>
                            </select> 
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className='mt-3'>Allocation</h3>
                <div className='row '>
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                </div>
                <h3 className='mt-3'>Change allocation</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <AllocationForm/>
                    </div>
                </div>
            </div>
            
        </AppProvider>
    );
};

export default App;