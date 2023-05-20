import logo from "./logo.svg";
import "./App.css";
import { jsPDF } from "jspdf";
import './Arimo-Regular-normal';

function App() {
  const handleClick = () => {
    const doc = new jsPDF();
    doc.setFont("Arimo-Regular", 'normal');

    doc.html(document.body, {
      callback: function (doc) {
        doc.save();
      },
    });
  };
  return (
    <div className="App">
      <p>ololollolol</p>
      <p>русский текст</p>
      <button onClick={handleClick}>Print PDF</button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
