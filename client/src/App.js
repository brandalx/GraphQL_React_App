import { useEffect, useState } from "react";
import "./App.css";
import { useQuery } from "@apollo/client";
import { GET_ALL_USERS } from "./query/user";

function App() {
  const { data, loading, error } = useQuery(GET_ALL_USERS);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log(data);
    if (!loading) {
      setUsers(data?.getAllUsers);
    }
  }, [data]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="App">
      <div>
        <form>
          <input type="text" />
          <input type="text" />
          <div className="btns">
            <button>Create</button>
            <button>Recive</button>
          </div>
        </form>
        <div>
          {users?.map((user) => (
            <div className="user" key={user.id}>
              {user.id}. {user.username} {user.age}{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
