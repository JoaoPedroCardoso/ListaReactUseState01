import { Link } from 'react-router-dom';

export default function Home() {
    return(
    <div>
      <h1>Lista exercicio React (useState) - João Pedro Cardoso</h1>
      <nav>
        <ul>
          <li>
            <Link to="/contadorLista">Exercicio 01 - Contador</Link>
          </li>
          <li>
            <Link to="/showname">Exercicio 02 - Mostra nome</Link>
          </li>
          <li>
            <Link to="/label">Exercicio 03 - Mostra label</Link>
          </li>
          <li>
            <Link to="/concatenanome">Exercicio 04 - Concatena Nome</Link>
          </li>
          <li>
            <Link to="/adicionaparagrafo">Exercicio 05 - Adiciona Paragrafo</Link>
          </li>
        </ul>
      </nav>
    </div>
    );
}