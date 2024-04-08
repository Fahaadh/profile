import React, { useEffect } from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';


function Home() {
  useEffect(() => {
    // This ensures that the animations start only when the component is mounted.
    document.querySelectorAll('.animate-slide').forEach(element => {
      element.classList.add('slide-animation');
    });
  }, []);

  return (
    
    <div id='Home' className='mt-5'>
      <br /><br />
      <div className='row container mt-5'>
        <div className='col-lg-3 col-sm-12 mt-5'>
          <div className=' d-none d-md-block'>
            <MDBBtn className='mt-5' size='lg' floating style={{ backgroundColor: '' }} href='https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAADzdiagBRoAk4Q2j_ueP2TGEq-caA9uFll4&keywords=fahad%20asif&origin=RICH_QUERY_SUGGESTION&position=1&searchId=3b383037-4c71-4ad1-902c-564e71b58dd4&sid=WhS&spellCorrectionEnabled=false'>
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
        <div className='col-lg-6 col-sm-12 mt-5 animate-slide'> {/* Add animate-slide class here */}
          <h6 id='name' className='mt-lg-5 '>Hi, my name is</h6>
          <h1><b>FAHAD ASIF</b></h1>
          <h2>I am a <b>MEARN STACK</b> developer</h2>
          <p>An adept ME(A)RN Stack Developer, proficient in a diverse array of programming tools and languages, adeptly navigates the intricacies of both backend and frontend development needs.</p>
        </div>
        <div className='col-lg-3 col-sm-12'></div>
      </div>
    </div>
  );
}

export default Home;
