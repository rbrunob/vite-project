import React from 'react'

const ShowUsername = (props) => {
    return (
        <>
            <h2>O nome do usuário é { props.name[0] }</h2>
            <h2>O nome do usuário é { props.name[1] }</h2>
        </>
    )
}

export default ShowUsername