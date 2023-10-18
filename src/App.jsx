import React, { useId, useState } from "react";
import JSONData from "./MOCK.json";
const App = () => {
  const [users, setUsers] = useState(JSONData);
  const [page, setPage] = useState(1);
  const noOfPages = users.length / 10;
  return (
    <div className="App">
      {users.slice(page * 10 - 10, page * 10).map((user) => {
        return (
          <div className="user" key={user.id}>
            <h3>{user.first_name}</h3>
            <h3>{user.last_name}</h3>
            <h3>{user.email}</h3>
          </div>
        );
      })}
      {users.length > 0 && (
        <div className="pagination">
          <button
            className="prev_next"
            onClick={() => setPage((prev) => prev - 1)}
            disabled={page === 1}
          >
            Prev
          </button>
          {[...Array(noOfPages)].map((_, i) => {
            return (
              <button
                key={i}
                onClick={() => {
                  setPage(i + 1);
                }}
                className={`pageNo ${page === i + 1 ? "show" : ""}`}
              >
                {i + 1}
              </button>
            );
          })}
          <button
            className="prev_next"
            onClick={() => setPage((prev) => prev + 1)}
            disabled={page === noOfPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
