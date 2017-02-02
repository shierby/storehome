import React from 'react';
import { Link, IndexLink } from 'react-router';


const Footer = () => {
  const style = {
    color: "rgb( 51, 51, 51 )",
    textDecoration: "none",
    borderBottom: "2px solid blue"
  };
  return (

      <div className="container">
        <footer className="mdl-mini-footer">
          <div className="mdl-mini-footer__left-section">
            <div className="mdl-logo footer_logo">C&B</div>
          </div>
          <div className="mdl-mini-footer__center-section">

            <ul className="mdl-mini-footer__link-list footer_list">
              <li><IndexLink to="/" activeStyle={style} activeClassName="active">Home</IndexLink></li>
              <li><Link to="/catalog" activeStyle={style} activeClassName="active">Catalog</Link></li>
              <li><Link to="/news" activeStyle={style} activeClassName="active">News</Link></li>
              <li><Link to="/sale" activeStyle={style} activeClassName="active">Sale</Link></li>
              <li><Link to="/about" activeStyle={style} activeClassName="active">About</Link></li>
              <li><Link to="/contact" activeStyle={style} activeClassName="active">Contact</Link></li>
            </ul>
          </div>
          <div className="mdl-mini-footer__right-section">
            <ul className="mdl-mini-footer__link-list">
              <li>©2010 - 2016 All rights reserved copy</li>
            </ul>
          </div>
          {/*<div className="mdl-mini-footer__right-section">
            <div className="all_rights">
              <p className="reserved">©2010 - 2016 All rights reserved copy</p>
            </div>
          </div>*/}
        </footer>

      </div>
  );
};

export default Footer;