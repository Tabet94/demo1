import { useState } from "react";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBTextArea,
} from 'mdb-react-ui-kit';
import axios from "axios";
import './Form.css';

const Form = () => {
  const [inputs, setInputs] = useState({
    name: "",
    phone: "",
    email: "",
    assurance: "",
    message: "",
  });

  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInput = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErr(null); // Clear errors on input
  };

  const isNotEmpty = (value) => value.trim() !== '';
  const isValidEmail = (value) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !isNotEmpty(inputs.name) ||
      !isNotEmpty(inputs.phone) ||
      !isNotEmpty(inputs.email) ||
      !isNotEmpty(inputs.assurance) ||
      !isNotEmpty(inputs.message)
    ) {
      setErr("All fields are required.");
      return;
    }

    if (!isValidEmail(inputs.email)) {
      setErr("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      await axios.post("http://localhost:5000/backend/form/", inputs);
      setInputs({
        name: "",
        phone: "",
        email: "",
        assurance: "",
        message: "",
      });
      setErr(null);
    } catch (error) {
      setErr("Failed to send the form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MDBRow className="d-flex justify-content-center">
      <MDBCol lg="6">
        <form onSubmit={handleSubmit}>
          <h2 className="text-center mb-4">Contact Us</h2>
          <MDBInput
            className="mb-4"
            type="text"
            label="Nom/Prénom"
            name="name"
            value={inputs.name}
            onChange={handleInput}
            aria-label="Full Name"
          />
          <MDBInput
            className="mb-4"
            type="text"
            label="N° de téléphone"
            name="phone"
            value={inputs.phone}
            onChange={handleInput}
            aria-label="Phone Number"
          />
          <MDBInput
            className="mb-4"
            type="email"
            label="Adresse email"
            name="email"
            value={inputs.email}
            onChange={handleInput}
            aria-label="Email Address"
          />
          <MDBInput
            className="mb-4"
            type="text"
            label="N° assurance"
            name="assurance"
            value={inputs.assurance}
            onChange={handleInput}
            aria-label="Insurance Number"
          />
          <MDBTextArea
            className="mb-4"
            rows={4}
            label="Message"
            name="message"
            value={inputs.message}
            onChange={handleInput}
            aria-label="Message"
          />
          {err && <div className="error-message">{err}</div>}
          <MDBBtn type="submit" block className="mb-4" disabled={loading}>
            {loading ? "Sending..." : "Envoyez"}
          </MDBBtn>
        </form>
      </MDBCol>
    </MDBRow>
  );
};

export default Form;
