import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div>
        <div className="nav">
            <header>
                <div className="text">
                    <h1>Jive</h1>
                </div>
                <div className="btn">
                  <button>Login</button>
                  <button>Sign up</button>
                </div>
            </header>
        </div>
    </div>
  )
}

export default Navbar