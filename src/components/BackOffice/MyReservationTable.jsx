import { Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { adminDeleteReservation } from "../../redux/actions";
import Swal from "sweetalert2";

const MyReservationTable = (props) => {
  console.log(props);
  const dispatch = useDispatch();

  const deleteRes = (userId) => {
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
        dispatch(adminDeleteReservation(userId));
      }
    });
  };

  return (
    <>
      <Table responsive bordered hover size="sm" className="table-reservations">
        <thead>
          <tr>
            <th>reservation id</th>
            <th>beach name</th>
            <th>email</th>
            <th>start date</th>
            <th>end date</th>
            <th>people number</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.list &&
            props.list.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.beach.name_beach}</td>
                  <td>{item.user.email}</td>
                  <td>{item.dateStart}</td>
                  <td>{item.dateEnd}</td>
                  <td>{item.peopleNumber}</td>
                  <td className="text-center" onClick={() => deleteRes(item.id)}>
                    <i className="bi bi-trash3-fill btn-delete"></i>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
};

export default MyReservationTable;
