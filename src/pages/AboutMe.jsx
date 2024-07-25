import AndrewCloseup from '../assets/images/Andrew-Closeup.jpeg'

const AboutMe = () => {
    return (
        <div className="about-me">
            <img src={AndrewCloseup} alt="Andrew Hamerly Full Stack JavaScript Developer" className="profile-photo" />
            <h2 className="bio-title">
                Hi, I am Andrew.
            </h2>
            <p className="bio">Website maintenance specialist with a robust background in web development languages and frameworks, digital marketing, and client project management. Strong attention to detail with both written and verbal communication skills while collaborating with teams. Proactive in ensuring the functionality, security, and performance of client websites with analytics and uptime monitors.</p>
        </div>
    );
}

export default AboutMe;