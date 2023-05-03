import { useState } from "react";
import { Link } from 'react-router-dom';

export default function ShowLabel(props) {
    var maximo = props.maximo;

    const [caracter, setCaracter] = useState(maximo);

    function contaCaracter(e) {
        if(e.length <= maximo) {
            setCaracter(maximo - e.length)
        }
    }

    return(
        <div>
            <form>
                <label htmlFor="">Mensagem: </label>
                <br/>
                <textarea maxLength={maximo} cols="100" rows="10" onChange={e => contaCaracter(e.target.value)}></textarea>
            </form>
            <p>Restante: {caracter} caracteres</p>
            <hr/>
            <Link to="/">retornar a lista de exercicios</Link>
        </div>
        
    );

}

ShowLabel.defaultProps = {
    maximo: 120
}