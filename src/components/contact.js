import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../components/OIP.webp";
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''

    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");

    // Ensure it says 5000, NOT 3000
try {
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDetails),
    });

    let result = await response.json();
    setButtonText("Send");

    if (result.code === 200) {
      setStatus({ success: true, message: 'Message sent successfully'});
      setFormDetails(formInitialDetails);
    } else {
      setStatus({ success: false, message: 'Something went wrong.'});
    }
  } catch (error) {
    // This is where "Failed to Fetch" is caught
    console.log("Fetch Error:", error);
    setButtonText("Send");
    setStatus({ success: false, message: 'Could not connect to server.'});
  }


 
       
    };
    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col Size={12} md={6}>
                        <TrackVisibility>
                            <img src={contactImg} alt='contact us' />


                        </TrackVisibility>
                    </Col>
                    <Col Size={12} md={6}>
                        <TrackVisibility>
                            <h2>
                                Get in Touch
                            </h2>
                            <form onSubmit={handleSubmit}>
                                <Row>
                                    <Col Size={12} md={6}>
                                        <input type="text" value={formDetails.firstName}
                                            placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />

                                    </Col>


                                    <Col Size={12} md={6}>
                                        <input type="text" value={formDetails.lastName}
                                            placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />

                                    </Col>

                                    <Col Size={12} md={6}>
                                        <input type="text" value={formDetails.email}
                                            placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />

                                    </Col>

                                    <Col Size={12} md={6}>
                                        <input type="text" value={formDetails.phone}
                                            placeholder="Phone no." onChange={(e) => onFormUpdate('phone', e.target.value)} />

                                    </Col>

                                    <Col size={12} className="px-1">
                                        <textarea rows="6" value={formDetails.message}
                                            placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                        <button type="submit"><span>{buttonText}</span></button>
                                    </Col>
                                    {
                                        status.message &&
                                        <Col>
                                            <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                        </Col>
                                    }
                                </Row>
                            </form>
                        </TrackVisibility>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}
