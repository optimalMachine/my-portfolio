// Import Assets
import profile from '../assets/profile.jpg';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Jiuk Choi" />

            <div className='header__content'>
                <h1>Hi, I'm Jiuk Choi</h1>
                <p>Blockchain Developer & Front End Developer</p>
                <button className='button'>Get In Touch</button>
            </div>
        </section>
    );
}

export default Header;