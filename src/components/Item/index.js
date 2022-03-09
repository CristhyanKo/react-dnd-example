import { Container, ItemBox } from "./style";
import { Draggable } from "react-beautiful-dnd";

export default function Item({children, item, index}) {
    return <Draggable draggableId={item.id} index={index}>
        {(provided) => (
            <ItemBox ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>{children}</ItemBox>
        )}
    </Draggable>
}