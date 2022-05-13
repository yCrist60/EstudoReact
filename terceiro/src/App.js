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
/* 
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
*/
// -------------------------------------------

import { useState } from "react";
function App() {
  const [produto, setProduto] = useState ([
    {
      id:500,
      nome:"Mouse",
      categoria:"Informatica",
      quantidade:15,
      preco:50.00 
    },

    {
      id:501,
      nome:"Teclado",
      categoria:"Informatica",
      quantidade:20,
      preco:150.00 
    },
  ]);

  return (
    <div>
      
      <button onClick={() => {
        
       var cod = prompt("Entre com o código");
       var no = prompt("Entre com o nome do produto");
       var cat = prompt("Entre com a categoria");
       var qt = prompt("Entre com a quantidade");
       var  pr = prompt ("Entre com o preço");
        
        setProduto(produto.concat({
          id:cod,
          nome:no,
          categoria:cat,
          quantidade:qt,
          preco:pr 
      }))}}

      ></button>
      
      
      {produto.map((item,index) => (

        <div key={index}> 
        <h2>{item.nome}</h2>
        <ul>
          <li>Código: {item.id}</li>
          <li>Categoria: {item.categoria}</li>
          <li>Quantidade: {item.quantidade}</li>
          <li>Preço: {item.preco}</li>
        </ul>
      </div>
      ))}

    </div>
  );
} 

export default App;

