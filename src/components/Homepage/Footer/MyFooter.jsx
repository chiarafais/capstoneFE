import { Carousel, Col, Container, Row } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const MyFooter = () => {
  return (
    <>
      <div className="bg-footer">
        <Container fluid>
          <div>
            <h1 className="m-0"></h1>
          </div>
          <Row className="text-light">
            <Col xs={12} sm={4}>
              <div className="my-5 text-center" style={{ color: "#f4a000" }}>
                <p className="text-uppercase">About us</p>
                <small>
                  Sardinia is a magical place where you can find quartz beaches but also pink beaches, a place of
                  crystal clear sea and wonderful rocks! Respect the place and use our site to book your dream
                  destination for a day!
                </small>
              </div>
            </Col>
            <Col xs={6} sm={2}>
              <div className=" my-0 my-sm-5 text-center" style={{ color: "#d4490b" }}>
                <p className="text-uppercase">contact</p>
                <div className="d-flex flex-column" style={{ fontSize: "20px" }}>
                  <small className="d-blok mb-1">
                    <i className="bi bi-github"></i>
                  </small>
                  <small className="d-blok">
                    <i className="bi bi-linkedin"></i>
                  </small>
                  <small className="d-blok my-1">
                    <i className="bi bi-instagram"></i>
                  </small>
                </div>
              </div>
            </Col>
            <Col xs={6} sm={3}>
              <div className="my-0 my-sm-5 text-center" style={{ color: "#6b810e" }}>
                <p className="text-uppercase">developed using</p>
                <div className="d-flex flex-column">
                  <small>React</small>
                  <small>CSS</small>
                  <small>JavaScript</small>
                  <small>Spring</small>
                  <small>java</small>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={3}>
              <div className="my-5">
                {/* <Carousel fade className="carosello" data-bs-theme="dark">
                  <Carousel.Item>
                    <img
                      src="https://spiagge.life/image.php/image.jpg?width=1000&cropratio=7:4&image=/uploads/strutture/227/spiaggia-is-arutas_3226.jpg"
                      alt=""
                      width={250}
                      height={150}
                    />
                    <Carousel.Caption>
                      <h6 className="text-dark">Is Arutas</h6>
                      <small className="text-dark">Spiaggia di quarzo con un mare cristallino.</small>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src="https://i.ytimg.com/vi/4HQRgafQQHE/maxresdefault.jpg" alt="" width={250} height={150} />
                    <Carousel.Caption>
                      <h6 className="my-1 text-dark">S'archittu</h6>
                      <small className="text-dark">Spettacolare squarcio di sardegna da vedere assolutamente!</small>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src="https://static.charmingsardinia.com/hotels/48/gallery/files/le-dune-piscinas-sardinia40.jpg"
                      alt=""
                      width={250}
                      height={150}
                    />
                    <Carousel.Caption>
                      <h6 className="my-1">Piscinas</h6>
                      <small>Spiaggia in costa verde, conosciuto come il deserto sardo.</small>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel> */}
                <h1 style={{ fontSize: "30px" }}>SIGN UP</h1>
                <p>
                  to receive tips to use in sardinia travel <i className="bi bi-pin-angle"></i>
                </p>
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3 text-dark">
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    style={{ borderRadius: "4px", border: "none" }}
                  />
                </FloatingLabel>
              </div>
            </Col>
          </Row>
          <div className="text-center ">
            <img src="/src/assets/logo_sardegna.png" alt="" className="logo_sardegna_footer py-3" />
            <small className="d-block text-light pb-2" style={{ fontSize: "12px" }}>
              © 2024 chiara.sardegna <i className="bi bi-code-slash"></i>
            </small>
          </div>
        </Container>
      </div>
    </>
  );
};
export default MyFooter;
