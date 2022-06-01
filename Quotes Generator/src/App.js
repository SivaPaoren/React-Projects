import './App.css';
import React,{useState,useEffect} from 'react';
import Header from './component/Header';


const  App = () => {

   const [quotes,setQuotes] = useState('')
   

   const getQuote = () => {
     fetch("https://type.fit/api/quotes")
     .then(res => res.json())
     .then(data =>{
       let randomNumber = Math.floor(Math.random()*data.length);
       setQuotes(data[randomNumber]);
     })
   }

   useEffect( () => {
     getQuote();
   },[]);



  return (
    <div className="App">
         <div className="quote">
            <p>{quotes.text}</p>
            <p id="author">{quotes.author}</p>
            <div className="btnContainer">
                <button className="btn" onClick={getQuote}>Get quote</button>
                <a href={`https://twitter.com/intent/tweet?text=${quotes.text}`} 
                 target="_blank"
                rel='noopener noreferrer' className="btn">tweet</a>
            </div>
         </div>
    </div>
  );
}

export default App;
