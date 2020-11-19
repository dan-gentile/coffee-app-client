import React, { useState } from "react";
import GoogleMapsElement from "./components/GoogleMaps/GoogleMaps";
import "./App.scss";
import Header from "./components/Header/Header";
import ProfileInfo from "./components/ProfileInfo/ProfileInfo";

function App() {
  const [profileState, setProfileState] = useState({
    user_id: "",
    name: "",
    photo_url: "",
    email: "",
    liked_cafes: "",
    isLoggedIn: false,
  });

  return (
    <div className="App">
      <Header
        isLoggedIn={profileState.isLoggedIn}
        setProfileState={setProfileState}
      />
      <ProfileInfo profileState={profileState} />
      <GoogleMapsElement profileState={profileState} />
    </div>
  );
}

export default App;
