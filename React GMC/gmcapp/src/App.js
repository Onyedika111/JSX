import logo from "./logo.svg";
import "./App.css";
import FullName from "./components/profile/FullName";
import ProfilePhoto from "./components/profile/ProfilePhoto";
import Address from "./components/profile/Address";

function App() {
  return (
    <div className="App">
      <ProfilePhoto />
      <FullName firstName="Kachi" lastName="Celestine" />
      <Address />
    </div>
  );
}

export default App; 
