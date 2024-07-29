import { Card, Container } from "react-bootstrap";

const MyBeachFilter = () => {
  return (
    <>
      <Container fluid>
        <div>
          <Card>
            <Card.Body>
              <Card.Title className="filters-title">FILTERS</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Prova</Card.Subtitle>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link> {/* position absolute ad un bottoncino che mi porta su? */}
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
};
export default MyBeachFilter;
