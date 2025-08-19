import './App.css'
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import Component2 from './Component2.jsx'
import BestElectronic from './BestElectronic.jsx'


function App() {
  return (
    <div>
      <Header />
      <div className="main">
        <Component2 />
        <BestElectronic />
      </div>
      {/* <Footer/> */}

    </div>
  )
}
export default App