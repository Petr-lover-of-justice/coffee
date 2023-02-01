import React from 'react';
import { BookMark } from './components/BookMark';
import { Cards } from './components/Cards';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { TypeCoffee } from './components/TypeCoffee';
import "./scss/App.scss"
function App() {
  return (
    <div>
      <Header />
      <Cards />
      <TypeCoffee />
      <BookMark />
      <Footer />
    </div>
  );
}

export default App;
