import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HelpCenter from './components/HelpCenter';
import ReceivingTip from './components/ReceivingTip';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HelpCenter />} />
        <Route path="/receiving-tip" element={<ReceivingTip />} />
      </Routes>
    </Router>
  );
}

export default App; 