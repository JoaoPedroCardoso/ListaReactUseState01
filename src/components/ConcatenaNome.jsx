import { Link } from 'react-router-dom';
import { useState } from "react";

export default function ConcatenaNome() {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [nomeCompleto, setNomeCompleto] = useState("");

    function atualizarNome(event) {
        setNome(event.target.value)
    }

    function atualizarSobrenome(event) {
        setSobrenome(event.target.value)
    }

    function atualizarNomeCompleto() {
        setNomeCompleto(nome + " " + sobrenome)
    }

    return(
        <div>
             <form>
                <label htmlFor="">Nome: </label>
                <input type="text" onChange={atualizarNome}/>
                <br/><br/>
                <label htmlFor="">Sobrenome: </label>
                <input type="text" onChange={atualizarSobrenome}/>
                <br/><br/>
            </form>
            <button onClick={() => atualizarNomeCompleto()}>Exibir nome completo</button>
            <br/>
            <p>{nomeCompleto}</p>
            <hr/>
            <Link to="/">retornar a lista de exercicios</Link>
        </div>
    );
}