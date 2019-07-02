import React from "react";
import './style/header.scss'

class Header extends React.Component {
    
    render() {
        return (
            <div className="header">
                <h2 className="header__title">gracious - developers case</h2>
                <nav>
                    <label>
                        Search by:
                        <ul>
                           <li><a href="dimension.js">dimension</a></li> 
                           <li><a href="location.js">location</a></li>
                           <li><a href="episode.js">episode</a></li>
                        </ul>
                    </label>
                </nav>
            </div>
        )
    }
}

export default Header
