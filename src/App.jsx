import { useState } from 'react';

// components
import TemplateExpression from './components/TemplatesExpression';
import Events from './components/Events';
import ManangeData from './components/ManangeData';
import ListRender from './components/ListRender';
import CondicionalRender from './components/CondicionalRender';
import ShowUsername from './components/ShowUsername';
import CardDetails from './components/CardDetails';
import Fragments from './components/Fragments';
import ChildrenProp from './components/ChildrenProp';
import FunctionProps from './components/FunctionProps';
import StateLift from './components/StateLift';

//styles
import './App.css';

//images
import assetsImage from './assets/blur-image.jpg';
import Message from './components/Message';

function App() {
  const name = "Bruno"

  const [username] = useState("Mario")

  const Cars = [
    {
      id: 0,
      brand: "VW",
      km: 100.000,
      color: "Azul",
      news: false
    },
    {
      id: 1,
      brand: "Ford",
      km: 200.000,
      color: "Vermelho",
      news: false
    },
    {
      id: 2,
      brand: "BMW",
      km: 0,
      color: "Preto",
      news: true
    }
  ]

  function showMessage() {
    console.log("evento de componente pai");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <>
      <h1>Avançando em React</h1>
      {/* image public */}
      <img
        src="/terra-image.jpg"
        alt="Terra"
        width={300}
      />
      {/* image assets */}
      <img
        src={assetsImage}
        alt="Terra"
        width={300}
      />
      <TemplateExpression />
      <Events />

      <ManangeData />
      <ListRender />
      <CondicionalRender />
      {/* props */}
      <ShowUsername
        name={[name, username]}
      />
      {/* destructuring */}
      <CardDetails
        brand="VW"
        km={100.000}
        color="Azul"
        news={false}
      />
      {/* reaproveitamento */}
      <CardDetails
        brand="Ford"
        km={5000}
        color="Vermelha"
        news={false}
      />
      <CardDetails
        brand="BMW"
        km={0}
        color="Branco"
        news={true}
      />
      {/* loop */}
      {Cars.map((car) => (
        <CardDetails
          key={car.id}
          brand={car.brand}
          km={car.km}
          color={car.color}
          news={car.news}
        />
      ))}
      {/* fragments */}
      <Fragments />
      {/* children */}
      <ChildrenProp>
        <p>Esse é o conteúdo</p>
      </ChildrenProp>
      {/* funções em props */}
      <FunctionProps
        myFunction={showMessage}
      />
      {/* state lift */}
      <StateLift
        msg={message}
      />
      <Message
        handleMessage={handleMessage}
      />
    </>
  )
}

export default App
