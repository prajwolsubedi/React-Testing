import "./App.css";
import Greet from "./components/Greet/greet";
import { Application } from "./components/application/Application";
import { AppProviders } from "./providers/app-providers";
function App() {
  const name = "Sahin";
  return (
    <AppProviders>
      <div className="App">
        <h1>Learn React</h1>
        <Greet name={name} />
        <Application />
      </div>
    </AppProviders>
  );
}

export default App;
