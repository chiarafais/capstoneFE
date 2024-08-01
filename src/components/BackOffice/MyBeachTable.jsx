import { Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteBeach } from "../../redux/actions";
import MyModalEditBeach from "./MyModalEditBeach";
import { useState } from "react";
import Swal from "sweetalert2";

const MyBeachTable = (props) => {
  const [modalEditShow, setModalEditShow] = useState(false);
  const [selectedBeach, setSelectedBeach] = useState({});

  const dispatch = useDispatch();

  const deleteBea = (userId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d55a3c",
      cancelButtonColor: "#1c4175",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteBeach(userId));
      }
    });
  };

  const editSingleBeach = (beach) => {
    setSelectedBeach(beach);
    setTimeout(() => {
      setModalEditShow(true);
    }, 0);
  };

  return (
    <>
      <Table bordered hover size="sm" className="table-beaches">
        <thead>
          <tr>
            <th>id</th>
            <th>name beach</th>
            <th>province</th>
            <th>comune</th>
            <th>max people</th>
            <th>close number</th>
            <th>establishment</th>
            <th>price entry</th>
            <th>price parking</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.list &&
            props.list.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name_beach}</td>
                  <td>{item.province}</td>
                  <td>{item.comune}</td>
                  <td>{item.max_people}</td>
                  <td>{String(item.close_number)}</td>
                  <td>{String(item.establishment)}</td>
                  <td>{item.price_entry}</td>
                  <td>{item.price_parking}</td>
                  <td className="text-center" onClick={() => deleteBea(item.id)}>
                    <i className="bi bi-trash3-fill btn-delete"></i>
                  </td>
                  <td onClick={() => editSingleBeach(item)}>
                    <i className="bi bi-pencil-fill btn-edit"></i>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <MyModalEditBeach show={modalEditShow} onHide={() => setModalEditShow(false)} selectedbeach={selectedBeach} />
    </>
  );
};

export default MyBeachTable;
