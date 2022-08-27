import "./Header.css"

function Header(){
    
    
    return(
        <header className="header-container">
            <img className="img" src={"./img/images.jpg"} />
            <ul>
                <li><a href ="#">HOME</a></li>
                <li><a href ="#">ABOUT</a></li>
                <li><a href ="#">SERVICESS</a></li>
            </ul>
        </header>
    )
};

export default Header;