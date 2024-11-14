import { Link } from 'react-router-dom';
import './Homepage.css';
import introvid from './introshlok.mp4';
import aboutvid from './abouts.mp4';
import teachingvid from './tspace.mp4';
const Homepage = () => {
    return (
        <div className="homepage">
            {/* Title Screen with Video Background */}
            <div className="section fullscreen-title">
                <video autoPlay loop muted playsInline className="background-video">
                    <source src={introvid} type="video/mp4" />
                </video>
                <h1 className="main-title">Shlokagriha</h1>
                <h2 className="main-subtitle">Wisdom for the Modern Soul</h2>
            </div>

            {/* About Section with Video Background */}
            <div className="section about-section">
                <video autoPlay loop muted playsInline className="background-video">
                    <source src={aboutvid} type="video/mp4" />
                </video>
                <h1 className="about-title">Welcome to the Teachings Repository</h1>
                <p className="about-description">
                    Dive into the spiritual teachings of ancient texts, exploring their relevance in todays world.
                    This repository provides insights into texts like the Bhagavad Gita, Ayigiri Nandini, and more, helping you
                    find practical wisdom for the modern soul.
                </p>
            </div>

            {/* Teachings Section with Cards */}
            <div className="section teachings-section">
            <video autoPlay loop muted playsInline className="background-video">
        <source src={teachingvid} type="video/mp4" />
        {/* Add fallback content if needed */}
    </video>
   <h1 className="teachings-title">Available Teachings</h1>
   <div className="teachings-cards">
       <Link to="/categories" className="teaching-card teaching-bhagavad">
           <h2>Bhagavad Gita</h2>
           <p>Explore the timeless wisdom of the Bhagavad Gita.</p>
       </Link>
       <Link to="/ayigiri-nandini" className="teaching-card teaching-ayigiri">
           <h2>Mahishasura Mardini</h2>
           <p>Delve into the powerful verses of Ayigiri Nandini.</p>
       </Link>
       <Link to="/categories" className="teaching-card teaching-tandava">
           <h2>ShivTandava Stotram</h2>
           <p>Explore the timeless wisdom.</p>
       </Link>
       <Link to="/ayigiri-nandini" className="teaching-card teaching-chalisa">
           <h2>Hanuman Chalisa</h2>
           <p>Delve into the powerful verses</p>
       </Link>
   </div>
</div>
        </div>
    );
};

export default Homepage;
