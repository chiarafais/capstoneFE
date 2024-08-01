import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllReservation } from "../../../redux/actions";
import MyReservationTable from "../MyReservationTable";

const MyReservationBack = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const reservations = useSelector((state) => state.admin.reservations);

  useEffect(() => {
    dispatch(getAllReservation());
  }, []);

  return (
    <>
      <Container fluid className="bg-light-yellow">
        <div>
          <span className="back-btn-red" onClick={() => navigate("/admin")}>
            <i className="bi bi-arrow-left-circle-fill"></i>
          </span>
          <MyReservationTable list={reservations} />
        </div>
      </Container>
    </>
  );
};

export default MyReservationBack;
