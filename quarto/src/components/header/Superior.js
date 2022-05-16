import Cabecalho from "./Cabecalho";
import Logo from "./Logo";

export default function Superior() {

    const dados = {
        img:"./img/l1.png",
        usuario: "Cristiano"
    }

    return(
        <div className="header">
            <Logo img = {dados.img}/>
            <Cabecalho user = {dados.usuario}/>
        </div>
    )
}