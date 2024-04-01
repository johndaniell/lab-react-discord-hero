
import './App.css'
import logoDiscord from './assets/discord-logo-white.png';
import logoMenu from './assets/menu-icon.png';
import discordBackground from './assets/discord-background.png';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logoDiscord} className="logo" alt="logo" />
        <img src={logoMenu} className="logo" alt="logo" />

      </header>
    <div className='App-content'>
      <h1>
          IMAGINE A PLACE...
        </h1>
        <p>
          ...where you can belong to a school club, a gaming group, or a 
          worldwide art community. Where just you and a handful of friends can 
          spend time together. A place that makes it easy to talk every day and 
          hang out more often.
        </p>
        <div className='App-footer'>
        <div className="App-buttons">
          <button className="App-button-download">Download for Mac</button>
          <button className="App-button-open">Open Discord in your browser</button>
        </div>
        <img src={discordBackground} className="Discord-background" alt="Discord-background" />
        </div>
        </div>
    </div>
  );
}

export default App
