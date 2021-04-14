import { ExpenseItem } from "./ExpenseItem";
import "./ExpenseItemList.css";
import { Card } from "../ui/Card";

export const ExpenseItemList = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        desc={props.expense[0].description}
        date={props.expense[0].date}
        amount={props.expense[0].amount}
      />
      <ExpenseItem
        desc={props.expense[1].description}
        date={props.expense[1].date}
        amount={props.expense[1].amount}
      />
      <ExpenseItem
        desc={props.expense[2].description}
        date={props.expense[2].date}
        amount={props.expense[2].amount}
      />
    </Card>
  );
};
