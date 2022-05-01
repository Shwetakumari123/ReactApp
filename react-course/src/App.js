import BackDrop from "./components/BackDrop";
import Modal from "./components/Modal";
import { ToDo } from "./components/ToDo";

function App() {
  return (
    <div>
      <h1>To Do</h1>
      <ToDo text="Learn React" />
      <ToDo text="Master react" />
      <ToDo text="Explore the full react" />
    </div>
  );
}

export default App;
