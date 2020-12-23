import React from 'react'
import ImageContainer from './ImageContainer'
import './ImageGrid.css'

function ImageGrid(props) {
  return (
    <div className="image-grid">
      <ImageContainer name={props.folderPath + '/cake2.jpg'} />
      <ImageContainer name={props.folderPath + '/cake3.jpg'} />
      <ImageContainer name={props.folderPath + '/cake4.jpg'} />
      <ImageContainer name={props.folderPath + '/cake5.jpg'} />
      <ImageContainer name={props.folderPath + '/cake6.jpg'} />
      <ImageContainer name={props.folderPath + '/cake7.jpg'} />
      <ImageContainer name={props.folderPath + '/cake8.jpg'} />
      <ImageContainer name={props.folderPath + '/cake9.jpg'} />
    </div>
  )
}

export default ImageGrid
