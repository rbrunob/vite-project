import React from 'react'

const CardDetails = ({ brand, km, color, news }) => {
    return (
        <>
            <h2>Detalhes do carro</h2>
            <ul>
                <li>Marca: {brand}</li>
                <li>KM: {km}</li>
                <li>Cor: {color}</li>
            </ul>
            {news && <p>Este carro é novo</p>}
        </>
    )
}

export default CardDetails