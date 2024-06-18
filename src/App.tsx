import React from 'react';
import './App.css';
import { Url } from 'url';

function App() {
  const onButtonClick = () => {
    const pdfUrl = "RachelCoxhead_Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "RachelCoxhead_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

  const onLinkButtonClick = (url: string) => {
      window.open(url, '_blank');
  };

  return (
    <div className="App">
        <p>Rachel Coxhead</p>
        <button onClick={onButtonClick}>Download My Resume!</button>
        <button onClick={() => onLinkButtonClick("https://www.linkedin.com/in/rachel-coxhead/")}>LinkedIn</button>
        <button onClick={() => onLinkButtonClick("https://github.com/Ithrendrial")}>Github</button>
    </div>
  );
}

export default App;
