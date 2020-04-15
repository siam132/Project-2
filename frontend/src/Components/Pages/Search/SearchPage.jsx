import React, { useState, useEffect } from "react";
import DataTable from "../../DataFetchers/shared/DataTable";
import useFetch from "../../DataFetchers/CRUD/useFetch";

const SearchPage = (props) => {
  let { employees, isLoading } = useFetch("/api/v1/employees/");
  const [search, setSearch] = useState("");
  let [filteredEmployees, setFilteredEmployees] = useState();

  useEffect(() => {
    setFilteredEmployees(
      employees.filter((employee) => {
        return employee.firstName.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, employees]);

  const sortByFirst = (e) => {
    filteredEmployees = employees;
    setFilteredEmployees(
      e.sort((a, b) => {
        if (a.firstName.toUpperCase() < b.firstName.toUpperCase()) return -1;
        if (a.firstName.toUpperCase() > b.firstName.toUpperCase()) return 1;
        return 0;
      })
    );
    console.log(e);
  };

  const sortByLast = (e) => {
    setFilteredEmployees(
      e.sort((a, b) => {
        if (a.lastName.toUpperCase() < b.lastName.toUpperCase()) return -1;
        if (a.lastName.toUpperCase() > b.lastName.toUpperCase()) return 1;
        return 0;
      })
    );
    console.log(filteredEmployees);
  };

  const sortBySalary = (e) => {
    setFilteredEmployees(
      e.sort((a, b) => {
        return parseFloat(a.salary) > parseFloat(b.salary) ? 1 : -1;
      })
    );
    console.log(e);
  };

  return (
    <div>
      <div className="container">
        <input
          className="my-3 input"
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        {isLoading ? (
          <div>...Loading </div>
        ) : (
          <div className="box">
            <table className="table table-bordered table-hover ">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">
                    <button
                      className="btn btn-outline-info"
                      onClick={() => sortByFirst(employees)}
                    >
                      First Name
                    </button>
                  </th>
                  <th scope="col">
                    <button
                      className="btn btn-outline-info"
                      onClick={() => sortByLast(employees)}
                    >
                      Last Name
                    </button>{" "}
                  </th>
                  <th scope="col">Address</th>
                  <th scope="col">Email Address</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">
                    <button
                      className="btn btn-outline-info"
                      onClick={() => sortBySalary(employees)}
                    >
                      Salary
                    </button>
                  </th>
                  <th scope="col">Edit Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployees.map((rowData) => (
                  <DataTable path={props} key={rowData.id} data={rowData} />
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
//http://localhost:8080/api/v1/person
