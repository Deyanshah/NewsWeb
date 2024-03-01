import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";
// import NewsItem from "./Components/NewsItem";
import Country from "./Components/Country";
const App = () => {
  const [category, setCategory] = useState("");
// 
  // const [country, setCountry] = useState("");

  return (
    <>
      <div>
        <Navbar setCategory={setCategory} />
        {/* <div className="  h-90 ">
          <Country setCountry={setCountry} />
        </div> */}
        <NewsBoard category={category}  />
      </div>
    </>
  );
};

export default App;
