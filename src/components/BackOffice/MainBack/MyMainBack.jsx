import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function MyMainBack() {
  const navigate = useNavigate();
  return (
    <>
      <Container fluid className="container-main-back">
        <Row>
          <Col xs={4}>
            <div className="card-back green" onClick={() => navigate("users")}>
              <h2>USERS</h2>
              <div>
                <p>users</p>
                <i className="bi bi-person-lines-fill"></i>

                <i className="bi bi-trash3-fill"></i>
              </div>
            </div>
          </Col>
          <Col xs={4}>
            <div className="card-back red" onClick={() => navigate("reservation")}>
              <h2>RESERVATIONS</h2>
              <div>
                <p>reservations</p>

                <i className="bi bi-list-ol"></i>

                <i className="bi bi-trash3-fill"></i>
              </div>
            </div>
          </Col>
          <Col xs={4}>
            <div className="card-back blue" onClick={() => navigate("beach")}>
              <h2>BEACHES</h2>
              <div>
                <p>beaches</p>

                <i className="bi bi-list-ul"></i>

                <i className="bi bi-trash3-fill"></i>

                <i className="bi bi-pencil-fill"></i>

                <i className="bi bi-plus-circle"></i>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MyMainBack;
