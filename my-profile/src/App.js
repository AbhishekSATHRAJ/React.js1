import logo from './logo.svg';
import './App.css';
// import Main from './accodin/accodin1'
// import Mount from './spinning/spinning'
// import Updating from './lifecycle/updating/updating'
// import FuncLifeCycle from './functioncomponent/index'
// import Calculator from './calculator/index'
// import Row from './table/table1'
import Parent from './propsdrilling/parent';
import FuncLifeCycle from './functioncomponent/index';
function App() {
  return (
    <>
    {/* <Main/> */}
    {/* <Row/> */}
    <Parent/>
    <FuncLifeCycle/>
    {/* <Calculator/> */}
    {/* <FuncLifeCycle/> */}
    {/* <Mount/> */}
    {/* <Updating/> */}
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
