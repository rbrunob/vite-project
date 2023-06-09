import React from 'react'

const ChildrenProp = ({ children }) => {
  return (
    <>
        <h2>Este é o título do container</h2>
        {children}
    </>
  )
}

export default ChildrenProp;