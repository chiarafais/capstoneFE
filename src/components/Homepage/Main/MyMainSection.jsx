import { Col, Container, Row } from "react-bootstrap";
import MyBeachFilter from "./MyBeachFilter";
import MyBeachCard from "./MyBeachCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllBeaches } from "../../../redux/actions";
import { useEffect } from "react";

const MyMainSection = () => {
  const dispatch = useDispatch();
  const beaches = useSelector((state) => state.beach.results);
  const token = useSelector((state) => state.login.results);
  useEffect(() => {
    dispatch(getAllBeaches());
  }, []);
  return (
    <>
      <div className="main-section">
        <Container fluid>
          <div className="text-center">
            <h3 className="py-3 see-all-beach-closed">SEE ALL BEACH WITH CLOSED NUMBER </h3>
          </div>
          {token && (
            <Row>
              <Col xs={12} sm={5} md={3} lg={3} xl={2}>
                <MyBeachFilter />
              </Col>
              <Col xs={12} sm={7} md={9} lg={9} xl={10}>
                <Row>
                  {beaches &&
                    beaches.length > 0 &&
                    beaches.map((beach) => {
                      return <MyBeachCard props={beach} key={beach.id} />;
                    })}
                </Row>
              </Col>
            </Row>
          )}
          {!token && (
            <Col xs={12}>
              <Row>
                {beaches &&
                  beaches.length > 0 &&
                  beaches.map((beach) => {
                    return <MyBeachCard props={beach} key={beach.id} />;
                  })}
              </Row>
            </Col>
          )}
        </Container>
      </div>
    </>
  );
};
export default MyMainSection;
