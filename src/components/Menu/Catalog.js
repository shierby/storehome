import React, {Component, PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

class Catalog extends Component {
  render() {
    const style = {
      color: "rgb( 51, 51, 51 )",
      textDecoration: "none",
      borderBottom: "2px solid blue"
    };
    return (
      <div className="container-fluid catalog_page">
        <div className="container">
        <h1>Catalog Page</h1>
          <footer className="mdl-mini-footer">
            <div className="mdl-mini-footer__center-section catalog_section">
              <ul className="mdl-mini-footer__link-list catalog_list">
                <li><Link to="/catalog/all" activeStyle={style}  activeClassName="active">All</Link></li>
                <li><Link to="/catalog/tshirt" activeStyle={style}  activeClassName="active">T-shirts</Link></li>
                <li><Link to="/catalog/sweaters" activeStyle={style}  activeClassName="active">Sweaters</Link></li>
                <li><Link to="/catalog/shorts" activeStyle={style}  activeClassName="active">Shorts</Link></li>
                <li><Link to="/catalog/jackets" activeStyle={style}  activeClassName="active">Jackets</Link></li>
                <li><Link to="/catalog/accesories" activeStyle={style}  activeClassName="active">Accessories</Link></li>

              </ul>
            </div>
          </footer>
        </div>
        <div className="container">
          <main className="mdl-layout__content">

            <div className="mdl-grid product-max-width">
              <div className="mdl-cell product product-card-square-1 mdl-card">
                <div className="mdl-card__supporting-text">
                  <h1>Printed swimsuit</h1>
                  <p>$23</p>
                </div>
              </div>
              <div className="mdl-cell product product-card-square-2 mdl-card">
                <div className="mdl-card__supporting-text">
                  <h1>Jogging bermuda shorts</h1>
                  <p><strike>$36</strike><span className="red">&nbsp;&nbsp;$12</span></p>
                </div>
              </div>
              <div className="mdl-cell product product-card-square-3 mdl-card">
                <div className="mdl-card__supporting-text">
                  <h1>Basic beach flip flops</h1>
                  <p>$9</p>
                </div>
              </div>
              <div className="mdl-cell product product-card-square-4 mdl-card">
                <div className="mdl-card__supporting-text">
                  <h1>Black sunglasses</h1>
                  <p>$29</p>
                </div>
              </div>

              <div className="mdl-cell product product-card-square-5 mdl-card">
                <div className="mdl-card__supporting-text">
                  <h1>Long sleeved twill shirt</h1>
                  <p>$20</p>
                </div>
              </div>
              <div className="mdl-cell product product-card-square-6 mdl-card">
                <div className="mdl-card__supporting-text">
                  <h1>Basic wimsuit</h1>
                  <p>$36</p>
                </div>
              </div>
              <div className="mdl-cell product product-card-square-7 mdl-card">
                <div className="mdl-card__supporting-text">
                  <h1>Bleached shorts</h1>
                  <p>$12</p>
                </div>
              </div>
              <div className="mdl-cell product product-card-square-8 mdl-card">
                <div className="mdl-card__supporting-text">
                  <h1>T-shirt with lower panel</h1>
                  <p><strike>$32</strike><span className="red">&nbsp;&nbsp;$12</span></p>
                </div>
              </div>
            </div>
            <p className="loadmore">load more...</p>
          </main>

        </div>


      </div>
    )
  }
}

export default Catalog;