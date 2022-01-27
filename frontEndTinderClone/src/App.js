import './App.css';
import TinderCards from './TinderCards';
import SwipeButtons from "./SwipeButtons.js"
import Header from './Header.js';
function App() {
  return (
    //BEM class naming convension
    <div className="app">
      <Header />

<TinderCards />   
 <SwipeButtons />
   </div>
  );
}

export default App;
