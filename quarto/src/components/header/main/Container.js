import {useState,useEffect} from "react";
import Conteudo from "./Conteudo";
import Mensagens from "./Mensagens";

export default function Container(){

    // Vamos inicar o projeto lendo a URL com os dados da API
    // Neste caso temos os produtos para ler e montar o produto
    // Vamos usar o comando useState para iniciar o estado de dados 
    // dos produtos. Depois usaremos o comando useEffect para carregar
    // os produtos que vem da API.
    // O comando useEffect é um comando de laço, portanto é necessário fazer
    // para o laço quando terminar de carregar dados. Isso é feito
    // usando o colchetes ao final da instrução.
    // Para obter os dados iremos usar o comando fetch dentro de useEffect. 

const [produtos, setProdutos] = useState([
    {
        id:"",
        nome:"",
        categoria:"",
        preco: "",
        msg: [],

    },
]);

useEffect(()=>{
    fetch("http://10.26.44.31:5500/")
    .then((response)=>response.json())
    .then((dados)=>{
        setProdutos(dados.output);
    })
},[])

    return(
        <div className="container">
        <Mensagens dados = {produtos}/>
        <Conteudo dados={produtos}/>
        </div>
    )
}