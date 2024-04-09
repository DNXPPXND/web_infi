// MainComponent.js
import React, { useEffect, useState } from "react";
import Navbar_profile from "path/to/Navbar_profile";

const MainComponent = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken); // ไม่ต้องแปลงเป็น JSON
    }
  }, []);

  return <div>{token && <Navbar_profile token={token} />}</div>;
};

export default MainComponent;
