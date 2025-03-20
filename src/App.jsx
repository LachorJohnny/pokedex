import Header from './components/Header';
import PokeCard from './components/PokeCard';
import SideNav from './components/SideNav';

import { useState } from 'react';

function App() {
  return (
    <>
      <Header />
      <SideNav />
      <PokeCard />
    </>
  );
}

export default App;
