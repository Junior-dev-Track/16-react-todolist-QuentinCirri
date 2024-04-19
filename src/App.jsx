import Todolist from "./Todolist.jsx";

function App() {
  return (
    <>
      <h1>My Todo App</h1>
      <hr />
      <input type="text" placeholder="Type a new todo" />
      <div></div>
      <button style={{ backgroundColor: "blue", color: "white" }}>
        Add Todo
      </button>
      <hr />
      <h2>Todos</h2>
      <Todolist />
    </>
  );
}

export default App;
