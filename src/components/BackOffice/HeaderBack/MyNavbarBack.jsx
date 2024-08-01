import { Button, Container, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { doLogout } from "../../../redux/actions";

const MyNavbarBack = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <Navbar className="bg-body-tertiary navbar-back-bg">
          <Container className="d-flex">
            <Navbar.Brand>
              <div className="text-start my-3">
                <img src="/src/assets/logo_sardegna.png" alt="" className="logo_sardegna_back" />
              </div>
            </Navbar.Brand>
            <Button className="btn-logout" onClick={() => dispatch(doLogout())}>
              LOGOUT
            </Button>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default MyNavbarBack;
