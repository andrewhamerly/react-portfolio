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
                <a className="btn btn-secondary m-2" href="src/assets/Andrew-Hamerly-Resume-2024.pdf" download>Download Resume</a>
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
                </div>
            </div>
        </div>
    );
}

export default Resume;