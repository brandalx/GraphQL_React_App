import { useEffect, useState } from "react";
import "./App.css";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ALL_USERS } from "./query/user";
import { CREATE_USER } from "./mutations/user";

function App() {
  const { data, loading, error, refetch } = useQuery(GET_ALL_USERS, {
    pollInterval: 500,
  });
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("New user");
  const [age, setAge] = useState(10);
  const [newUser] = useMutation(CREATE_USER);

  useEffect(() => {
    console.log(data);
    if (!loading) {
      setUsers(data?.getAllUsers);
    }
  }, [data]);

  const getAll = (e) => {
    e.preventDefault();
    refetch();
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }
  const addUser = (e) => {
    e.preventDefault();
    newUser({
      variables: {
        input: {
          username,
          age: parseInt(age, 10),
        },
      },
    })
      .then(({ data }) => {
        console.log(data);
        setUsername("");
        setAge(0);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="App">
      <div>
        <form>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
          />
          <input
            value={age}
            onChange={(e) => setAge(parseInt(e.target.value, 10) || 0)}
            type="text"
          />
          <div className="btns">
            <button type="button" onClick={(e) => addUser(e)}>
              Create
            </button>

            <button onClick={(e) => getAll(e)}>Recive</button>
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
