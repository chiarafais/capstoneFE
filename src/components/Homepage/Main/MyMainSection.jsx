import { Col, Container, Row } from "react-bootstrap";
import MyBeachFilter from "./MyBeachFilter";
import MyBeachCard from "./MyBeachCard";

const MyMainSection = () => {
  return (
    <>
      <div className="main-section">
        <Container fluid>
          <div className="text-center">
            <h5 className="py-3">SEE ALL BEACH WITH CLOSED NUMBER </h5>
          </div>
          <Row>
            <Col xs={3}>
              <MyBeachFilter />
            </Col>
            <Col xs={9}>
              <MyBeachCard />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default MyMainSection;
