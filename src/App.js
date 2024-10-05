import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [name,setName] = useState([]);
  let [info,setInfo] = useState([]);
  let aboutStudentDetails=async()=>{
     let reqOptions={
     method :"GET",
     };
     let JSONData = await fetch("http://localhost:4567/studentNames",reqOptions);
     let JSONInfo = await fetch("http://localhost:4567/teachersNames");
    
     let JSOData =await JSONData.json();
     let JSOInfo = await JSONInfo.json();
     console.log(JSOInfo);
     console.log(JSOData);
     setName(JSOData);
     setInfo(JSOInfo);

  }
  return (
    <div className="App">
      <button onClick={()=>{
         aboutStudentDetails();
      }}>studentNames</button>
      {name.map((ele,i)=>{
        return <div>
           <h1>{ele}</h1>
           <img src={ele.image}></img>
           </div>
              
      })}
      {info.map((ele,i)=>{
        return<h1>{ele}</h1>
      })}
    </div>
  );
}

export default App;
