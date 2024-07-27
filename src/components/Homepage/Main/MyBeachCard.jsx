import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";

const MyBeachCard = () => {
  return (
    <>
      <div className="main-section">
        <Container fluid>
          <Row>
            <Col xs={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  className="img-card-beach"
                  variant="top"
                  src="https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <Card.Body>
                  <Card.Title>Nome Spiaggia</Card.Title>
                  <div className="d-flex justify-content-between">
                    <div>
                      <div>
                        <Badge pill bg="info">
                          € 1
                        </Badge>
                        <small> /person </small>
                      </div>
                      <div>
                        <Badge pill bg="secondary">
                          € 1
                        </Badge>{" "}
                        <small> /car</small>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="m-0">Places</p>
                        <small>334</small>
                      </div>
                      <div>
                        <p className="m-0">Max Person</p>
                        <small>500</small>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  className="img-card-beach"
                  variant="top"
                  src="https://images.unsplash.com/photo-1471085507142-12355181f804?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <Card.Body>
                  <Card.Title>Nome Spiaggia</Card.Title>
                  <div className="d-flex justify-content-between">
                    <div>
                      <div>
                        <Badge pill bg="info">
                          € 1
                        </Badge>
                        <small> /person </small>
                      </div>
                      <div>
                        <Badge pill bg="secondary">
                          € 1
                        </Badge>{" "}
                        <small> /car</small>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="m-0">Places</p>
                        <small>334</small>
                      </div>
                      <div>
                        <p className="m-0">Max Person</p>
                        <small>500</small>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  className="img-card-beach"
                  variant="top"
                  src="https://images.unsplash.com/photo-1541417904950-b855846fe074?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <Card.Body>
                  <Card.Title>Nome Spiaggia</Card.Title>
                  <div className="d-flex justify-content-between">
                    <div>
                      <div>
                        <Badge pill bg="info">
                          € 1
                        </Badge>
                        <small> /person </small>
                      </div>
                      <div>
                        <Badge pill bg="secondary">
                          € 1
                        </Badge>{" "}
                        <small> /car</small>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="m-0">Places</p>
                        <small>334</small>
                      </div>
                      <div>
                        <p className="m-0">Max Person</p>
                        <small>500</small>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default MyBeachCard;
