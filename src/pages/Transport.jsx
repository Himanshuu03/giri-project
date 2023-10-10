import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../pages/transport.css'

function Transport() {
  return (
    <div>
        <Header/>
        <header>
        <h1>Our transports</h1>
    </header>
    <section id="transport1" class="transport" style={{
        color:"black"
    }}>
        <h2>transport 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget dolor vel velit iaculis tincidunt.</p>
    </section>
    <section id="transport2" class="transport" style={{
        color:"black"
    }}>
        <h2>transport 2</h2>
        <p>Integer a libero sed lorem convallis suscipit. Sed eu neque neque. Duis non sem non tortor congue euismod.</p>
    </section>
    <section id="transport3" class="transport" style={{
        color:"black"
    }}>
        <h2>transport 3</h2>
        <p>Fusce viverra ante eget tortor vestibulum ultricies. Vivamus ac urna vel ligula pharetra rhoncus.</p>
    </section>
    <section id="transport1" class="transport" style={{
        color:"black"
    }}>
        <h2>transport 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget dolor vel velit iaculis tincidunt.</p>
    </section>
    <section id="transport2" class="transport" style={{
        color:"black"
    }}>
        <h2>transport 2</h2>
        <p>Integer a libero sed lorem convallis suscipit. Sed eu neque neque. Duis non sem non tortor congue euismod.</p>
    </section>
    <section id="transport3" class="transport" style={{
        color:"black"
    }}>
        <h2>transport 3</h2>
        <p>Fusce viverra ante eget tortor vestibulum ultricies. Vivamus ac urna vel ligula pharetra rhoncus.</p>
    </section>
    <footer>
        <p>&copy; 2023 Your Company</p>
    </footer>
<Footer/>
    </div>
  )
}

export default Transport