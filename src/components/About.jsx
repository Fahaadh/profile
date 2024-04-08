import React from 'react'
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

function About() {
  
  return (
    <div>

      <br /><br /><br /><br /><br /><br /><br />

      <div id='About' className='mt-5'>


      <br /> <br /><br /><br /><br /><br /><br /><br /><br /> 

<center><h1><u><b>About</b></u></h1></center>
<div className='row container mt-5'>

 <div className='col-lg-2 col-sm-12 mb-lg-5 '>
 <div className='d-none d-md-block'>
 <MDBBtn className='' size='lg' floating style={{ backgroundColor: '' }} href='https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAADzdiagBRoAk4Q2j_ueP2TGEq-caA9uFll4&keywords=fahad%20asif&origin=RICH_QUERY_SUGGESTION&position=1&searchId=3b383037-4c71-4ad1-902c-564e71b58dd4&sid=WhS&spellCorrectionEnabled=false'>
<MDBIcon fab icon='linkedin' />
</MDBBtn> <br />

<MDBBtn className='mt-1' size='lg' floating style={{ backgroundColor: 'black' }} href='https://github.com/Fahaadh'>
 <MDBIcon fab icon='github' />
 </MDBBtn> <br />

 <MDBBtn className='mt-1' size='lg' floating style={{ backgroundColor: '#4CAF50' }} href='#'>
 <MDBIcon far icon='envelope' />
 </MDBBtn> <br />

 <MDBBtn className='mt-1' size='lg' floating style={{ backgroundColor: '#999999' }} href='#'>
 <MDBIcon far icon='address-book' />
 </MDBBtn> <br />
 </div>
 </div>
<div className='col-lg-5 col-sm-12 '>
  <h3>Hello, I'm Fahad. It's a pleasure to make your acquaintance. Please feel free to look around.</h3>
</div>
<div className='col-lg-5 col-sm-12'>
  <h5>As an aspiring Full Stack Developer, I am enthusiastic about contributing my skills and expertise to dynamic web development projects, where I can actively participate, learn, and evolve professionally.
  </h5>
</div>
</div>



      </div>

    </div>
  )
}

export default About