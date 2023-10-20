import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import { LoginPage } from './components/common/LoginPage';
import { Footer } from './components/common/Footer';

function App() {
  return (
    <div className="App">
      <LoginPage />
      <Footer />
    </div>
  );
}

export default App;
