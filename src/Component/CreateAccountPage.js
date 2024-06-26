import React, { useState } from "react";

const CreateAccountPage = ({ onCreateAccount }) => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [company, setCompany] = useState("");
  const [isAgency, setIsAgency] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [photo, setPhoto] = useState("data:image/jpeg;base64,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");

  const handleCreateAccount = (event) => {
    event.preventDefault();
    const formData = { fullName, phoneNumber, email, password, company, isAgency, photo};
    let existingFormData = localStorage.getItem("formData");
    if (existingFormData) {
      existingFormData = JSON.parse(existingFormData);
      // Convert the JavaScript object to an array if it's not already
      existingFormData = existingFormData instanceof Array ? existingFormData : [existingFormData];
      existingFormData.push(formData);
      localStorage.setItem("formData", JSON.stringify(existingFormData));
    } else {
      localStorage.setItem("formData", JSON.stringify([formData]));
    }

    // Calling onCreateAccount function
    onCreateAccount(formData);

    // Set success message
    setSuccessMessage("You have successfully registered!");

    // Reset all input fields
    setFullName("");
    setPhoneNumber("");
    setEmail("");
    setPassword("");
    setCompany("");
    setIsAgency(false);
  };

  return (
    <div style={{ display: 'grid', placeItems: 'center' }}>
      <div style={{ width: "70vh", height: "92vh", padding: 20 }}>
        <h2 style={{textAlign:'center'}}>Create your Educase Account</h2>
        <form onSubmit={handleCreateAccount}>
          <fieldset style={{ borderRadius: "10px" }}>
            <legend
              htmlFor="fullname"
              style={{ width: "120px", paddingLeft: "10px" }}
            >
              Full Name <span style={{ color: "red" }}>*</span>
            </legend>
            <input
              type="text"
              id="fullname"
              name="fullname"
              style={{ border: "none", outline: "none" }}
              value={fullName}
              required
              onChange={(e) => setFullName(e.target.value)}
            />
          </fieldset>
          <br />
          <fieldset style={{ borderRadius: "10px" }}>
            <legend
              htmlFor="phone"
              style={{ width: "120px", paddingLeft: "10px" }}
            >
              Phone number <span style={{ color: "red" }}>*</span>
            </legend>
            <input
              required
              type="tel"
              id="phone"
              name="phone"
              style={{ border: "none", outline: "none" }}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </fieldset>
          <br />
          <fieldset style={{ borderRadius: "10px" }}>
            <legend
              htmlFor="email"
              style={{ width: "120px", paddingLeft: "10px" }}
            >
              Email address <span style={{ color: "red" }}>*</span>
            </legend>
            <input
              type="email"
              required
              id="email"
              name="email"
              style={{ border: "none", outline: "none" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>
          <br />
          <fieldset style={{ borderRadius: "10px" }}>
            <legend
              htmlFor="password"
              style={{ width: "120px", paddingLeft: "10px" }}
            >
              Password <span style={{ color: "red" }}>*</span>
            </legend>
            <input
              type="password"
              required
              id="password"
              name="password"
              style={{ border: "none", outline: "none" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>
          <br />
          <fieldset style={{ borderRadius: "10px" }}>
            <legend
              htmlFor="company"
              style={{ width: "120px", paddingLeft: "10px" }}
            >
              Company Name
            </legend>
            <input
              type="text"
              id="company"
              name="company"
              style={{ border: "none", outline: "none" }}
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </fieldset>
          <br />
          <label>Are you an Agency?</label>
          <br />
          <input
            type="radio"
            name="agency"
            checked={isAgency}
            onChange={() => setIsAgency(true)}
          />
          <label>Yes</label>
          <input
            type="radio"
            name="agency"
            checked={!isAgency}
            onChange={() => setIsAgency(false)}
          />
          <label>No</label>

          <button type="submit" style={{ marginTop: 20, width: "70vh", paddingTop: 10, paddingBottom: 10, borderRadius: 10 }}>Create Account</button>
        </form>
        {successMessage && <p style={{ color: "green", textAlign: 'center' }}><b>{successMessage}</b></p>}

      </div>
    </div>
  );
};

export default CreateAccountPage;
