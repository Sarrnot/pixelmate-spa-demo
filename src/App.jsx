import "./App.scss";
import { Routes } from "./Routes";
import { AppLayout } from "pages/AppLayout";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes />
      </AppLayout>
    </Router>
  );
}

export default App;
