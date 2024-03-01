import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
const App = () => {

  const [category, setCategory] = useState("");



  return (
    <>
      <div>
     
        <Navbar setCategory={setCategory} />
     
        <Body category={category} />
     
      </div>
    </>
  );
};

export default App;
