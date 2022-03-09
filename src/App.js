import { useState } from "react";
import { Container } from "./style";
import initialData from "./data/initial-data";
import Step from "./components/Step";
import '@atlaskit/css-reset';
import { DragDropContext } from "react-beautiful-dnd";

export default function App() {
  const [data, setData] = useState(initialData);

  const onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination || !draggableId) { 
      return
    }

    const stepOrigin = data.filter(step => source.droppableId === step.id)[0];
    const stepSelect = data.filter(step => destination.droppableId === step.id)[0];

    const oldItens = Array.from(stepOrigin.itens)
    const newItens = Array.from(stepSelect.itens);

    if (destination.droppableId === source.droppableId) {
      newItens.splice(source.index, 1);
      newItens.splice(destination.index, 0, stepOrigin.itens[source.index]);
    } else {
      oldItens.splice(source.index, 1);
      newItens.splice(destination.index, 0, stepOrigin.itens[source.index]);
    }

    const newData = data.map(step => {
      if (step.id === stepOrigin.id) {
        step.itens = oldItens 
      };

      if (step.id === stepSelect.id) {
        step.itens = newItens 
      };

      return step;
    });

    setData(newData);
  }

  return (
    <DragDropContext onDragEnd={(e) => onDragEnd(e)}>
      <Container>
        {data.map(step => {
          return <Step key={step.id} step={step}/>
        })}
      </Container>
    </DragDropContext>
  );
}
