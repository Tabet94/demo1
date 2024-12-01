import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from 'mdb-react-ui-kit';
import './Contact.css';



const ContactInfo = () => {
  return (
    <MDBCol lg='12' className='contact-info' style={{ paddingTop: '5rem' }}>
      <h2>Contactez-nous</h2>
      <p>
        Bienvenue sur notre page de contact ! Chez Pharmacie Smati, votre santé est notre priorité.
        Si vous avez des questions, des préoccupations ou si vous souhaitez simplement en savoir plus
        sur nos services, n'hésitez pas à nous contacter. Nous sommes situés à Annaba, 23000,
        en Algérie, et sommes facilement accessibles au 0558 90 90 80 ou par e-mail à
        <a href='mailto:pharmacie@gmail.com'> pharmacie@gmail.com</a>. Venez nous rendre visite ou
        utilisez la carte ci-dessous pour localiser notre pharmacie. Nous sommes là pour vous aider
        et répondre à vos besoins de santé.
      </p>
    </MDBCol>
  );
};



 


const Contact = () => {
  return (
    
    <MDBContainer fluid className='mt-5'>
    
    
      <section className='text-center' style={{ paddingTop: '10rem' }}>
         <div
          className='p-5 bg-image'
          style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/textures/full/171.jpg')", height: '300px' }}
        ></div>
       

        <div
        
          className='card mx-4 mx-md-5 shadow-5-strong'
          style={{ marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)' }}
        >
          
          <div className='card-body py-5 px-md-5'>
            
            <MDBRow className='mb-5'>
              <MDBCol lg='3' md='6' className='mb-5 mb-lg-0 position-relative'>
                <MDBIcon icon='globe-americas' size='3x' className='text-primary mb-4' />
                <h6 className='fw-normal mb-0'>Algerie</h6>
                <div className='vr vr-blurry position-absolute my-0 h-100 d-none d-md-block top-0 end-0'></div>
              </MDBCol>

              <MDBCol lg='3' md='6' className='mb-5 mb-lg-0 position-relative'>
                <MDBIcon icon='map-marker-alt' size='3x' className='text-primary mb-4' />
                <h6 className='fw-normal mb-0'>Annaba, 23000</h6>
                <div className='vr vr-blurry position-absolute my-0 h-100 d-none d-md-block top-0 end-0'></div>
              </MDBCol>

              <MDBCol lg='3' md='6' className='mb-4 mb-lg-0 position-relative'>
                <MDBIcon icon='phone' size='3x' className='text-primary mb-4' />
                <h6 className='fw-normal mb-0'>0558 90 90 80</h6>
                <div className='vr vr-blurry position-absolute my-0 h-100 d-none d-md-block top-0 end-0'></div>
              </MDBCol>
              <MDBCol lg='3' md='6' className='mb-4 mb-lg-0 position-relative'>
                <MDBIcon icon='fas fa-at' size='3x' className='text-primary mb-4' />
                <h6 className='fw-normal mb-0'>pharmacie@gmail.com</h6>
                <div className='vr vr-blurry position-absolute my-0 h-100 d-none d-md-block top-0 end-0'></div>
              </MDBCol>
              
            </MDBRow>
            <ContactInfo/>
          </div>
        </div>
      </section>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
       
        </div>
      </section> 
      <div className="loader"></div>
    
    <div style={{ display: 'flex', justifyContent: 'center', }}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d474.3056174143138!2d7.755486728998135!3d36.89668380856899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f007b0245c00b3%3A0x3ae12e1ac551edd3!2sPharmacie%20Smati.%20Tine.%20N!5e0!3m2!1sfr!2sdz!4v1703634123070!5m2!1sfr!2sdz"
      style={{
        width: "50%",
        height: "450px",
        border: "0",
        borderRadius:"40px"
        
      }}
      
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
    </div>
    </MDBContainer>
  );
}



export default Contact










