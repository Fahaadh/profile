import React from 'react'
import { MDBInput } from 'mdb-react-ui-kit'
import { MDBTextArea } from 'mdb-react-ui-kit';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

function Contact() {
  return (
    <div>

      <br /><br /> <br /> <br /> <br /><br /><br />

        <div id='Contact'>

          <center><h1><b><u>CONTACT</u></b></h1></center>
          
          <div className='row container'>
            <div className='col-lg-3 col-sm-12'>

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
            <div className='col-lg-8 col-sm-12'>
            <h5>"Feel free to submit the form below, or if you prefer, you can reach out to me via email."</h5>
          <h5>fahadhasif6@gmail.com</h5>
          <form action="" >
          <MDBInput label="Name" id="typeText" type="text" className='mt-3'  />
          <MDBInput label="Email" id="typeText" type="text" className='mt-3' />
          <MDBTextArea label="Message" id="textAreaExample" rows="{4}" className='mt-3' style={{height:180}}/>
          <center><button id='send' className='btn btn mt-3'>SEND</button></center>
          </form>
            </div>
            
            <div className='col-lg-1 col-sm-12'></div>
          </div>
          <br /><br /><br />



        </div>

    </div>
  )
}

export default Contact