import { useState } from "react";
import { Container } from "./style";
import initialData from "./data/initial-data";
import Step from "./components/Step";
import '@atlaskit/css-reset';

export default function App() {
  const [data, setData] = useState(initialData);
  return (
    <Container>
      {data.map(step => {
        return <Step itens={step.itens} title={step.title}/>
      })}
    </Container>
  );
}
