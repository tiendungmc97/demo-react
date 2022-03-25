import FormInfor from "./features/FormInfor";
import Todo from "./features/Todo";
import "./styles/index.scss";

function App() {
  return (
    <div className="App">
      <Todo></Todo>
      <h2>Test: add ssh key for git</h2>
      <FormInfor/>
    </div>
  );
}

export default App;
