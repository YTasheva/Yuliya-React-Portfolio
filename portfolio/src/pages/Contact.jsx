import React from 'react';
import { Link, Route, Routes } from "react-router-dom";
import Form from 'react-bootstrap/Form';
      
function Contact(props) {
  return (
    <div>
        <h1 class name="text-center">Contact</h1>
        <p>Feel free to get in touch with me via social media or email using the contact form below.</p>
        <p>I would truly like to hear what you think about the content and website or share what is on your mind.</p>
        <p>Thank you for visiting my website!</p>

      <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="name"
          placeholder="name"
          custom
        />
        <label htmlFor="floatingInputCustom">name</label>
      </Form.Floating>
        <Form.Floating>
        <Form.Control
          id="floatingInputCustom"
          type="email"
          placeholder="name@example.com"
          />
        <label htmlFor="floatingInputCustom">Email address</label>
      </Form.Floating>
      <FloatingLabel controlId="floatingTextarea" label="Message">
        <Form.Control
           as="textarea"
           placeholder="Leave a message here"
           style={{ height: '100px' }}
            />
      </FloatingLabel>
        <Button variant="primary" type="submit">
            Submit
        </Button>
      </div>
  );
}

export default Contact;

