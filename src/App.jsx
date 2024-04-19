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
      <input type="checkbox" name="Learn React" id="" />
      <label htmlFor="Learn React">Learn React</label>
      <div></div>
      <input type="checkbox" name="Be Awesome!" id="" />
      <label htmlFor="Be Awesome">Be Awesome</label>
    </>
  );
}

export default App;
