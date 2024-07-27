import { Col, Row, Container, Button } from "react-bootstrap";
import MyNavbar from "./MyNavbar";
import Form from "react-bootstrap/Form";

const MyHeader = () => {
  return (
    <>
      <div className="main-bg">
        <MyNavbar />
        <Container fluid>
          <div className="header-title">
            <h2 className="m-left">RESERVE</h2>
            <h1 className="text-center">YOUR PLACE</h1>
            <h2 className="text-end m-right">IN SARDINIAN BEACH</h2>
          </div>
          <div>
            <Row className="py-4">
              <Col xs={8} md={4} className="mx-auto my-2">
                <Form.Select>
                  <option disabled defaultValue>
                    Beaches
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
              <Col xs={8} md={4} className="mx-auto my-2">
                <Form.Control type="date" />
              </Col>
              <Col xs={8} md={2} className="mx-auto my-2">
                <Form.Select>
                  <option disabled defaultValue>
                    Peoples
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Form.Select>
              </Col>
              <Col xs={8} md={2} className="mx-auto my-2 text-center">
                <Button className="btn-reserve">RESERVE</Button>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};
export default MyHeader;
