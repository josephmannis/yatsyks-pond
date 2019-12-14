import React from 'react';
import './root.css';
import PondPage from './components/pages/PondPage';
import messages from './assets/messages.json';

const INIT = 'I am the toad of encouragement.\nMy love for you is boundless.\nPoke me for some encouragement.';
const MESSAGES = messages;

const App: React.FC = () => {
  return (
    <PondPage initialMessage={INIT} responses={MESSAGES}/>
  );
}

export default App;
