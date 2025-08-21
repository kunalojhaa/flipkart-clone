import './App.css'
import Product1 from './Product1.jsx'
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
        <Product1 />
      </div>
      <Footer/>

    </div>
  )
}
export default App