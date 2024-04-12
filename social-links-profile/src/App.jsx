import React from "react"
import Card from "./components/Card"
import { useEffect,useState } from "react";
function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch("https://6611d8dc95fdb62f24edc940.mockapi.io/api/v2/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data)
        console.log(data)
      });
  
  }, [])
  return (
    <>
      {" "}
      {/* es un fracment */}
      <div>
      {users.map((user) => (
        <Card key={user.id} user={user} />
      ))}
      </div>

    </>
  );
}

export default App;
