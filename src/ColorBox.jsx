import {useState} from 'react';
export default function ColorBox({colors}) {

  const RandColor = ()=> colors[Math.floor(Math.random() * colors.length)];
  const [color, setColor] = useState(RandColor());
  const [styles, setStyles] = useState({backgroundColor: color, width: '100px', height:'100px'});

  function ChangeColor(){
    setColor(RandColor());
    setStyles({backgroundColor: color, width: '100px', height:'100px'});
  }
    
  return (
    <div style={styles} onClick={ChangeColor}></div>
  )
}
