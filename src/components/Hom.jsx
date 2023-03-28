import React from 'react'

export default function Hom({Name,changeName}) {
  return (
    <div>
        <h1>{Name}</h1>
        <button onClick={changeName}>Change Name</button>
    </div>
  )
}

