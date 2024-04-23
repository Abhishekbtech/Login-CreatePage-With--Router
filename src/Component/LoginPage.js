import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [formData, setFormData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  const handleLogin = () => {
    // Find a match for email and password in formData array
    const match = formData.find((item) => item.email === email && item.password === password);

    if (match) {
      onLogin(email, password);
      navigate("/user-data", { state: { userData: match } });
      // console.log(match)
    } else {
      setError("Invalid email or password.")
      alert("Invalid email or password.")
      // console.log("Invalid email or password.")
      setEmail('')
      setPassword('')
    }
  };

  return (
    <div style={{display:'grid', placeItems:'center'}}>
      <div style={{width: "70vh",height: "92vh", padding:20  }}>
      <h2 style={{textAlign:'center'}}>Singin to your Educase account</h2>
      <br/>
      <fieldset style={{ borderRadius: "10px" }}>
        <legend htmlFor="email" style={{ width: "120px", paddingLeft: "10px" }}>
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
      <br/>
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
      <button onClick={handleLogin} style={{marginTop:100, width: "70vh", paddingTop:10, paddingBottom:10, borderRadius:10, cursor:'pointer'}}>Login</button>
      </div>
      <br/>
      <br/>
      {error && <p style={{ color: "red", textAlign:'center' }}><b>{error}</b></p>}
    </div>
  );
};

export default LoginPage;
