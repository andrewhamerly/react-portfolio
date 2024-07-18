import './Portfolio.css';

const Portfolio = () => {
    const projects = [
        { title: "Project 1", imageUrl: "path/to/image1.jpg", liveLink: "https://live1.com", repoLink: "https://github.com/repo1" },
        { title: "Project 2", imageUrl: "path/to/image1.jpg", liveLink: "https://live1.com", repoLink: "https://github.com/repo1" },
        { title: "Project 3", imageUrl: "path/to/image1.jpg", liveLink: "https://live1.com", repoLink: "https://github.com/repo1" },
        { title: "Project 4", imageUrl: "path/to/image1.jpg", liveLink: "https://live1.com", repoLink: "https://github.com/repo1" },
        { title: "Project 5", imageUrl: "path/to/image1.jpg", liveLink: "https://live1.com", repoLink: "https://github.com/repo1" },
        { title: "Project 6", imageUrl: "path/to/image1.jpg", liveLink: "https://live1.com", repoLink: "https://github.com/repo1" },
        // Add 5 more projects
    ];

    return (
        <div className="portfolio">
            {projects.map((project, index) => (
                <div className="project" key={index}>
                    <img src={project.imageUrl} alt={project.title} />
                    <h3>{project.title}</h3>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                </div>
            ))}
        </div>
    );
}

export default Portfolio;