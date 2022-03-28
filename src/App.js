import FormInfor from "./features/FormInfor";
import Todo from "./features/Todo";
import "./styles/index.scss";

function App() {
  return (
<<<<<<< HEAD
    <div className="App">   
      <Router>
          <AppHeader />

          {/* nhanh cua dung */}
          <Routes>
            <Route path="/todo" element={<Todo/>}/>
            <Route path="/form" element={<FormUser/>}/>
            <Route path="/" element={<Home/>}/>
          </Routes>
      </Router>
    <div className="App">
      <Todo></Todo>
      <h2>Test: add ssh key for git</h2>
      <FormInfor/>
    </div>
  );
}

export default App;
