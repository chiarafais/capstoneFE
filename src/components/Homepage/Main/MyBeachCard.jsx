import { Button, Card, Col, Container } from "react-bootstrap";

const MyBeachCard = (props) => {
  return (
    <>
      <Col xs={12} lg={6} xl={4}>
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

              <Button className="card-details-button">DETAILS</Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};
export default MyBeachCard;
