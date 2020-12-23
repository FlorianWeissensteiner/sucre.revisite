import { Link } from 'react-router-dom'
import './NavigationBar.scss'

function NavigationBar() {

  return (
    <div className='navigation-bar'>
      <span className='left-side'>
        <Link to='/'>
          Le Sucre Revisité
        </Link>
      </span>
      <span className='right-side'>
        <Link to='/contact' className='contact-button'>
          Contact us
        </Link>
      </span>
    </div>
  )
}

export default NavigationBar