import React, { useState } from "react";


function App() {
  setInterval(updateTime,1000);
  const now=new Date().toLocaleTimeString();
  const [time,setTime]=useState(now);
  
  function updateTime(){
    const newTime =new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return(
    <div><h1><center>{time}</center></h1>
    <footer><p>Made using ReactJS useState</p></footer></div>
  )
}

export default App;
