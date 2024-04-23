import { NavLink} from "react-router-dom";

function HomePage() {
  return (
    <div style={{display:'grid', placeItems:'center',margin:50}}>
      <div style={{width: "70vh",height: "92vh", padding:20,}}>
        <h1 style={{textAlign:'center'}}>Welcome to Educase</h1>
        <p>Educase is a one-stop solution to all the additional resources that a school/ preschool need. From customized school management software to social media marketing for schools, Educase has been putting in continuous efforts to be a solid case for all these needs.</p>
        <br/>
        <br/>
        {/* Use Link component to navigate to CreateAccountPage */}
        <NavLink to="/create-account">
          <button
            style={{
              width:"70vh",
              backgroundColor: "blue",
              color: "white",
              border: "1px solid black",
              borderRadius: "5px",
              padding: "10px",
              paddingLeft: "63px",
              paddingRight: "63px",
              marginBottom: "10px",
              cursor: "pointer",
            }}
          >
            Create Account
          </button>
        </NavLink>

        <br />
        <NavLink to="/LoginPage">
          <button
            style={{
              width:"70vh",
              border: "1px solid black",
              borderRadius: "5px",
              padding: "10px",
              paddingLeft: "30px",
              paddingRight: "30px",
              cursor: "pointer",
            }}
          >
            Already Registered? Login
          </button>
        </NavLink>
      </div>
    </div>
    
  );
}

export default HomePage;
