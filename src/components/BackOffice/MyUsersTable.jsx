import { Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../redux/actions";
import Swal from "sweetalert2";

const MyUsersTable = (props) => {
  console.log(props);
  const dispatch = useDispatch();

  const deleteUtente = (userId) => {
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
        dispatch(deleteUser(userId));
      }
    });
  };

  return (
    <>
      <Table responsive bordered hover size="sm" className="table-users">
        <thead>
          <tr>
            <th>id</th>
            <th>username</th>
            <th>name</th>
            <th>surname</th>
            <th>email</th>
            <th>role</th>
            <th>enabled</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.list &&
            props.list.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.username}</td>
                  <td>{item.name}</td>
                  <td>{item.surname}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td>{String(item.enabled)}</td>
                  <td className="text-center" onClick={() => deleteUtente(item.id)}>
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

export default MyUsersTable;
