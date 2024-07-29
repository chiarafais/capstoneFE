import { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getAllBeaches, getBeachAvailable, getBeachByProvince, getBeachEstablishment } from "../../../redux/actions";

const MyBeachFilter = () => {
  const dispatch = useDispatch();
  const [estab, setEstab] = useState(false);
  const [ava, setAva] = useState(false);

  const [province, setProvince] = useState("");

  const filterForEstab = () => {
    setEstab(estab ? false : true);
    if (estab) {
      dispatch(getAllBeaches());
    } else {
      setAva(false);
      setProvince("");
      dispatch(getBeachEstablishment());
    }
  };

  const filterForAva = () => {
    setAva(ava ? false : true);
    if (ava) {
      dispatch(getAllBeaches());
    } else {
      setEstab(false);
      setProvince("");
      dispatch(getBeachAvailable());
    }
  };

  const filterForProvince = (provinceName) => {
    if (province && province === provinceName) {
      setProvince("");
      dispatch(getAllBeaches());
    } else {
      setAva(false);
      setEstab(false);
      setProvince(provinceName);
      dispatch(getBeachByProvince(provinceName));
    }
  };

  return (
    <>
      <Container fluid>
        <div>
          <Card>
            <Card.Body>
              <Card.Title className="filters-title">FILTERS</Card.Title>
              <Row>
                <Col xs={12}>
                  <Card.Subtitle className="mb-2 text-muted">ESTABLISHMENT</Card.Subtitle>
                  <label className="switch">
                    <input type="checkbox" onChange={() => filterForEstab()} checked={estab} />
                    <span className="slider"></span>
                  </label>
                </Col>
                <Col xs={12}>
                  <Card.Subtitle className="mb-2 text-muted">AVAILABLE</Card.Subtitle>
                  <label className="switch">
                    <input type="checkbox" onChange={() => filterForAva()} checked={ava} />
                    <span className="slider"></span>
                  </label>
                </Col>
              </Row>
              <Row>
                <Card.Subtitle className="mb-2 text-muted">PROVINCE</Card.Subtitle>
                <Col xs={5}>
                  <Button
                    className={province === "Sud Sardegna" ? "button-filter-active" : "button-filter-unset"}
                    onClick={() => filterForProvince("Sud Sardegna")}
                  >
                    SUD SARDEGNA
                  </Button>
                </Col>
                <Col xs={3}>
                  <Button
                    className={province === "Sassari" ? "button-filter-active" : "button-filter-unset"}
                    onClick={() => filterForProvince("Sassari")}
                  >
                    SASSARI
                  </Button>
                </Col>
                <Col xs={3}>
                  <Button
                    className={province === "Nuoro" ? "button-filter-active" : "button-filter-unset"}
                    onClick={() => filterForProvince("Nuoro")}
                  >
                    NUORO
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
};
export default MyBeachFilter;
