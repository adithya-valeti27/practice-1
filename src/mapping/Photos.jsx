import React, { useState, useEffect } from "react";

const Photos = () => {
  const [pics, setPics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      setError(false);

      try {
        const url = "https://jsonplaceholder.typicode.com/photos";
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        if (res.ok) {
          setPics(data);
        } else {
          console.error("Error fetching the data", res);
          setError(true);
        }
      } catch (error) {
        console.error("Error fetching the data", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  return (
    <div>
      {loading ? <h1>Loading...</h1> : null}
      {error ? <h1>Error</h1> : null}
      <ol>
        {pics.map((unq) => (
          <li key={unq.id}>
            <img style={{height:"34px"}} src={unq.url} alt={unq.title} />
            {unq.title}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Photos;
