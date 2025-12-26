import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload12.
        </p>
        <div style={{ margin: '20px 0', padding: '15px', backgroundColor: '#282c34', borderRadius: '8px' }}>
          <h3 style={{ color: '#61dafb', margin: '0 0 10px 0' }}>🚀 预览部署测试</h3>
          <p style={{ margin: 0, fontSize: '14px' }}>
            这是一个测试更改，用于验证 GitHub Pages 预览部署功能是否正常工作。
          </p>
        </div>
        <a
          className='App-link'
          href='https://react.dev'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
