import Item from "../Item";
import { Container, StepBox } from "./style";
import { Droppable } from "react-beautiful-dnd";

export default function Step({step}) {
    const {itens, title, id, order} = step;

    return (
        <StepBox>
        <h3>{title}</h3>
        <Droppable droppableId={id}>
            {(provided) => (
                <Container ref={provided.innerRef} {...provided.droppableProps}>
                    {itens.map((item, index) => {
                        return <Item key={item.title} item={item} index={index}>{item.title}</Item>
                    })}
                    {provided.placeholder}
                </Container>
                
            )}
           
        </Droppable>
        
        </StepBox>
    );
}