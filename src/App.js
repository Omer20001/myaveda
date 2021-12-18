import React, { Component } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Footer from './components/Footer'
import Faq from './components/Faq'
import Register from './components/Register'
import Login from './components/Login'
import Bag from './components/Bag'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>

          <Navbar />

          <Route  exact path="/" component={Home}/>
          <Route path='/about' component={About} />
       

          <Route path='/contact' component={Contact} />
          <Route path='/faq' component={Faq} />
          <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <Route path='/bag' component={Bag} />
          <Footer/>

        </div>


      </BrowserRouter>
    )
  }
}

export default App
