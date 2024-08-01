import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import MyBeachTable from "../MyBeachTable";
import { adminGetAllBeaches } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import MyModalAddBeach from "../MyModalAddBeach";

const MyBeachBack = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showAddBeach, setShowAddBeach] = useState(false);

  const beaches = useSelector((state) => state.admin.beaches);

  useEffect(() => {
    dispatch(adminGetAllBeaches());
  }, []);
  return (
    <>
      <Container fluid className="bg-light-yellow">
        <div>
          <div className="d-flex justify-content-between mb-4">
            <span className="back-btn-blue" onClick={() => navigate("/admin")}>
              <i className="bi bi-arrow-left-circle-fill"></i>
            </span>
            <span className="back-btn-blue" onClick={() => setShowAddBeach(true)}>
              <i className="bi bi-plus-circle-fill"></i>
            </span>
          </div>
          <MyModalAddBeach show={showAddBeach} onHide={() => setShowAddBeach(false)} />
          <MyBeachTable list={beaches} />
        </div>
      </Container>
    </>
  );
};

export default MyBeachBack;
