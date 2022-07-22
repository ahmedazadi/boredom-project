import { Alert } from "bootstrap";
import { Container, Row, Col } from "react-bootstrap";

//

function Box({ data, lang }) {
  // if data is not ready
  if (!data) {
    return (
      <div className="text-center">Please press Explore button down below</div>
    );
  }

  // else if data is ready then present them
  return (
    <Container className=" mt-3">
      <Row className="text-center">
        <h2>{data.activity}</h2>
      </Row>
      <Row>
        <Col dir={lang === "en" ? "rtl" : "ltr"} className="text-right">
          {lang == "en" ? "type" : "جۆر"}
          <br />
          {lang == "en" ? "price" : "نرخ"}
          <br />
          {lang == "en" ? "participants" : "بەشداربووان"}
        </Col>
        <Col>
          {data.type}
          <br />
          {data.price}
          <br />
          {data.participants}
        </Col>
      </Row>
    </Container>
  );
}

export default Box;
