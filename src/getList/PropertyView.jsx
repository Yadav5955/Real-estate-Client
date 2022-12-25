import "./PropertyView.css"
import SideNavBar from "../asidebar/aside"
import Header from "../header/header";
import React, { useState, useEffect } from 'react';
import SearchRes from './Search';

const PropertyView = () => {
  const [property, setProperty] = useState([]);
  const authToken = localStorage.getItem("authorization");

  useEffect(() => {
    async function fetchData() {
      console.log(authToken)
      const response = await fetch("https://server-nvci.onrender.com/properties/",{
        headers: {
          authorization: authToken
        }
      });
      const data = await response.json();
      setProperty(data);
    }
    fetchData()
  }, [authToken])
  return (
    <>
      <div className="maincontainer">
        <div className="sidenav">
          <SideNavBar />
        </div>
        <div className="subpart">
          <div className="headerpart">
            <Header />
          </div>
          <div className="searchpart"><SearchRes property={property} /></div>
        </div>
      </div>
    </>
  )
}
export default PropertyView