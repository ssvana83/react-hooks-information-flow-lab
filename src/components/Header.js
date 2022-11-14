import React from "react";

function Header( props ) {

  const { isDarkMode, onDarkModeClick} = props

  return(
    <header>
      <h2>Shopster</h2>
      <button onClick={onDarkModeClick}>
      {isDarkMode ? "Dark" : "Light"} Mode
      </button>
    </header>
  )
}

export default Header;