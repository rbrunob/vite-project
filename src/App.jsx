import { useState } from 'react';

// components
import TemplateExpression from './components/TemplatesExpression';
import Events from './components/Events';
import ManangeData from './components/ManangeData';
import ListRender from './components/ListRender';
import CondicionalRender from './components/CondicionalRender';
import ShowUsername from './components/ShowUsername';

//styles
import './App.css';

//images
import assetsImage from './assets/blur-image.jpg';

function App() {
  const name = "Bruno"

  const [username] = useState("Mario")

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
      <ShowUsername
        name={[name, username]}
      />
    </>
  )
}

export default App
