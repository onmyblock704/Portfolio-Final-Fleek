// Import Assets
import fgd from '../assets/fgd.png';
import wbl from '../assets/wbl.png';
import adv from '../assets/adv.png';
import profile from '../assets/profile.png'
const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Futuristic Grid Designs</h3>
                    <img src={fgd} alt="fgd Page" />
                    <p> Enjoy!
                    </p>

                    <a href="https://onmyblock704.github.io/Futuristic-Grid-designs/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/onmyblock704/Futuristic-Grid-designs" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Website Loading Animation</h3>
                    <img src={wbl}alt="WBL Landing Page" />
                    <p>Enjoy!
                    </p>

                    <a href="https://onmyblock704.github.io/Website-Loading-Animation-/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/onmyblock704/Website-Loading-Animation- " target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Shoe store with Advanced Animations & Functionalities</h3>
                    <img src={adv} alt="Adv Landing Page" />
                    <p>Enjoy!
                    </p>

                    <a href=" https://theinfamousdev.com/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/onmyblock704/Shoe-Store-With-Advanced-Animations-Functionalities" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;