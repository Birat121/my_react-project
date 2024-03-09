import profilePic from './assets/birat.jpg'
function Card()
{
    return(
        <div className="card">
            <img className="card-image"src={profilePic} alt="Profile picture"></img>
            <h2 className="card-title">Birat Budhathoki</h2>
            <p className="card-text">I am a CSE student having knowledge of programming languages like Java, python</p>
        </div>

    );
}

export default Card