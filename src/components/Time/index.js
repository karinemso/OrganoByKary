import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    const css = { backgroundColor: props.corSecundaria }
    return (
        (props.colaboradores.length) > 0 && <section className='time' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                <input onChange = {evento => props.mudarCor(evento.target.value, props.nome)} type='color' className='input-color'></input>
                {props.colaboradores.map(colaborador => { 
                    
                    return (<Colaborador key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} background={props.corPrimaria} corCard ={props.corSecundaria} aoDeletar = {props.aoDeletar}/>) })}
            </div>



        </section>
    )
}


export default Time