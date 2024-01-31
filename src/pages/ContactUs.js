import React from 'react';
import userContext from '../context/userContext';
import Base from '../components/Base';

function ContactUs() {
  return (
    <userContext.Consumer>
      {(user)=>(
        <Base>
          <div>ContactUs</div>
          <h2>welcom: {user.name}</h2>
        </Base>
      )}
    </userContext.Consumer>
  )
}

export default ContactUs;