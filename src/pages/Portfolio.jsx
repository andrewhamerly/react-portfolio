import AHPortfolioImage from '../assets/images/AH-portfolio-image.png';
import goldenHours from '../assets/images/golden-hours.png';
import flavorSavor from '../assets/images/Flavor-Saver-Hero-Image.png';
import weather from '../assets/images/weather-dashboard.png';
import blog from '../assets/images/blog-example-image.png';
import noteTaker from '../assets/images/note-taker.png';

const Portfolio = () => {
    const projects = [
        { title: "HTML/CSS Portfolio", imageUrl: AHPortfolioImage, liveLink: "https://andrewhamerly.github.io/portfolio/", repoLink: "https://github.com/andrewhamerly/portfolio" },
        { title: "Chasing the Golden Hours - FrontEnd App", imageUrl: goldenHours, liveLink: "https://andrewhamerly.github.io/ChasingtheGoldenHours/", repoLink: "https://github.com/andrewhamerly/ChasingtheGoldenHours" },
        { title: "Flavor Savor - Full Stack App", imageUrl: flavorSavor, liveLink: "https://flavor-saver.onrender.com/", repoLink: "https://github.com/andrewhamerly/flavor-saver" },
        { title: "Weather API Dashboard", imageUrl: weather, repoLink: "https://github.com/andrewhamerly/weather-dashboard" },
        { title: "LocalStorage Blog", imageUrl: blog, liveLink: "https://andrewhamerly.github.io/blog/", repoLink: "https://github.com/andrewhamerly/blog" },
        { title: "Note Taker JavaScript App", imageUrl: noteTaker, liveLink: "https://note-taker-bxn1.onrender.com/", repoLink: "https://github.com/andrewhamerly/note-taker" }
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