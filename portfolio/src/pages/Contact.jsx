import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  CDBInput,
  CDBCard,
  CDBCardBody,
  CDBIcon,
  CDBBtn,
  CDBContainer,
  CDBAlert,
} from "cdbreact";
import Hero from "../components/Hero";
import "../index.css";

const Contact = () => {
  return (
    <div>
      <Hero backgroundImage="https://raw.githubusercontent.com/YTasheva/Yuliya-React-Portfolio/main/portfolio/src/images/contactMe.png"></Hero>
      
      <CDBContainer>
        <CDBCard style={{ width: "50rem" }}>
          <CDBCardBody className="mx-4">
            <div className="text-center mt-4 mb-2">
              <p className="h4 font-weight-bold"> Get In Touch </p>
            </div>
            <CDBInput
              label="Your name"
              type="text"
              icon="user"
              iconClass="text-muted"
            />
            <CDBInput
              label="Your email"
              type="email"
              icon="envelope"
              iconClass="text-muted"
            />
            <CDBInput
              label="Subject"
              type="text"
              icon="tags"
              iconClass="text-muted"
            />
            <CDBInput
              label="Your message"
              type="textarea"
              icon="pencil-alt"
              iconClass="text-muted"
            />
            <CDBBtn
              outline
              color="danger"
              style={{ width: "30%" }}
              className="btn-block mt-5 mx-auto"
            >
              Send
              <CDBIcon far icon="paper-plane" />
            </CDBBtn>
          </CDBCardBody>
        </CDBCard>
      </CDBContainer>
    </div>
  );
};

  /* <CDBAlert
  color="danger"
 style={{ width: "43rem" }}
className={"mt-5 mx-5"}
dismiss
 >
  <strong>Oops!</strong> Validation errors occurred. Please confirm the
fields and submit it again.
</CDBAlert>  
} */


export default Contact;
