import React from 'react';
import { Link, IndexLink } from 'react-router';


const Top = () => {
  return (
    <div className="container-fluid top_page">
      <div className="container">
        <footer className="mdl-mini-footer top_footer">
          <div className="mdl-mini-footer__left-section">
            <ul className="mdl-mini-footer__link-list">
              <li><Link to="/delivery" activeClassName="active">Delivery</Link></li>
              <li><Link to="/faq" activeClassName="active">faq</Link></li>
              <li><Link to="/help" activeClassName="active">help</Link></li>
            </ul>
          </div>
          <div className="mdl-mini-footer__right-section">
            <ul className="mdl-mini-footer__link-list">
              <li className="dollar">
                <Link to="/faq" activeClassName="active">Dollars</Link>
                <i className="glyphicon glyphicon-chevron-down"></i>
              </li>
              <li className="language">
                <Link to="/help" activeClassName="active">En</Link>
                <i className="glyphicon glyphicon-chevron-down"></i>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Top;