import React, { useState } from "react";

import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  
  const clickHandler = () => {
    
    setTitle('Update!!');
    console.log(title);
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <h2 className='expense-item__price'>${props.amount}</h2>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
