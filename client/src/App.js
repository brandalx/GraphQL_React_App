import { useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

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
          {users.map((user) => (
            <div className="user">
              {user.id}. {user.username} {user.age}{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
