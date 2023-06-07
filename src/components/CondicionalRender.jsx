import React, { useState } from 'react'

function CondicionalRender() {
    const [x] = useState(true);

    const [name, setName] = useState("João");

    return (
        <>
            <h1>Isso será exibido?</h1>
            {x && <p>Se x for True, sim!</p>}
            {!x && <p>Se x for False, sim!</p>}
            
            <h5>O seu nome é João?</h5>
            <button onClick={() => setName("João")}>Sim</button>
            <button className='m-md' onClick={() => setName("Jonas")}>Não</button>
            {name === "João" ? (
                <p>Bem-vindo, {name}!</p>
            ) : (
                <p>O seu nome não foi encontrado</p>
            )}
        </>
    )
};

export default CondicionalRender;