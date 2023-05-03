import { useState } from "react";
import { Link } from 'react-router-dom';

export default function ShowName() {
    const [nome, setNome] = useState("Seu Nome Aqui!");

    function atualizarNome(event) {
        setNome(event.target.value.toUpperCase())
    }

    return(
        <div>
            <form>
                <label htmlFor="">Nome: </label>
                <input type="text" onChange={atualizarNome}/>
            </form>
            <p>{nome}</p>
            <hr/>
            <Link to="/">retornar a lista de exercicios</Link>
        </div>
    );
}