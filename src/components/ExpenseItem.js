import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
  const title = props.title;
  const amount = props.amount;

  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <h2 className='expense-item__price'>${amount}</h2>
      </div>
    </div>
  );
}

export default ExpenseItem;
