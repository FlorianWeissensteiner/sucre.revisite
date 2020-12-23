import { useState } from "react"
import CakeTypeRadioButton from './CakeTypeRadioButton'
import ImageGrid from './ImageGrid'


function Gallery() {

  const [selected, setSelected] = useState("")

  return (
      <div className='content'>
        <div className='cake-selection'>
          <CakeTypeRadioButton
            src='images/birthday/cake1.jpg'
            text="Birthday"
            value="birthday"
            selected={selected}
            onClick={setSelected}
          />
          <CakeTypeRadioButton
            src='images/wedding/cake1.jpg'
            text="Wedding"
            value="wedding"
            selected={selected}
            onClick={setSelected}
          />
          <CakeTypeRadioButton
            src='images/teens/cake1.jpg'
            text="Teens"
            value="teens"
            selected={selected}
            onClick={setSelected}
          />
        </div>
        <div className="imagegrid-container">
          {selected === 'birthday' && <ImageGrid folderPath='images/birthday/' />}
          {selected === 'wedding' && <ImageGrid folderPath='images/wedding/' />}
          {selected === 'teens' && <ImageGrid folderPath='images/teens/' />}
        </div>
      </div>
  );
}

export default Gallery