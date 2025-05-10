import React,{Component} from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router';
import Header from './components/Header';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import './App.css';
import About from './components/About';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends Component{
  render(){
    return(
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<About/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/resume' element={<Resume/>}/>
        </Routes>
      </Router>
      // <div className='App'>
      //   <About/>
      // </div>
    );
  }
}

export default App;
