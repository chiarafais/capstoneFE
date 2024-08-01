import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editBeach } from "../../redux/actions";

const MyModalEditBeach = (props) => {
  const dispatch = useDispatch();
  const [beachName, setBeachName] = useState("");
  const [comune, setComune] = useState("");
  const [province, setProvince] = useState("");
  const [mapsCode, setMapsCode] = useState("");
  const [mapsPosition, setMapsPosition] = useState("");
  const [maxNumber, setMaxNumber] = useState(0);
  const [entryprice, setEntryprice] = useState(0);
  const [parkingPrice, setParkingPrice] = useState(0);
  const [closeNumber, setCloseNumber] = useState(true);
  const [establishment, setEstablishment] = useState(true);
  const [imgBeach, setImgBeach] = useState("");

  const saveEditBeach = (event) => {
    event.preventDefault();
    const beach = {
      province: province,
      comune: comune,
      name_beach: beachName,
      max_people: Number(maxNumber),
      price_entry: Number(entryprice),
      price_parking: Number(parkingPrice),
      close_number: closeNumber,
      establishment: establishment,
      img_beach: imgBeach,
      link_maps: mapsPosition,
      geo_card: mapsCode,
    };
    dispatch(editBeach(beach, props.selectedbeach.id));
  };

  useEffect(() => {
    console.debug(props);
    setBeachName(props.selectedbeach.name_beach);
    setProvince(props.selectedbeach.province);
    setComune(props.selectedbeach.comune);
    setMapsCode(props.selectedbeach.geo_card);
    setMapsPosition(props.selectedbeach.link_mappe);
    setMaxNumber(props.selectedbeach.max_people);
    setEntryprice(props.selectedbeach.price_entry);
    setParkingPrice(props.selectedbeach.price_parking);
    setCloseNumber(props.selectedbeach.close_number);
    setEstablishment(props.selectedbeach.establishment);
    setImgBeach(props.selectedbeach.img_beach);
  }, [props.selectedbeach]);
  return (
    <>
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" backdrop="static" centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-center" id="contained-modal-title-vcenter">
            EDIT BEACH
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={saveEditBeach}>
            <Form.Label htmlFor="" className="mt-2">
              Beach name
            </Form.Label>
            <Form.Control
              type="text"
              id=""
              aria-describedby=""
              value={beachName}
              onChange={(e) => setBeachName(e.target.value)}
            />

            <Form.Label htmlFor="" className="mt-2">
              Comune
            </Form.Label>
            <Form.Control
              type="text"
              id=""
              aria-describedby=""
              value={comune}
              onChange={(e) => setComune(e.target.value)}
            />

            <Form.Label htmlFor="" className="mt-2">
              Province
            </Form.Label>
            <Form.Control
              type="text"
              id=""
              aria-describedby=""
              value={province}
              onChange={(e) => setProvince(e.target.value)}
            />

            <Form.Label htmlFor="" className="mt-2">
              Beach image
            </Form.Label>
            <Form.Control
              type="text"
              id=""
              aria-describedby=""
              value={imgBeach}
              onChange={(e) => setImgBeach(e.target.value)}
            />

            <Form.Label htmlFor="" className="mt-2">
              Maps code link
            </Form.Label>
            <Form.Control
              type="text"
              id=""
              aria-describedby=""
              value={mapsCode}
              onChange={(e) => setMapsCode(e.target.value)}
            />

            <Form.Label htmlFor="" className="mt-2">
              Maps position
            </Form.Label>
            <Form.Control
              type="text"
              id=""
              aria-describedby=""
              value={mapsPosition}
              onChange={(e) => setMapsPosition(e.target.value)}
            />

            <Form.Label htmlFor="" className="mt-2">
              Max number people
            </Form.Label>
            <Form.Control
              type="number"
              id=""
              aria-describedby=""
              value={maxNumber}
              onChange={(e) => setMaxNumber(e.target.value)}
            />

            <Form.Label htmlFor="" className="mt-2">
              Entry price &#40; € &#41;
            </Form.Label>
            <Form.Control
              type="number"
              id=""
              aria-describedby=""
              value={entryprice}
              onChange={(e) => setEntryprice(e.target.value)}
            />

            <Form.Label htmlFor="" className="mt-2">
              Parking price &#40; € &#41;
            </Form.Label>
            <Form.Control
              type="number"
              id=""
              aria-describedby=""
              value={parkingPrice}
              onChange={(e) => setParkingPrice(e.target.value)}
            />

            <Form.Label htmlFor="" className="mt-2">
              Close number?
            </Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={closeNumber}
              onChange={(e) => setCloseNumber(e.target.value)}
            >
              <option value={true}>True</option>
              <option value={false}>False</option>
            </Form.Select>

            <Form.Label htmlFor="" className="mt-2">
              Establishment?
            </Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={establishment}
              onChange={(e) => setEstablishment(e.target.value)}
            >
              <option value={true}>True</option>
              <option value={false}>False</option>
            </Form.Select>
            <Button type="submit" onClick={props.onHide}>
              EDIT BEACH DATA
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MyModalEditBeach;
