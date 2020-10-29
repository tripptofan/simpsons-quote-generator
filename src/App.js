import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import './App.css';

function App() {
  const [item, setItem] = useState();
const [imgClass, setImgClass] = useState();
const [arrowClass, setArrowClass] = useState();

  const newItem = () => {
    {Axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(res => {
      setItem(res.data[0]);
      moveImg(res.data[0].characterDirection);
console.log(res.data[0].characterDirection)
    })} 
  }
const moveImg = d => {

if(d === "Left"){
  setImgClass('imgLeft')
  setArrowClass('arrowLeft')
}else{
  setImgClass('imgRight')
  setArrowClass('arrowRight')
}
}



  useEffect(() => {
   if(!item){
     newItem();
  }
  });

  return (

    <div className="App">

<div className='quoteBox'>
  <p className='quote'>{item && item.quote}</p>
  <p className='characterName'>~{item && item.character}</p>
<div id="arrow-down" className={arrowClass}></div>
</div>
<div className='imgBox'><img id='img' className={imgClass} src={item && item.image}/></div>
<button onClick={() => newItem()}>Random Quote</button>
<div className='notes'><p>This app created using <a href='https://thesimpsonsquoteapi.glitch.me/'>The Simpsons Quote API</a></p></div>
    </div>
  );
}

export default App;
