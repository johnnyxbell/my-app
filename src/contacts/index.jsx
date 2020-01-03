import React, { useState } from "react";
import phoneFormatter from "phone-formatter";
const Contacts = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredData =
    data &&
    data.filter(d => d.name.toLowerCase().includes(searchTerm.toLowerCase()));
  const onButtonClick = () => {
    fetch("http://localhost:3000/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: "Jimmy G",
        number: phoneFormatter.normalize("+1 (212) 555-1212"),
        context: "49ers player"
      })
    })
      .then(res => res.json())
      .catch(err => console.log(err));
  };
  return (
    <>
      <input
        type="text"
        id="name"
        name="name"
        onChange={e => {
          setSearchTerm(e.target.value);
        }}
      />
      {data &&
        filteredData.map(item => {
          const number = phoneFormatter.normalize(item.number);
          return (
            <div
              style={{
                border: "1px solid black",
                width: 150,
                margin: "10px 0"
              }}
              key={item.id}
            >
              <div>{item.name}</div>
              <div>{phoneFormatter.format(number, "(NNN) NNN-NNNN")}</div>
              <div>{item.context}</div>
            </div>
          );
        })}
      <button onClick={() => onButtonClick()}>Send Data</button>
    </>
  );
};
export default Contacts;
