import { useState } from "react";

const Text = () => {

    const [mostrar,setMostrar] = useState(true);

    function handleShow () {
        setMostrar(!mostrar);
        
    }

    return (
        



        <div>
            {mostrar === true && <h2>Hola Mundo!</h2>}
            <button onClick={handleShow}>Mostrar / Ocultar</button>

        </div>
    )
};

export default Text;