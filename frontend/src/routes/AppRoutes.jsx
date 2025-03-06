import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import UserForm from "../pages/UserForm"
import UserList from "../pages/UserList"

function AppRoutes(){
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">CRUD App</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Пользователи</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add">Добавить</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/add" element={<UserForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRoutes
