const Resume = () => {
    const proficiencies = [
        "Proficiency 1",
        "Proficiency 2",
        // Add more proficiencies
    ];

    return (
        <div className="resume">
            <a href="path/to/resume.pdf" download>Download Resume</a>
            <h3>Proficiencies</h3>
            <ul>
                {proficiencies.map((proficiency, index) => (
                    <li key={index}>{proficiency}</li>
                ))}
            </ul>
        </div>
    );
}

export default Resume;