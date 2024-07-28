import { Button, Col, Container, Dropdown, Form, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DO_LOGIN, doLogout, getMyProfile, updateMyProfile } from "../../../redux/actions";
import MyLoginModal from "./MyLoginModal";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import MyRegModal from "./MyRegModal";

const MyNavbar = () => {
  const dispatch = useDispatch();
  const [modalLoginShow, setModalLoginShow] = useState(false);
  const [modalRegShow, setModalRegShow] = useState(false);
  const [updateProfile, setUpdateProfile] = useState(false);

  const token = useSelector((state) => state.login.results);
  const userInfo = useSelector((state) => state.profile.results);

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const handleProfileUpdate = () => {
    setUpdateProfile(false);

    const updateData = {
      name: name ? name : userInfo.name,
      surname: surname ? surname : userInfo.surname,
      username: username ? username : userInfo.username,
    };

    dispatch(updateMyProfile(updateData));
  };

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
          <Col xs={12} sm={4}>
            <div className="text-center text-sm-start my-3 my-sm-0">
              <img src="/src/assets/logo_sardegna.png" alt="" className="logo_sardegna" />
            </div>
          </Col>

          <Col xs={6} sm={4}>
            {userInfo && (
              <div className="text-center">
                <Button className=" button-your-reservation">YOUR RESERVATION</Button>
              </div>
            )}
          </Col>

          <Col xs={6} sm={4}>
            {!token && (
              <div className="text-end zona-bottoni">
                <button onClick={() => setModalRegShow(true)}>Register</button>
                <button className="mx-3" onClick={() => setModalLoginShow(true)}>
                  Login
                </button>
              </div>
            )}

            {userInfo && (
              <div className="text-end ">
                <Dropdown as={ButtonGroup} className="dropdown-profile-user" autoClose={false}>
                  <Button className="button-username">
                    {userInfo.username}
                    <i className="bi bi-person-circle mx-2"></i>
                  </Button>

                  <Dropdown.Toggle split id="dropdown-split-basic" className="trigger-dropdown" />

                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <span className="dropdown-profile-label">USERNAME: </span>
                      {!updateProfile && <span>{userInfo.username}</span>}
                      {updateProfile && (
                        <span>
                          <Form.Control
                            className="my-3"
                            type="text"
                            value={username}
                            placeholder={userInfo.username}
                            onChange={(e) => setUsername(e.target.value)}
                          />
                        </span>
                      )}
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <span className="dropdown-profile-label">NAME: </span>
                      {!updateProfile && <span>{userInfo.name}</span>}
                      {updateProfile && (
                        <span>
                          <Form.Control
                            className="my-3"
                            type="text"
                            value={name}
                            placeholder={userInfo.name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </span>
                      )}
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <span className="dropdown-profile-label">SURNAME: </span>
                      {!updateProfile && <span>{userInfo.surname}</span>}
                      {updateProfile && (
                        <span>
                          <Form.Control
                            className="my-3"
                            type="text"
                            value={surname}
                            placeholder={userInfo.surname}
                            onChange={(e) => setSurname(e.target.value)}
                          />
                        </span>
                      )}
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <span className="dropdown-profile-label">EMAIL:</span> {userInfo.email}
                    </Dropdown.Item>
                    <div className="text-end">
                      {!updateProfile && (
                        <div className="d-flex justify-content-around">
                          <span onClick={() => dispatch(doLogout())}>
                            <i className="bi bi-box-arrow-left text-danger icon-user-dropdown"></i>
                          </span>

                          <span onClick={() => setUpdateProfile(true)}>
                            <i className="bi bi-pencil-square icon-user-dropdown"></i>
                          </span>
                        </div>
                      )}
                      {updateProfile && (
                        <span onClick={() => handleProfileUpdate()}>
                          <i className="bi bi-check-square-fill text-success icon-user-dropdown"></i>
                        </span>
                      )}
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            )}
          </Col>
        </Row>
        <MyRegModal show={modalRegShow} onHide={() => setModalRegShow(false)} />
        <MyLoginModal show={modalLoginShow} onHide={() => setModalLoginShow(false)} />
      </Container>
    </>
  );
};
export default MyNavbar;
