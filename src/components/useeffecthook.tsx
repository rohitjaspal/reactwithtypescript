import { useEffect, useRef, useState } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
}

const UseEffectHook = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState(null);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) return ref.current.focus();
  }, []);

  useEffect(() => {
    document.title = "useEffect hook";
  }, []);

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((err) => setError(err.message));
  });

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );

  {
    /*         
        <label htmlFor="name" className="for">Name : </label>
        <input ref={ref} type="text" id="name" className="form-control" /> */
  }
};

export default UseEffectHook;
