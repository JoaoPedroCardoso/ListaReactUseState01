import { useState } from "react";

export default function Contador(propos) {
    var valorMinimo = propos.valorMinimo;
    var valorMaximo = propos.valorMaximo;

    const [count, setCount] = useState(valorMinimo);

    
    function alterarCount(operacao) {
        switch (operacao) {
            case '+':
                var valorDesejado = count+1;
                if(valorDesejado <= valorMaximo) {
                    setCount(valorDesejado);
                }
                break;  
            case '-':
                var valorDesejado = count-1;
                if(valorDesejado >= valorMinimo) {
                    setCount(valorDesejado);
                }
                break;
        }
    }

    return(
        <div className="contador">
            <h2>Intervalo (Limite) do Contador: [{valorMinimo},{valorMaximo}]</h2>
            <h3>Valor atual do contador: {count}</h3>
            <button onClick={() => alterarCount('-')}>-</button>
            <button onClick={() => alterarCount('+')}>+</button>
            <hr/>
        </div>
    );
}


Contador.defaultProps = {
    valorMinimo: 3,
    valorMaximo: 7
}
