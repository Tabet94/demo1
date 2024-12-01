import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner from '../../Assets/banner2.jpg'
import './Home.css';


const Home = () => {

  return (
    <div>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img src ={banner} alt='banner' text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img src ={banner} alt='banner' text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src ={banner} alt='banner' text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
     
     
     
     
     {/* Pharmacy Welcome Text */}
     <div className="pharmacy-welcome">
        <h2>Bienvenue dans notre pharmacie !</h2>
        <p>
          Nous sommes dévoués à fournir des produits pharmaceutiques de haute qualité et un excellent service client à notre communauté. Avec une équipe de pharmaciens et de personnel expérimentés, nous visons à garantir le bien-être de nos clients en offrant une large gamme de médicaments, de conseils santé et de produits de bien-être.
        </p>
        <p>
          Notre mission est de promouvoir la santé et le bien-être en offrant des soins attentionnés et personnalisés à chaque client. N'hésitez pas à nous rendre visite pour tous vos besoins en matière de santé, notre équipe sera ravie de vous aider.
        </p>
      </div>
   
   
   
   
   
   
   

   
  </div>
    
);
};


export default Home;
