import { Col, Row, Container, Button } from "react-bootstrap";
import MyNavbar from "./MyNavbar";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllBeaches, newReservation } from "../../../redux/actions";
import Swal from "sweetalert2";

const MyHeader = () => {
  const dispatch = useDispatch();
  const beaches = useSelector((state) => state.beach.results);
  const [selectedBeach, setSelectedBeach] = useState("");
  const [selectedPeople, setSelectedPeople] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const userInfo = useSelector((state) => state.profile.results);

  const handleReservation = (event) => {
    event.preventDefault();
    if (userInfo) {
      if (selectedBeach && selectedPeople && selectedDate) {
        Swal.fire({
          title: "All correct?",
          html: `<div class="swal-confirm-reservation"> 
          <h6>Please double check everything before confirming!</h6>
          <h5><span>Beach: </span>${
            beaches.find((x) => x.id === Number(selectedBeach)).name_beach
          }</h5> <h5><span>Number of people: </span>${selectedPeople}</h5> <h5><span>Reservation date: </span>${selectedDate}</h5></div>`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#677c0c",
          cancelButtonColor: "#d55a3c",
          confirmButtonText: "Yes, reserve it!",
        }).then((result) => {
          if (result.isConfirmed) {
            dispatch(newReservation(userInfo.id, selectedBeach, selectedDate, selectedPeople));
            setSelectedBeach("");
            setSelectedPeople("");
            setSelectedDate("");
          }
        });
      } else {
        Swal.fire({
          text: "All fields are required",
          icon: "warning",
          confirmButtonColor: "#b24b33",
        });
      }
    } else {
      Swal.fire({
        text: "To reservate you need to be logged in",
        icon: "warning",
        confirmButtonColor: "#b24b33",
      });
    }
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
                <Col xs={8} md={3} className="mx-auto text-center text-md-start my-2">
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
