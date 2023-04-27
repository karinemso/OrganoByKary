import './Colaborador.css'

const Colaborador = ({nome, cargo, imagem, background, aoDeletar}) => {
    return (
        <div className='colaborador'>
            <div className='deletar' onClick={aoDeletar}>X</div>
            <div className='cabecalho' style={{backgroundColor: background}}>
                {/* <img src={'https://github.com/'+imagem+'.png'} alt=''></img> */}
                <img src={imagem}></img>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>

            </div>
        </div>
    )
}

export default Colaborador