import React from 'react'

export default function PhotoOfTheDay(props) {

  const {photoURL} = props

  return (
    <div>
      <img src={photoURL}></img>
    </div>
  )
}

