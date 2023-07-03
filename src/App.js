import './App.css';
import './components/socialMedia/SocialMedia.css'
import {Header, Carousel, Navbar, Vision, Eventss, Members, Alumni, Announcements, Contacts} from './components';
// import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect} from 'react';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2500)
  }, [])
  
  return (
  <div className='a_main'>
    {
      loading?
      
     ( 
      <div className="loader_section">
      <ClimbingBoxLoader
        color={'black'}
        loading={loading}
        size={15}
      />
      <span className='loader'>Loading...</span>
      </div>)
  :(
    <>
    <Navbar/>
     <section id="n_header">
    <Header/>
    </section>
     <div id="n_announcements">
    <Announcements/>
    </div>
     <div id="n_carousel">
    <Carousel/>
    </div>
     <div id="n_vision">
    <Vision/>
    </div>
     <div id="n_events">
    <Eventss/>  
    </div>
     <div id="n_members">
    <Members/>
    </div>
     <div id="n_alumni">
    <Alumni/>
    </div>
     <div id="n_contacts">
    <Contacts/>
    </div>
    </>
  )}
  </div>
  );
}

export default App; 
