import React from "react";
import { useLocation } from "react-router-dom";

const UserDataPage = ({}) => {
    const location = useLocation();
    const userData = location.state.userData;
    return (
        <div style={{display:'grid', placeItems:'center'}}>
            <h1 style={{textAlign:'center'}}>User Data</h1>
            <div style={{width: "70vh",height: "92vh", padding:20  }}>
                <div style={{display: 'flex'}}>
                    <div style={{marginRight: '20px'}}>
                        <img src={userData.photo} alt="photo" style={{width: '100px', height: '100px', borderRadius: '50%'}} /> 
                    </div>
                    <div style={{marginRight: '20px'}}>
                        <h3>{userData.fullName}</h3>
                        <p>{userData.email}</p>
                    </div>
                </div>
                <p>Let the pain itself be good, let it be settled, but the days are so great that they envy the time that labor and pain were great. But Diam</p>
            </div>
        </div>
    );
};

export default UserDataPage;
