import './Colaborador.css'

const Colaborador = ({nome, cargo, imagem, background}) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor: background}}>
                <img src={'https://github.com/'+imagem+'.png'} alt=''></img>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>

            </div>
        </div>
    )
}

export default Colaborador