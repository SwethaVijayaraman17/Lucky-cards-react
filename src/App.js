import { useState } from 'react';
import './App.css';
import LuckyCards from './LuckyCards';

function App() {
  const cards = {
    1: 'Have a good day !!!',
    2: 'Wishing you success and happiness in your future',
    3: 'May all your dreams come true !...',
    4: 'Wishing you a future filled with joy and happiness',
    5: 'You deserve it. Wishing you good luck !',
    6: 'Lots of luck coming your way today and always',
  }
  const [message, setmessage] = useState('')
  return (
    <div className="App">
     <LuckyCards setmessage={setmessage} message={message} cards={cards} />
    </div>
  );
}

export default App;
