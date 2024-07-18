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