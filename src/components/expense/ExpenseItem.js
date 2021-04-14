import "./ExpenseItem.css";
import { ExpenseDate } from "./ExpenseDate";
import { Card } from "../ui/Card";

export const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.desc}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </Card>
  );
};
