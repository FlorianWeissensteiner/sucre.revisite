import React from 'react'
import './ImageContainer.css'

function ImageContainer(props) {
  return (
    <>
      <img className="container"src={props.name} />
    </>
  )
}

export default ImageContainer
