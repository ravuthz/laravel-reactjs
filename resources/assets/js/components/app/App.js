import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-sm bg-dark">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin">Admin</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin/posts">AdminPosts</Link>
                        </li>
                    </ul>
                </nav>
                <div className="main-content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default App;
