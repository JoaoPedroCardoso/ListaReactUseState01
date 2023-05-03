import { Link } from 'react-router-dom';
import { useState } from "react";

export default function AdicionaParagrafo() {
    const [novoParagrafo, setNovoParagrafo] = useState("");
    const [paragrafos, setParagrafos] = useState([]);
    
    function criaParagrafo(value) {
        setNovoParagrafo(value + " (Usuário)");
    }

    function adicionaParagrafo() {
        paragrafos.push(novoParagrafo);
        setParagrafos(paragrafos);
        setNovoParagrafo("");
        document.getElementById("textInput").value='';
    }

    return(
        <div>
            <p>Parágrafo 01 (Interface)</p>
            <p>Parágrafo 02 (Interface)</p>
            {paragrafos.map(paragrafo => <p>{paragrafo}</p>)}
            <input id="textInput" type="text" onChange={e => criaParagrafo(e.target.value)}/>
            <button onClick={() => adicionaParagrafo()}>Adicionar Parágrafo</button>
            <hr/>
            <Link to="/">retornar a lista de exercicios</Link>
        </div>
    );
}