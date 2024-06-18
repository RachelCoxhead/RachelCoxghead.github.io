import React from 'react';
import './App.css';

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

  return (
    <div className="App">
        <p>Rachel Coxhead</p>
        <button onClick={onButtonClick}>
                    Download My Resume!
                </button>
    </div>
  );
}

export default App;
