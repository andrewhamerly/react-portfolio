const Resume = () => {
    const proficiencies = [
        "HTML",
        "CSS",
        "JavaScript",
        "MERN Stack",
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "GraphQL",
        "PostgreSQL",
        "WordPress CMS",
        "Woocommerce",
        "Balsamiq Wireframes",
        "Ahrefs SEO",
    ];

    const skills = [
        "Fast-Learner",
        "Client Project Management",
        "Problem-Solving",
        "Attention to Detail",
        "Initiative",
        "Effective Communication",
        "Systems Thinking",
        "Positive Attitude",
        "Team-Player",
    ];

    return (
        <div className="row">
        <div className="container my-4">
            <div className="button-section text-center mb-4">
                <a className="resumebtn btn m-2" href="https://andrewhamerly.com" target="_blank" rel="noopener noreferrer">View Website</a>
                <a className="btn downloadbtn btn-secondary m-2" href="src/assets/Andrew-Hamerly-Resume-2024.pdf" download>Download Resume</a>
            </div>
        </div>
            <div className="row">
                <div className="col-12 col-lg-3 mb-4">
                    <aside>
                        <h3>Tech Skills</h3>
                        <ul>
                            {proficiencies.map((proficiency, index) => (
                                <li key={index}>{proficiency}</li>
                            ))}
                        </ul>
                        <h3>Soft Skills</h3>
                        <ul>
                            {skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </aside>
                </div>
                <div className="col-12 col-lg-9">
                    <h2>PROFESSIONAL EXPERIENCE</h2>
                    <div className="experience">
                        <h4>Freelance Website Development, SEO, and Email Marketing</h4>
                        <p>October 2018 - Present</p>
                        <p><span className="employment-italic">Self-Employed, Cleveland, OH</span></p>
                        <p>Created over 15 client websites for small business, retail, and E-commerce brands. Currently, maintain and update 10 client WordPress websites with security and performance best practices.</p>
                    </div>
                    <div className="experience">
                        <h4>Website Developer</h4>
                        <p>February 2023 - Present</p>
                        <p><span className="employment-italic">Ascension Biomedical, Oberlin, OH</span></p>
                        <p>Developed and currently maintain an Ohio Medical Marijuana Control Program compliant website that passed meticulous review by the State of Ohio Division of Cannabis Control.
                        </p>
                    </div>
                    <div className="experience">
                        <h4>Digital Marketing Manager</h4>
                        <p>October 2019 - January 2023</p>
                        <p><span className="employment-italic">Organic Plus Brands, Cleveland, OH</span></p>
                        <p>Developed and implemented a modern digital marketing strategy to drive eCommerce sales 4x. Built the strategy, content, and websites for three in-house brands resulting in over 350k in online sales.</p>
                    </div>
                </div>
                <div className="col-12 col-lg-9">
                    <h2>EDUCATION</h2>
                    <div className="education">
                        <h4>Case Western Reserve University, Full Stack Web Development Boot Camp Certificate</h4>
                        <p>February 2024 - August 2024</p>
                        <p>An intensive program for gaining technical programming skills in HTML5, CSS3, JavaScript, jQuery, Bootstrap, Bulma, Tailwind,  PostgreSQL, Sequalize, MongoDB, Express.js, React.js, Node.js, and Handelbars.js.</p>
                    </div>
                    <div className="education">
                        <h4>Baldwin Wallace University, Bachelor in Arts in Innovation & Entrepreneurship and Business Administration</h4>
                        <p>Graduated 2017</p>
                    </div>
                    <div className="education">
                        <h4>Cuyahoga Community College, Associate of Applied Business in Purchasing and Supply Chain Management</h4>
                        <p>Graduated 2015</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;