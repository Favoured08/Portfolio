
const Home = () => {
    return ( 
        <div className="container">
            <div className="text">
                <h1>I am <span className="name">Oluwaferanmi Adeosun</span>,<br></br>
                Web Developer</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea similique, modi nesciunt minus maiores odit, quos sequi velit eveniet atque, quae dolorem illo?
                </p>
                <button type="button" className="About-btn">About</button>
                <button type="button" className="download-btn">Download Cv</button>
            </div>
            <div className="image">
                <img 
                src="images/Rectangle 2.png" alt="profile picture" />
                <span className="circle"></span>
            </div>
            <div className="social">
                <p>Follow me on</p>
            </div>
        </div>
     );
}
 
export default Home;