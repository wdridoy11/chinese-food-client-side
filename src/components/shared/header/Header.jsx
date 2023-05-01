import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <div className='container mx-auto'>
            <div>
                <div></div>
                <div>
                    <nav>
                        <Link to={`/`}>Home</Link>
                        <Link to={``}></Link>
                        <Link to={`/login`}>create accunt</Link>
                    </nav>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header