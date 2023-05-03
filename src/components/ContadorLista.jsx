import Contador from './Contador';
import { Link } from 'react-router-dom';

export default function ContadorLista() {
    return (
        <div>
              <Contador/>
              <Contador  valorMinimo={10} valorMaximo={20}/>
              <Contador  valorMinimo={5} valorMaximo={10}/>
              <br/>
              <Link to="/">retornar a lista de exercicios</Link>
        </div>
    );
}