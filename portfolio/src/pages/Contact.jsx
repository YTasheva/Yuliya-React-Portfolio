import React from "react";
import { CDBInput, CDBCard, CDBCardBody, CDBIcon, CDBBtn, CDBContainer } from 'cdbreact';


const Forms = () => {
  return (
    <CDBContainer>
      <CDBCard style={{ width: '30rem' }}>
        <CDBCardBody className="mx-4">
          <div className="text-center mt-4 mb-2">
            <p className="h4 font-weight-bold"> Write to Us </p>
          </div>
          <CDBInput label="Your name" type="text" icon="user" iconClass="text-muted" />
          <CDBInput label="Your email" type="email" icon="envelope" iconClass="text-muted" />
          <CDBInput label="Subject" type="text" icon="tags" iconClass="text-muted" />
          <CDBInput label="Your message" type="textarea" icon="pencil-alt" iconClass="text-muted" />
          <CDBBtn
            outline
            color="secondary"
            style={{ width: '40%' }}
            className="btn-block mt-5 mx-auto"
          >
            Send
            <CDBIcon far icon="paper-plane" />
          </CDBBtn>
        </CDBCardBody>
      </CDBCard>
    </CDBContainer>
  );
};
export default Forms;






