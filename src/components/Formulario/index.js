import './Formulario.css'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'
import { v4 as uuidv4 } from "uuid";

const Formulario = (props) => {

 

    const [nome,setNome] = useState('')
    const [cargo,setCargo] = useState('')
    const [imagem,setImagem] = useState('')
    const [time,setTime] = useState('')
    const [nomeTime,setNomeTime] = useState('')
    const [corTime,setCorTime] = useState('')

    const aoSalvar = (e) => {
        e.preventDefault()
        props.aoColaboradorCadastrado({
            id: uuidv4(),
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setImagem('')
        setCargo('')
        setTime('')
    }
    const aoCadastrarTime = (e) => {
        e.preventDefault()
        console.log(nomeTime, corTime)
        let novoTime ={
            nome : nomeTime,
            cor: corTime,
          }
        props.cadastrarTime(novoTime)
        setNomeTime('')
        setCorTime('')
      
       
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Campo
                 type = "text"
                 obrigatorio = {true} 
                 label='Nome' 
                 placeholder='Digite seu nome'
                 valor = {nome}
                 aoAlterado = {valor => {setNome(valor)}}
                  />

                <Campo
                 type = "text" 
                obrigatorio = {true}
                label='Cargo' 
                placeholder='Digite seu cargo'
                valor = {cargo}
                aoAlterado = {valor => setCargo(valor)} />
                <Campo
                 type = "text" 
                label='Imagem' 
                placeholder='Digite o seu user do github'
                valor = {imagem}
                aoAlterado = {valor => setImagem(valor)} />
                <ListaSuspensa
                 obrigatorio = {true}
                 label='Time' 
                 itens ={props.times}
                 valor = {time}
                 aoAlterado = {valor => setTime(valor)}></ListaSuspensa>
                <Botao>Criar Card</Botao>
            </form>
            <form onSubmit={aoCadastrarTime}>
                <h2>Preencha os dados para criar um novo time</h2>
                <Campo
                 type = "text"
                 obrigatorio 
                 label='Nome' 
                 placeholder='Digite o nome do time'
                 valor = {nomeTime}
                 aoAlterado = {valor => {setNomeTime(valor)}}
                  />

                <Campo
                 type = "color" 
                obrigatorio 
                label='Cor' 
                placeholder='Digite a cor fo time'
                valor = {corTime}
                aoAlterado = {valor => setCorTime(valor)}
                 />
              
                <Botao>Criar um novo Time</Botao>
            </form>
        </section>


    )
}


export default Formulario