import Routes from "./routes/Routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Importa Bootstrap + Popper

import "./app.css";

function App() {
  return (
    <>
      <div className="App">
        <Routes />
      </div>
    </>
  );
}

export default App;
