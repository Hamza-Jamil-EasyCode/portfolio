import { Link } from 'react-router-dom'
import homeImg from '../assets/homeImg.svg'

const Home = () => {
    return (
        <div className='home'>
            <div className="home-bgImg">
                <img src={homeImg} alt="homeImg" />
            </div>
            <div className="home-content">
                <h1>Grow your business with</h1>
                <h1>Easy Code</h1>

                <p>We are a team of talented developers making application</p>
                <Link to='services' className='get-started-btn' >Get Started</Link>
            </div>
        </div>
    )
}

export default Home
