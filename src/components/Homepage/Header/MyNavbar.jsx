import { Button, Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DO_LOGIN, getMyProfile } from "../../../redux/actions";
import MyLoginModal from "./MyLoginModal";

const MyNavbar = () => {
  const dispatch = useDispatch();
  const [modalLoginShow, setModalLoginShow] = useState(false);
  const token = useSelector((state) => state.login.results);
  const userInfo = useSelector((state) => state.profile.results);

  useEffect(() => {
    if (localStorage.getItem("tkn")) {
      dispatch({ type: DO_LOGIN, payload: localStorage.getItem("tkn") });
      dispatch(getMyProfile());
    }
  }, []);

  return (
    <>
      <Container fluid>
        <Row className="pt-3 pb-3">
          <Col xs={4}>
            <div>
              <img src="/src/assets/logo_sardegna.png" alt="" className="logo_sardegna" />
            </div>
          </Col>

          <Col xs={4}>
            {userInfo && (
              <div className="text-center">
                <Button className=" button-your-reservation">YOUR RESERVATION</Button>
              </div>
            )}
          </Col>

          <Col xs={4}>
            {!token && (
              <div className="text-end zona-bottoni">
                <button>Register</button>
                <button className="mx-3" onClick={() => setModalLoginShow(true)}>
                  Login
                </button>
              </div>
            )}

            {userInfo && (
              <div className="text-end ">
                <Button className="button-username">
                  {userInfo.username}
                  <i className="bi bi-person-circle mx-1"></i>
                </Button>
              </div>
            )}
          </Col>
        </Row>
        <MyLoginModal show={modalLoginShow} onHide={() => setModalLoginShow(false)} />
      </Container>
    </>
  );
};
export default MyNavbar;
