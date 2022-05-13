/*import logo from './logo.svg';
import './App.css';

function App() {

  let valor1 = Math.round(Math.random() *200);
  let valor2 = Math.round(Math.random() *200);
  

  return (
   <div>
     <p>A soma ntra 50 e 10 é {50+10}</p>
     <p>
        {" "}
       A soma entre {valor1} e {valor2} é {valor1 + valor2}
       </p>
       <p>O resultado acima é{(valor1 + valor2) % 2 === 0 ? " par" : " impar" }{""}</p>
   </div>
  );
}


export default App;
*/
// ------------------------------------------------------
/*function App() {
  let styles = {
    backgroundColor:"#f00",
    color: "#fff",
    display: "flex",
    flex: 1,
    height: "100vh",
  };
}

return (
  <div style={styles}>
    <p>Veja o Background</p>
  </div>
)*/
// ----------------------------------------------

import { useState } from "react";
function App() {
  const [n, setN] = useState (1);

  return (
    <div>
      <p>{n}</p>
      <button onClick={()=>setN(n + 1)}>Clique</button>
    </div>
  );
}

export default App;
