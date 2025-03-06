import { useState } from "react"
import { useUsers } from "../hooks/useUsers"

function UserForm(){
  const { createUserMutation } = useUsers();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserMutation.mutate({ name, email, password });
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container mt-4">
      <h2 className="h3">Добавить пользователя</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Имя</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Добавить</button>
      </form>
    </div>
  );
};

export default UserForm
