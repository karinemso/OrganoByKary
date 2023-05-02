

import ('./Campo.css')

const Campo = (props) =>{
   

    // let valor = 'Karine'


    const aoDigitado = (evento) => {
       props.aoAlterado(evento.target.value)
    }
    return(
        <div className="campo">
            <label>{props.label}</label>
            <input type={props.type} value={props.valor} onChange = {aoDigitado} required = {props.obrigatorio}placeholder={props.placeholder}></input>
        </div>
    )
}


export default Campo