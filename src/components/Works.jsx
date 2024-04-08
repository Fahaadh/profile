import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage
} from 'mdb-react-ui-kit';

function Works() {
  return (
    <div >


    <br /><br /><br /><br /><br /><br /><br /> 


      <div id='Works' className='container'>


      <center className='mb-5'><h1><u><b>WORKS</b></u></h1></center>
      <div className='row container row-cols-lg-3 row-cols-md-2 row-cols-1 ms-3 '>

        <div className='col mt-2'>
        <MDBCard id='workcard1' className='text-center'>
              <h3 className='mt-3'><b>Coffee Shop</b></h3>
              <h5>Using:HTML,CSS</h5>
              <a href="https://fahaadh.github.io/coffeshop/"><button className='btn btn-light mt-5'>Live Demo</button></a>
              <a href="https://github.com/Fahaadh/coffeshop"><button className='btn btn-light mt-2 '>Repositry</button></a>
       </MDBCard>
        

        </div>
        <div className='col mt-2'>

        <MDBCard id='workcard2' className='text-center'>
              <h3 className='mt-3'><b>Travel Bloge</b></h3>
              <h5>Using:HTML,CSS,<br />Bootsstrap</h5>
              <a href=""><button className='btn btn-light mt-4'>Live Demo</button></a>
              <a href=""><button className='btn btn-light mt-2 '>Repositry</button></a>
       </MDBCard>

      

        </div>
        <div className='col mt-2'>

        <MDBCard id='workcard3' className='text-center'>
              <h3 className='mt-3'><b>Bank App</b></h3>
              <h5>Using:HTML,CSS,<br />Bootsstrap,Javascript</h5>
              <a href="https://effervescent-druid-a113d3.netlify.app/"><button className='btn btn-light mt-4'>Live Demo</button></a>
              <a href="https://github.com/Fahaadh/bankapp"><button className='btn btn-light mt-2 '>Repositry</button></a>
       </MDBCard>

        </div>
        <div className='col mt-2'>
        <MDBCard id='workcard4' className='text-center'>
              <h3 className='mt-3'><b>Calculator</b></h3>
              <h5>Using:HTML,CSS,<br />Bootsstrap,Javascript</h5>
              <a href="https://profound-taiyaki-8a83c1.netlify.app/"><button className='btn btn-light mt-4'>Live Demo</button></a>
              <a href=""><button className='btn btn-light mt-2 '>Repositry</button></a>
       </MDBCard>
        </div>

        <div className='col mt-2'>
        <MDBCard id='workcard5' className='text-center'>
              <h3 className='mt-3'><b>Online Cart</b></h3>
              <h5>Using:HTML,CSS,<br />Bootsstrap,Javascript,API fetch</h5>
              <a href="https://musical-florentine-6f945a.netlify.app/"><button className='btn btn-light mt-4'>Live Demo</button></a>
              <a href=""><button className='btn btn-light mt-2 '>Repositry</button></a>
       </MDBCard>
        </div>

        <div className='col mt-2'>
        <MDBCard id='workcard6' className='text-center'>
              <h3 className='mt-3'><b>Doctors App</b></h3>
              <h5>Using:HTML,CSS,API fetch<br />Bootsstrap,Javascript,REACT</h5>
              <a href="https://starlit-cuchufli-e18c7f.netlify.app/"><button className='btn btn-light mt-4'>Live Demo</button></a>
              <a href="https://github.com/Fahaadh/Bookandmeet"><button className='btn btn-light mt-2 '>Repositry</button></a>
       </MDBCard>
        </div>
      </div>



      </div>
    </div>
  )
}

export default Works