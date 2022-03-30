import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import AppHeader from "./components/appHeader";
import FormUser from "./features/FormInfor";
import Home from "./features/Home";
import Todo from "./features/Todo";
import "./styles/index.scss";

function App() {
  return (
    <div className="App">   
      <Router>
          <AppHeader />
          {/* // tao la tuan anh */}
          <Routes>
            <Route path="/todo" element={<Todo/>}/>
            <Route path="/form" element={<FormUser/>}/>
            <Route path="/" element={<Home/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
