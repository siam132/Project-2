import React from "react";
import { Link } from "react-router-dom";

const DataTable = (props) => {
  const row = props.data;
  if(!row.phone_no)
  row.phone_no = "N/A"
  return (
    <tr id={row.id}>
      
      <td>{row.firstName}</td>
      <td>{row.lastName}</td>
      <td>{row.address}</td>
      <td>{row.emailId}</td>
      <td>{row.phone_no}</td>
      <td>${row.salary}</td>
      <td>
        <Link className="btn btn-outline-info" to={`/Modify/${row.id}`}>
          Update/Fire
        </Link>
      </td>
    </tr>
  );
};

export default DataTable;
