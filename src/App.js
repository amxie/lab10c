import React from 'react';

function App() {
  
  const [msg, setMsg] = React.useState("");
  const display = (e) => {
    e.preventDefault();
    setMsg(<div>
        <p>How I Installed: I first downloaded node.js to install npm manager to then run 'npx create-react-app my-app' to create all nessicary files for my React framwork.</p> 
        <p>How I built the Page: After running the command it automatically creates a page that is runnable. </p>
        <p>While using React, it is only possible to load information onto the page through one parent element. To fix this, all elements are wrapped into one parent div. Another problem that I encountered is that functions are mainly uses pointers for constants as functions, and the page would refresh on default removing any changed when an action occurs.</p>
      </div>);
  }

  return (
    <div className="App">
      <h1>Lab10c: Working with React</h1>
      <h2>Programmer: Amy Xie</h2>
      <form>
        <button type="submit" onClick={display}>View My Discussion</button>
        {msg && <div className="text"> {msg} </div>}
      </form>
    </div>
  );
}

export default App;
