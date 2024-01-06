import {useState} from 'react';
export default function ColorBox({colors}) {

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
  )
}