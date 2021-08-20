import React from 'react'

export default function Details(props) {

  const {details} = props

  return (
    <div>
      <h1>{details.title}</h1>
      <h2>{details.date}</h2>
      <p>{details.explanation}</p>
    </div>
  )
}
