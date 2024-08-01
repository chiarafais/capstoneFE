import { Button, Card, Col, Modal, Row } from "react-bootstrap";

const MyDetailCardModal = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dialogClassName="modal-90w"
        className="border-0 border-radius-none"
      >
        <Modal.Body className="position-relative">
          <Row className="mb-4">
            <Col xs={12}>
              <Modal.Title id="contained-modal-title-vcenter" className="text-uppercase fw-bold">
                {props.beachinfo.name_beach}
              </Modal.Title>
            </Col>
            <Col xs={12} xl={6}>
              <img src={props.beachinfo.img_beach} style={{ borderRadius: "2px" }} />
            </Col>
            <Col xs={12} xl={6} className="d-flex flex-column justify-content-between">
              <div className="detail-modal my-3">
                <Row className="mb-2">
                  <Col xs={6}>
                    PROVINCE: <span>{props.beachinfo.province}</span>
                  </Col>

                  <Col xs={6}>
                    COMUNE: <span>{props.beachinfo.comune}</span>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col xs={6}>
                    MAX PEOPLE NUM:<span>{props.beachinfo.max_people}</span>{" "}
                  </Col>

                  <Col xs={6}>
                    RESERVED PLACES: <span>{props.beachinfo.reserved_places}</span>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col xs={6}>
                    ENTRY PRICE:
                    <span>
                      €{props.beachinfo.price_entry} / <i className="bi bi-person-standing"></i>
                    </span>
                  </Col>

                  <Col xs={6}>
                    PARKING PRICE:
                    <span>
                      €{props.beachinfo.price_parking} / <i className="bi bi-car-front-fill"></i>
                    </span>
                  </Col>
                </Row>
              </div>
              <div>
                <iframe
                  src={props.beachinfo.geo_card}
                  height="200"
                  style={{ border: 0, borderRadius: "2px", width: "100%", marginTop: "10px" }}
                  allowFullScreen=""
                  loading="lazy"
                  //   referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Col>
          </Row>
          <Button onClick={props.onHide} className="button-close-modal-detail">
            Close
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MyDetailCardModal;
