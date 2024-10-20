import React from 'react';
import './App.css';
import Navbar from './compounts/Navbar';
import Text from './compounts/text';
import Mobile from './compounts/Mobile';
import Details from './compounts/Details';
import Footer from './compounts/Footer';
const App = () => {
  return (
    <div>
      <Navbar />
      <Text />
      <Mobile />
      <Details />
      <Footer />
    </div>
  );
}

export default App;
