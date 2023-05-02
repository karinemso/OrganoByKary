import './Colaborador.css'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"

const Colaborador = ({ id,nome, cargo, imagem, background, aoDeletar, aoFavoritar, favorito}) => {
    return (
        <div className='colaborador'>
            <div className='deletar' onClick={()=>aoDeletar(id)}>X</div>
            <div className='cabecalho' style={{backgroundColor: background}}>
                <img src={'https://github.com/'+imagem+'.png'} alt=''></img>
                
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            
                {favorito? <AiFillHeart color = "#ff0000" className='heart' onClick={() => aoFavoritar(id)}/>:<AiOutlineHeart className = "heart" onClick={() => aoFavoritar(id)}/>}
           
            </div>
            
        </div>
    )
}

export default Colaborador