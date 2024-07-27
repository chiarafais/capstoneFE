import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { useDispatch } from "react-redux";
import { doLogin } from "../../../redux/actions";

const MyLoginModal = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(doLogin(email, password));
  };

  return (
    <>
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered className="modal-login">
        <Modal.Header closeButton>
          <Modal.Title className="text-center sardegna-login-logo" id="contained-modal-title-vcenter">
            <img src="/src/assets/logo_sardegna.png" alt="" className="logo_sardegna" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 className="text-center">SIGN IN</h4>
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                className="my-3"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                className="my-3"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="w-100 mt-2 login-button-on-modal "
              onClick={props.onHide}
            >
              LOGIN
            </Button>
          </Form>
          <div className="text-center">
            <p className="mb-0 mt-1">or</p>
            <Button className="register-button-login-modal">Register</Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default MyLoginModal;
