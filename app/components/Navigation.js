import React from 'react';
import { Link } from 'react-router';
import auth from '../auth';

// mettre les styles du wrapper ici pour éviter des pb de DOM REACT
export default class Navigation extends React.Component {
  render() {
    return (
    <div className="navigation">
      <header className="wrapper main_header clearfix">
          <div className="logo">
              <Link to="/"><h1>MehdiA</h1></Link>
          </div>
          <nav className="nav">
              <Link to="/">Home</Link>
              <Link to="/articles">Articles</Link>
              <Link to="/contact">Contact</Link>
              {
                auth.loggedIn() ?  (<Link to="/admin">Dashboard</Link>) :  (<Link to="/login">Login</Link>)
              }
          </nav>
      </header>
    </div>
    );
  }
}
