import React, {useState} from "react";
import TopNav from "./components/Navbar/navbar"
import ApplicationViews from "./components/ApplicationViews";
import "./App.css";

function App() {
  const [hasUser, setHasUser] = useState(false)

  return (
    <>
      <TopNav hasUser={hasUser}/>
      <ApplicationViews setHasUser={setHasUser} hasUser={hasUser} />
    </>
  );
}

export default App;
