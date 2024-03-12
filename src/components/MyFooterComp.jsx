import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const MyFooterComp = function () {
  return (
    <Container fluid className="bg-dark mt-2 text-white">
      <Row>
        <Col>
          <footer className="d-flex justify-content-center my-4 gap-4">
            <div>
              <p className="mb-0">Chi siamo</p>
              <p>Contatti</p>
            </div>
            <div>
              <p className="mb-0">Informazioni legali</p>
              <p>Dicono di noi</p>
            </div>
          </footer>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <p className="text-center">Publish &copy; 2024 Merola Innocenzo</p>
        </Col>
      </Row>
    </Container>
  );
};

export default MyFooterComp;
