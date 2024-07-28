import { Col, Row, Container, Button } from "react-bootstrap";
import MyNavbar from "./MyNavbar";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllBeaches } from "../../../redux/actions";

const MyHeader = () => {
  const dispatch = useDispatch();
  const beaches = useSelector((state) => state.beach.results);
  const [selectedBeach, setSelectedBeach] = useState("");
  const [selectedPeople, setSelectedPeople] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const handleReservation = (event) => {
    event.preventDefault();
    console.debug(selectedBeach);
    console.debug(selectedPeople);
    console.debug(selectedDate);
  };

  useEffect(() => {
    dispatch(getAllBeaches());
  }, []);
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
            <Form onSubmit={handleReservation}>
              <Row className="py-4">
                <Col md={2}></Col>
                <Col xs={8} md={2} className="mx-auto my-2">
                  <Form.Select onChange={(e) => setSelectedBeach(e.target.value)} value={selectedBeach}>
                    <option disabled value="">
                      Beaches
                    </option>
                    {beaches &&
                      beaches.length > 0 &&
                      beaches.map((beach) => {
                        return (
                          <option value={beach.id} key={beach.id}>
                            {beach.name_beach}
                          </option>
                        );
                      })}
                  </Form.Select>
                </Col>
                <Col xs={8} md={3} className="mx-auto my-2">
                  <Form.Control type="date" onChange={(e) => setSelectedDate(e.target.value)} value={selectedDate} />
                </Col>
                <Col xs={8} md={2} className="mx-auto my-2">
                  <Form.Select onChange={(e) => setSelectedPeople(e.target.value)} value={selectedPeople}>
                    <option disabled value="">
                      Peoples
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Form.Select>
                </Col>
                <Col xs={8} md={3} className="mx-auto my-2">
                  <Button className="btn-reserve" type="submit">
                    RESERVE
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </Container>
      </div>
    </>
  );
};
export default MyHeader;
