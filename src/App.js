import logo from "./logo.svg";
import Todo from "./features/Todo";
import Form from "./features/Form";
import "./styles/index.scss";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, NavItem } from "reactstrap";

function App() {
  return (
    <div className="App">
      <Nav>
        <NavItem>
          <Link active to="/">
            TODO
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/form">Form</Link>
        </NavItem>
      </Nav>
      <Routes>
        <Route path="/" element={<Todo />}></Route>
        <Route path="/form" element={<Form />}></Route>
      </Routes>
    </div>
  );
}

export default App;
