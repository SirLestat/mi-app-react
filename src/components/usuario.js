

/*export const Usuario = (props) => {  <----- Una de las formas de escribir propiedades con desestructuración

    const {nombre, edad, nacionalidad} = props;
*/

    export const Usuario = ({nombre, edad, nacionalidad}) => { /*Forma común de desestructuración de propiedades*/
  
    return <div>
      <h1>Nombre: {nombre}</h1>
      <p>edad: {edad}</p>
      <p>Nacionalidad: {nacionalidad}</p>
      <hr></hr>
    </div>
  
}
  