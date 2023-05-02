import Colaborador from '../Colaborador'
import hexToRgba from 'hex-to-rgba';
import './Time.css'

const Time = (props) => {
    const css = { backgroundColor: hexToRgba(props.cor, 0.6)}
    return (
        (props.colaboradores.length) > 0 && <section className='time' style={css}>
            <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>
            <div className='colaboradores'>
                <input value={props.cor} onChange = {evento => props.mudarCor(evento.target.value, props.id)} type='color' className='input-color'></input>
                {props.colaboradores.map(colaborador => { 
                    
                    return (<Colaborador
                     key={colaborador.nome}
                      id ={colaborador.id} 
                      nome={colaborador.nome} 
                      favorito = {colaborador.favorito}
                      cargo={colaborador.cargo} 
                      imagem={colaborador.imagem} 
                      background={props.cor}  
                      aoDeletar = {props.aoDeletar}
                      aoFavoritar = {props.aoFavoritar} />) 
                      })}
            </div>



        </section>
    )
}


export default Time