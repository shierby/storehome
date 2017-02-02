import React from 'react';
import { Link, IndexLink } from 'react-router';


const Header = () => {

  const style = {
    color: "rgb( 51, 51, 51 )",
    textDecoration: "none",
    borderBottom: "2px solid blue"
  };

  return (
    <div className="container-fluid header_page">
      <div className="container">
        <footer className="mdl-mini-footer for_header">
          <div className="mdl-mini-footer__left-section">
            <div className="mdl-logo header_logo ">C&B</div>
          </div>
          <div className="mdl-mini-footer__center-section">

            <ul className="mdl-mini-footer__link-list header_list">
              <li><IndexLink to="/" activeStyle={style} activeClassName="active">Home</IndexLink></li>
              <li><Link to="/catalog" activeStyle={style} activeClassName="active">Catalog</Link></li>
              <li><Link to="/news" activeStyle={style} activeClassName="active">News</Link></li>
              <li className="red"><Link to="/sale" activeStyle={style} activeClassName="active">Sale</Link></li>
              <li><Link to="/about" activeStyle={style} activeClassName="active">About</Link></li>
              <li><Link to="/contact" activeStyle={style} activeClassName="active">Contact</Link></li>
            </ul>
          </div>
          <div className="mdl-mini-footer__right-section">
            <ul className="mdl-mini-footer__link-list header_list_right">
              <li><Link to="/yourbag" activeStyle={style} activeClassName="active">Your Bag</Link></li>
              <li className="bag">2</li>
              <li><i className="material-icons">search</i></li>
            </ul>
          </div>
        </footer>

      </div>
    </div>

  );
};

export default Header;