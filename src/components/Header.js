// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="John Doe" />

            <div className='header__content'>
                <h1>Hi, I'm Joshua Nixon</h1>
                <p>Front End Engineer / Developer / Web3 / DeFi Engineer</p>
                <a href="mailto:JoshuaBnixon@Gmail.com"className='button'>Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;