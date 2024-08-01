import { useState } from "react";
import { Button, Card, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useSelector } from "react-redux";
import MyDetailCardModal from "./MyDetailCardModal";

const MyBeachCard = (props) => {
  const token = useSelector((state) => state.login.results);
  const [modalDetailshow, setModalDetailShow] = useState(false);

  const openMaps = (link) => {
    window.open(link, "_blank");
  };
  return (
    <>
      <Col xs={12} sm={token ? 12 : 6} md={token ? 6 : 6} lg={token ? 6 : 4} xl={token ? 4 : 3} xxl={token ? 3 : 3}>
        <Card>
          <Card.Img className="img-card-beach" variant="top" src={props.props.img_beach} />
          <Card.Body>
            <Card.Title className="beach-card-title">{props.props.name_beach}</Card.Title>
            <div className="d-flex justify-content-between">
              <div className="d-flex align-items-baseline">
                <p className="lable-card">max people: </p>
                <small className="data-card">{props.props.max_people}</small>
              </div>
              <div className="d-flex align-items-baseline">
                <p className="lable-card">reserved place: </p>
                <small className="data-card">{props.props.reserved_places}</small>
              </div>
            </div>

            <div className="d-flex justify-content-between  align-items-baseline">
              <div className="d-flex mt-2">
                <div className="d-flex">
                  <p>€ {props.props.price_entry}</p>
                  <p>
                    /<i className="bi bi-person-standing"></i>
                  </p>
                </div>
                <div className="d-flex mx-2">
                  <p>€ {props.props.price_parking}</p>
                  <p>
                    /<i className="bi bi-car-front-fill"></i>
                  </p>
                </div>
              </div>

              <Button className="card-details-button" onClick={() => setModalDetailShow(true)}>
                DETAILS
              </Button>
            </div>
          </Card.Body>

          <OverlayTrigger overlay={<Tooltip id={props.props.id}>Click for maps</Tooltip>}>
            <span className="icon-position-beach" onClick={() => openMaps(props.props.link_mappe)}>
              <i className="bi bi-geo-alt-fill"></i>
            </span>
          </OverlayTrigger>
        </Card>
      </Col>
      <MyDetailCardModal show={modalDetailshow} onHide={() => setModalDetailShow(false)} beachinfo={props.props} />
    </>
  );
};
export default MyBeachCard;
