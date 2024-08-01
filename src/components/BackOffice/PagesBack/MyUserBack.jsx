import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../redux/actions";
import MyUsersTable from "../MyUsersTable";

const MyUserBack = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const users = useSelector((state) => state.admin.users);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <>
      <Container fluid className="bg-light-yellow">
        <div>
          <span className="back-btn" onClick={() => navigate("/admin")}>
            <i className="bi bi-arrow-left-circle-fill"></i>
          </span>
          <MyUsersTable list={users} />
        </div>
      </Container>
    </>
  );
};

export default MyUserBack;
