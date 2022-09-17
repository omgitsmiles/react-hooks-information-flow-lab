import React, { useState } from "react";
import Header from "./Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }
  return (
    <div>
    <Header onDarkModeClick={onDarkModeClick} isDarkMode={isDarkMode}/>
    </div>
  );
}

export default App;
