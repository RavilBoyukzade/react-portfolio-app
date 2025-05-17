import React, {useRef} from 'react'
import emailjs from 'emailjs-com'
import {Form,Button,Container} from 'react-bootstrap'

const Contact = () =>{
    const form = useRef();

    const sendEmail = (e) =>{
        e.preventDefault();

        emailjs.sendForm(
            'service_id',
            'template_id',
            form.current,
            'user_id'
        ).then(
            (result)=>{
                alert('your message was sent successfully!');
                form.current.reset();
            },
            (error)=>{
                alert('your message did not send, please try again later!');
                console.error(error.text);
            }
        );
    }
    return(
        <Container className="mt-5">
            <h2>Contact me</h2>
            <Form ref={form} onSubmit={sendEmail}>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="user_name" placeholder="Your Name" required/>
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="user_email" placeholder="Your Email" required/>
                </Form.Group>
                <Form.Group controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" name="message" rows={4} placeholder="Your message" required/>
                </Form.Group>
                <Button variant="pimary" type="submit" className="mt-3">Send</Button>
            </Form>
        </Container>
    );
}
export default Contact