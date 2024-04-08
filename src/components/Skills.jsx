import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage
} from 'mdb-react-ui-kit';

function Skills() {
  return (
    <div id='Skills'>

      <br /><br /><br /><br /><br /> <br /><br /> 

    <div  className='container mt-5 mb-5'>


    

<center className='mb-5'><h1><u><b>Skills</b></u></h1></center>



 <div className='row container mt-5 row-cols-2 row-cols-md-3 row-cols-lg-4' >

<div className='col mt-3'>
<MDBCard id='card'>
<MDBCardImage id='skillimg' src='https://abhishek7356.github.io/My-Portfolio/static/media/HTML5_badge.dbc3baa7e405494219e6.png' alt='...' position='top' />
<h6><b>HTML</b></h6>
</MDBCard>
</div>
<div className='col mt-3 '>
<MDBCard id='card'>
<MDBCardImage id='skillimg' src='https://www.softorks.com/Images/css.jpg' alt='...' position='top' />
<h6><b>CSS</b></h6>
</MDBCard>
</div>
<div className='col mt-3'>
<MDBCard id='card'>
<MDBCardImage id='skillimg' src='https://www.britefish.net/wp-content/uploads/2019/06/logo-javascript-2.png' alt='...' position='top' />
<h6><b>JAVASCRIPT</b></h6>
</MDBCard>
</div>
<div className='col mt-3 '>
<MDBCard id='card'>
<MDBCardImage id='skillimg' src='https://res.cloudinary.com/lwgatsby/f_auto/www/uploads/2020/11/mongodb.png' alt='...' position='top' />
<h6><b>MONGODB</b></h6>
</MDBCard>
</div>

<div className='col mt-3'>
<MDBCard id='card'>
<MDBCardImage id='skillimg' src='https://th.bing.com/th/id/R.f81a6f373c244b1f70f4b7402b5ab372?rik=rbXh4ieLuKt%2bmA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f09%2fReact_logo_logotype_emblem.png&ehk=QhGOkKcUKCU7FBQgHOajOiJqJBACUTD2Ni6LsfqzCEA%3d&risl=&pid=ImgRaw&r=0' alt='...' position='top' />
<h6><b>REACT</b></h6>

</MDBCard>
</div>
<div className='col mt-3'>
<MDBCard id='card'>
<MDBCardImage id='skillimg' src='https://seeklogo.com/images/A/angular-icon-logo-9946B9795D-seeklogo.com.png' alt='...' position='top' />
<h6><b>ANGULAR</b></h6>

</MDBCard>
</div>
<div className='col mt-3'>
<MDBCard id='card'>
<MDBCardImage id='skillimg' src='https://icon-library.com/images/node-js-icon/node-js-icon-6.jpg' alt='...' position='top' />
<h6><b>NODE JS</b></h6>
</MDBCard>
</div>
<div className='col mt-3 '>
<MDBCard id='card'>
<MDBCardImage id='skillimg' src='https://www.technoscore.com/img/expressjs.png' alt='...' position='top' />
<h6><b>EXPRESS JS</b></h6>
</MDBCard>
</div>

</div>



    </div>
     

    </div>
  )
}

export default Skills