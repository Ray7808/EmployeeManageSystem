import { Link } from "react-router-dom";

function Employee() {
  return (
    <div className="px-5 py-3">
      <div className="d-flex justify-content-center">
        <h3>Employee List</h3>
      </div>
      <Link to="/create" className="btn btn-success">
        Add Employee
      </Link>
      <table>
        <thead></thead>
        <tr>
          <th>Name</th>
          <th>Image</th>
          <th>Email</th>
          <th>Address</th>
        </tr>
      </table>
    </div>
  );
}

export default Employee;
