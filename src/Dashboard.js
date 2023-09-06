import React, { useState, useEffect } from "react";

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [sortBy, setSortBy] = useState("registrationDate");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8); 

  useEffect(() => {
    fetch("http://localhost:5000/users", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setUsers(data))
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const filteredAndSortedUsers = users
    .filter((user) =>
      user.name.toLowerCase().includes(filterText.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "year") {
        return a.year - b.year;
      } else if (sortBy === "registrationDate") {
        return new Date(a.registrationDate) - new Date(b.registrationDate);
      }
    });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const usersToDisplay = filteredAndSortedUsers.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredAndSortedUsers.length / itemsPerPage);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="filter-and-sort">
        <input
          type="text"
          placeholder="Filter by name"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="registrationDate">Sort by Registration Date</option>
          <option value="name">Sort by Name</option>
          <option value="year">Sort by Year</option>
        </select>
      </div>
      <p>Total Users Registered: {filteredAndSortedUsers.length}</p>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Graduation Year</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>Registration Date</th>
          </tr>
        </thead>
        <tbody>
          {usersToDisplay.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.year}</td>
              <td>{user.email}</td>
              <td>{user.mnumber}</td>
              <td>{new Date(user.registrationDate).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <span
            key={index}
            onClick={() => goToPage(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
