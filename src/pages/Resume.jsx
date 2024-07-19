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
            <div className="container">
                <div>
                    <h2>
                    PROFESSIONAL EXPERIENCE
                    </h2>
                    <br/>
                    <h4>
                    Freelance Website Development, SEO, and Email Marketing
                    </h4>
                    <br/>
                    <p>
                    October 2018 - Present
                    <br/>
                    <span className="employment-italic">Self-Employed, Cleveland, OH</span>
                    <br/>
                    Created over 15 client websites for small business, retail, and E-commerce brands. Currently, maintain and update 10 client WordPress websites with security and performance best practices.
                    </p>
                </div>
                <div className="resume">
                    <a className="resumebtn btn m-2" href="src/assets/Andrew-Hamerly-Resume-2024.pdf" download>Download Resume</a>
                </div>
                <div className="skills">
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
                </div>
            </div>
        </div>
    );
}

export default Resume;