import { useEffect, useState } from 'react';
import './App.css';
import preguntas from './preguntas';

function App() {

  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntoActual, setPuntoActual] = useState(0);
  const [isFinished, setIsFinished] = useState(false);


  const nextQuestion = (isCorrect, e) =>{
    //añadir puntuacion
    if(isCorrect) setPuntoActual(puntoActual + 1);
    //añadir estilos
   e.target.classList.add(isCorrect ? 'correct' : 'incorrect');
    //siguiente pregunta
    setTimeout(()=>{

      if (preguntaActual === preguntas.length - 1) {
        setIsFinished(true);
    }else{
      setPreguntaActual(preguntaActual + 1);
    }

    }, 500);
  }

if (isFinished) {
  return <>
  <main className="app">
    <div className="juego-terminado">
      <span>Obtuviste { puntoActual } puntos de {preguntas.length}</span>
      <button onClick={()=>{window.location.href='/'}}>Volver a jugar</button>
    </div>
  </main>
  </>
  
}
  /*  useEffect(() => {
     effect
     return () => {
       cleanup
     }
   }, [input]) */

  return (
    <main className="app">
      <div className="lado-izquierdo">

        <div className="numero-pregunta">
          <span>Pregunta {preguntaActual + 1} de </span> {preguntas.length}
        </div>
        <div className="titulo-pregunta">
          {preguntas[preguntaActual].titulo}
        </div>
      </div>
      <div className="lado-derecho">
        {
          preguntas[preguntaActual].opciones.map((respuesta, index) => {
            return <button
              key={respuesta.textoRespuesta}
              onClick={(e)=>{nextQuestion(respuesta.isCorrect, e)}}
            >{respuesta.textoRespuesta}
            </button>
          })
        }
      </div>

    </main>
  );
}

export default App;
