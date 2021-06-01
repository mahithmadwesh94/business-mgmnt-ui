
import './App.css';
import ContactUs from './components/contact-us/contact.component';
import Features from './components/features/features.component';
import Header from './components/header/header.component';
import Hero from './components/hero/hero.component';
import Services from './components/services-offered/services.component';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from './components/products/product.component';

function App() {
  return (

    <Router basename='/site'>
      <Header />
      <Hero />
      <Features />
      <Services />
      <Products />
      <ContactUs />

      <Switch>
        <Route path='/' />
      </Switch>
    </Router>

  );
}

export default App;
