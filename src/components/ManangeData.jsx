import { useState } from 'react';

const ManangeData = () => {
    let someData = 10;

    const [number, setNumber] = useState(0);

    return (
        <>
            <div>
                <h4>Valor {someData}</h4>
                <button onClick={() => someData = 15}>Mudar Valor</button>
            </div>
            <div>
                <h4>Valor {number}</h4>
                <button onClick={() => setNumber(15)}>Mudar Valor</button>
            </div>
        </>
    );
};

export default ManangeData;