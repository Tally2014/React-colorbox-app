import {useState} from 'react';
import "./ColorBox.css";

function randomChoice(arr){
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

export default function ColorBox({colors}) {

  const [color, setColor] = useState(randomChoice(colors));
  const ChangeColor = () =>{ 
    const randomColor = randomChoice(colors);
    setColor(randomColor);
  }

  return(
    <div className='ColorBox'
        onClick={ChangeColor}
        style={{background: color}}>

    </div>
  )
  /*
  const RandColor = ()=> colors[Math.floor(Math.random() * colors.length)];
    
  return (
      colors.map((b, index) =>{
      const [color, setColor] = useState(RandColor());
      const [styles, setStyles] = useState({backgroundColor: color, width: '100px', height:'100px'});
      
      function ChangeColor(){
        const newColor = RandColor();
        setColor(newColor);
        setStyles({backgroundColor: newColor, width: '100px', height:'100px'});
      }

      return (
        <div key={index} style={styles} onClick={ChangeColor}></div>
      )
    })
  )*/
}