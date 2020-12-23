import './CakeTypeRadioButton.scss'

function CakeTypeRadioButton({src, selected, onClick, text, value}) {

  const isSelected = () => value === selected

  return (
    <>
      <div
        className={`radio-button ${isSelected() && "selected"}`}
        onClick={() => onClick(value)}
      >
        <img className={`image ${isSelected() && "selected"}`} src={src} alt=''/>
        
        
      </div>
    </>
  );
}
// <div className="text">{text}</div>
export default CakeTypeRadioButton