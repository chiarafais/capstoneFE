import { Col, Container, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { deleteReservation } from "../../../redux/actions";

const MyReservationModal = (props) => {
  const dispatch = useDispatch();

  const deleteReservationByModal = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d55a3c",
      cancelButtonColor: "#1c4175",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteReservation(id));
      }
    });
  };

  const userReservations = useSelector((state) => state.profile.reservations);
  return (
    <>
      <div>
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
          <Modal.Header closeButton className="border-0">
            <Modal.Title id="contained-modal-title-vcenter" className="text-uppercase">
              your reservation
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="grid-example">
            <Container>
              {userReservations && userReservations.length <= 0 && (
                <p className="text-center fw-bold">You don't have reservations at the moment</p>
              )}
              {userReservations &&
                userReservations.map((reservation) => {
                  return (
                    <div key={reservation.id} className="modal-reservation">
                      <Row>
                        <Col xs={12} md={8}>
                          <p className="text-start fw-bold">
                            {reservation.beach.name_beach} <i className="bi bi-geo-alt-fill"></i>
                          </p>
                        </Col>
                        <Col xs={6} md={4}>
                          <small>
                            {reservation.peopleNumber} <i className="bi bi-people-fill"></i>
                          </small>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={6} md={4}>
                          <p>
                            {reservation.dateStart} <i className="bi bi-calendar-date"></i>
                          </p>
                        </Col>
                        <Col xs={6} md={4}>
                          <p>
                            {" "}
                            <i className="bi bi-currency-euro"></i> {reservation.beach.price_entry} /{" "}
                            <i className="bi bi-person-standing"></i>
                          </p>
                        </Col>
                        <Col xs={6} md={4}>
                          <p>
                            <i className="bi bi-currency-euro"></i> {reservation.beach.price_parking} /{" "}
                            <i className="bi bi-car-front-fill"></i>
                          </p>
                        </Col>
                      </Row>
                      <span className="btn-delete-reservation" onClick={() => deleteReservationByModal(reservation.id)}>
                        <i className="bi bi-trash3"></i>
                      </span>
                    </div>
                  );
                })}
            </Container>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default MyReservationModal;
