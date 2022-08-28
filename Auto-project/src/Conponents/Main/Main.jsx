import "./Main.css";

function Main() {
    return(
        <div>
            <div className="search-main">
                <h1>
                    ATUO  BAZA  LOCATION
                </h1>
                <form action="" className="search-bar">    
                    <input type="text" name="search" placeholder="SEARCH AUTO"/>
                    <button><img src = "../../../public/search.png"/></button>
                </form>
            </div>
            <div className="main-container">
                <div className="selected-auto">

                </div>
                <div className="icon-auto">
                    <div className="icons-auto"><img src = "../../../public/mercedes_benz.png" className="icons-auto-img"/></div>
                    <div className="icons-auto"><img src = "../../../public/bmw.png"  className="icons-auto-img"/></div>
                    <div className="icons-auto"><img src = "../../../public/audi.png" className="icons-auto-img"/></div>
                    <div className="icons-auto"><img src = "../../../public/toyota.png" className="icons-auto-img"/></div>
                </div>
            </div>
        </div>
    )
}

export default Main;