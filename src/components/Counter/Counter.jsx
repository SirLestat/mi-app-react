import { useState } from "react";

const Counter = () => {

    const [contador, setContador] = useState(0);

    const sumar = () => {
        setContador(contador + 1);
      }

    const restar = () => {
        setContador(contador - 1);
      }


    return (
        <div>
            <h1>{contador}</h1>
            <button onClick={sumar}>Sumar</button>
            <button onClick={restar}>Restar</button>
            <hr />
        </div>
    )
}

export default Counter;