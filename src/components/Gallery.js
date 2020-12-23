import { useState } from "react"
import CakeTypeRadioButton from './CakeTypeRadioButton'
import ImageGrid from './ImageGrid'


function Gallery() {

  const [selected, setSelected] = useState("")

  return (
      <div className='content'>
        <div className='cake-selection'>
          <CakeTypeRadioButton
            src='sucre.revisite/images/birthday/cake1.jpg'
            text="Birthday"
            value="birthday"
            selected={selected}
            onClick={setSelected}
          />
          <CakeTypeRadioButton
            src='sucre.revisite/images/wedding/cake1.jpg'
            text="Wedding"
            value="wedding"
            selected={selected}
            onClick={setSelected}
          />
          <CakeTypeRadioButton
            src='sucre.revisite/images/teens/cake1.jpg'
            text="Teens"
            value="teens"
            selected={selected}
            onClick={setSelected}
          />
        </div>
        <div className="imagegrid-container">
          {selected === 'birthday' && <ImageGrid folderPath='sucre.revisite/images/birthday/' />}
          {selected === 'wedding' && <ImageGrid folderPath='sucre.revisite/images/wedding/' />}
          {selected === 'teens' && <ImageGrid folderPath='sucre.revisite/images/teens/' />}
        </div>
      </div>
  );
}

export default Gallery