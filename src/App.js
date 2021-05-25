import './App.css';
import logo from './logo.svg';

function App() {
  const today = new Date();
  console.log(today);

  const dateAsString = today.toString();
  console.log(dateAsString);

  // const today = new Date(new Date().valueOf())
  // .toISOString()
  // .slice(0, 10);

  // console.log(today);

  // const standardTime = new Date(new Date().valueOf())
  // .toISOString()
  // .slice(12, 16);

  // console.log(standardTime);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Today is {dateAsString.slice(0,21)}</p>

        <span>Enter your birthday:</span>
        <input type="date" />
      </header>
    </div>
  );
}

export default App;
