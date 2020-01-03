import React, { useEffect, useState } from "react";
import "./App.css";
import Contacts from "./contacts";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/contacts")
      .then(response => response.json())
      .then(data => setData({ data }))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="App">
      <Contacts data={data.data} />
    </div>
  );
}

export default App;
