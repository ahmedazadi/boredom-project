// components
import Box from "./components/Box";
import Button from "./components/Button";
// bootstrap components
import { useState } from "react";
// react bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function App() {
  const [originalData, setOriginalData] = useState();

  return (
    <>
      <Container className="container-max-width:sm	">
        <Box data={originalData} lang="en" />

        <Button setData={setOriginalData} />
      </Container>
    </>
  );
}

export default App;
