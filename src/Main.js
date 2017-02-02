//This component handle the App template used on every page
import React, {PropTypes} from 'react';
import Header from './Header';
import Footer from './Footer'
import Subscribe from './Subscribe'
import Top from './Top'

class Main extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Top/>
        <Header />
        {this.props.children}
        <Subscribe/>
        <Footer/>
      </div>
    );
  }
}

Main.propTypes = {
  children: PropTypes.object.isRequired
};

export default Main;