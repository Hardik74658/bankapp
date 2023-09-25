import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Routes, Route } from 'react-router-dom';
import { Transaction } from './components/Transaction';
import { Withdraw } from './components/Withdraw';
import { Deposit } from './components/Deposit';
import { ShowTransaction } from './components/ShowTransaction';
import { Bank } from './components/Bank';
import { PageNotFound } from './components/PageNotFound';


function App() {

  return (
    <div className="App" >
      <Header />
      <Transaction />
      <Footer />
    </div>
  );
}

export default App;
