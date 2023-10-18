import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const handleScroll = (e) => {
    console.log(e);
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

    console.log(scrollTop);
    console.log(clientHeight);
    console.log(scrollHeight);

    if (scrollTop + clientHeight >= scrollHeight) {
      setPage((prev) => prev + 1);
    }
  };

  const fetchData = async () => {
    setLoading(true);
    const users = await axios.get(
      `https://randomuser.me/api/?page=${page}&results=80`
    );
    const result = await users.data.results;
    setData((prev) => [...prev, ...result]);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [page]);
  // console.log(data);

  return (
    <div className="container" onScroll={handleScroll}>
      <h3>Infinite ScrollBar</h3>
      {data &&
        data.map((user, idx) => {
          return <div key={idx}>{user.name.first}</div>;
        })}
      {loading && <h1>Loadimg...</h1>}
    </div>
  );
};

export default App;
