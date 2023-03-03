import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [hidden, setHidden] = useState(false);

  const showForm = () => {
    setHidden(true);
  };

  const hideForm = () => {
    setHidden(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData);
    setHidden(false);
  };

  return (
    <div className="new-expense">
      {!hidden && <button onClick={showForm}>Add New Expense</button>}
      {hidden && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={hideForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
