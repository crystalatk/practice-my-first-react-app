import './App.css';

function Hello(props) {
  console.log(props);
  return (
    <>
      <h1 className="title">Hello, {props.name}!</h1>
      <h3>The fish is {props.fish}.</h3>
      <h6>{props.children}</h6>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello name="Crystal" fish="green" />
      </header>
    </div>
  );
}

export default App;
