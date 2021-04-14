import "./Card.css";

export const Card = (props) => {
  const cardStyle = "card " + props.className;
  return <div className={cardStyle}>{props.children}</div>;
};
