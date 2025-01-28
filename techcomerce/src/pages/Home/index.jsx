import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import ProductPage from "../../components/ProductPage";  

const Home = () =>{

return(

  <div className="app-container">
    <Header />
    <ProductPage />
    <Footer />
  </div>
  );
}

export default Home;