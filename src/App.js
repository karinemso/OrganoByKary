import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { Banner } from "./components/Banner/Banner";
import Formulario from "./components/Formulario";
import Time from "./components/Time";
import Footer from "./components/Footer";

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "---",
    
    },
    {
      id: uuidv4(),
      nome: "Programação",
      cor: "#57C278",
    },
    {
      id: uuidv4(),
      nome: "Front-End",
      cor: "#82CFFA",
    },
    {
      id: uuidv4(),
      nome: "Data Science",
      cor: "#A6D157",
    },
    {
      id: uuidv4(),
      nome: "Devops",
      cor: "#E06B69",
    },
    {
      id: uuidv4(),
      nome: "UX e Design",
      cor: "#DB6EBF",
    },
    {
      id: uuidv4(),
      nome: "Mobile",
      cor: "#FFBA05",
    },
    {
      id: uuidv4(),
      nome: "Inovação e Gestão",
      cor: "#FF8A29",
    },
  ]);
  const inicial = [];
  const [colaboradores, setColaboradores] = useState(inicial);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
    console.log(colaboradores);
  };

  function mudarCorDoTime(cor, id) {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
  }

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
    
  }

  function cadastrarTime(novoTime){
    
    setTimes([...times, {id: uuidv4(), favorito:false,...novoTime}])
    console.log(times)

  }

  function resolverFavorito(id) {
      setColaboradores(colaboradores.map(colaborador => {
        if(colaborador.id === id) colaborador.favorito = !colaborador.favorito;
        return colaborador
      })
      )
  }
  return (
    <div className="App">
      <Banner />
      <Formulario
      cadastrarTime = {cadastrarTime}
        times={times.map((time) => time.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }></Formulario>

      {times.map((time) => {
        return time.nome !== "---" ? (
          <Time
            key={time.nome}
            nome={time.nome}
            id = {time.id}
            cor={time.cor}
            aoFavoritar = {resolverFavorito}
            colaboradores={colaboradores.filter(
              (colaborador) => colaborador.time === time.nome
            )}
            aoDeletar={deletarColaborador}
            mudarCor={mudarCorDoTime}></Time>
        ) : null;
      })}

      <Footer></Footer>
    </div>
  );
}

export default App;
