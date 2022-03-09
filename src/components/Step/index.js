import Item from "../Item";
import { StepBox } from "./style";

export default function Step({itens, title, order}) {
  return (
    <StepBox>
      <h3>{title}</h3>
      {itens.map(item => {
        return <Item>{item.title}</Item>
      })}
    </StepBox>
  );


}