import React from 'react'

import './PhotoOfTheDay.css'

export default function PhotoOfTheDay(props) {

  const {photoURL} = props

  if (!photoURL) return <h3>Loading...</h3>

  return (
    <div id="PhotoOfTheDay">
      <img src={photoURL}></img>
    </div>
  )
}

