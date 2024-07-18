const Portfolio = () => {
    const projects = [
        { title: "HTML/CSS Portfolio", imageUrl: "src/assets/images/AH-portfolio-image.png", liveLink: "https://andrewhamerly.github.io/portfolio/", repoLink: "https://github.com/andrewhamerly/portfolio" },
        { title: "Chasing the Golden Hours - FrontEnd App", imageUrl: "src/assets/images/golden-hours.png", liveLink: "https://andrewhamerly.github.io/ChasingtheGoldenHours/", repoLink: "https://github.com/andrewhamerly/ChasingtheGoldenHours" },
        { title: "Project 3", imageUrl: "path/to/image1.jpg", liveLink: "https://live1.com", repoLink: "https://github.com/repo1" },
        { title: "Project 4", imageUrl: "path/to/image1.jpg", liveLink: "https://live1.com", repoLink: "https://github.com/repo1" },
        { title: "Project 5", imageUrl: "path/to/image1.jpg", liveLink: "https://live1.com", repoLink: "https://github.com/repo1" },
        { title: "Note Taker JavaScript App", imageUrl: "src/assets/images/note-taker.png", liveLink: "https://note-taker-bxn1.onrender.com/", repoLink: "https://github.com/andrewhamerly/note-taker" }
    ];

    return (
        <div className="container">
            <div className="row">
                {projects.map((project, index) => (
                    <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
                        <div className="project card h-100">
                            <img src={project.imageUrl} className="card-img-top" alt={project.title} />
                            <div className="card-body text-center">
                                <h3 className="card-title">{project.title}</h3>
                                <a href={project.liveLink} className="live-demo btn m-2" target="_blank" rel="noopener noreferrer">Live Demo</a>
                                <a href={project.repoLink} className="github-repo btn m-2" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;