import "./App.css";
import Adverts from "./components/Adverts";

function App() {
  return (
    <div className="App">
      <Adverts />
      <div className="App-hint">
        <ul style={{ alignItems: "flex-end" }}>
          <li>Одобрить</li>
          <li>Отклонить</li>
          <li>Эскалация</li>
          <li>Сохранить</li>
        </ul>
        <ul style={{ color: "#777777" }}>
          <li>
            <span className="dot" style={{ backgroundColor: "#88BD35" }}></span>
            <span>Пробел</span>
          </li>
          <li>
            <span className="dot" style={{ backgroundColor: "#F7882E" }}></span>
            <span>Del</span>
          </li>
          <li>
            <span className="dot" style={{ backgroundColor: "#1764CC" }}></span>
            <span>Shift+Enter</span>
          </li>
          <li>
            <span className="dot" style={{ backgroundColor: "none" }}></span>
            <span>F7</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
