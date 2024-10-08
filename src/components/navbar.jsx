function Navbar(){
    return (
        <>
        <div className="navbar" style={navbarStyles}>
            <div className="title">to do strek</div>
            <div className="right" style={{display: 'flex',
                                            flexDirection:"row"}}>
            <div className="about"><button>About</button></div>
            <div className="logo"><img src="https://unsplash.com/photos/a-full-moon-seen-through-the-leaves-of-a-tree-qenurXA5oA0" alt="company logo" /></div>
            </div>
        </div>
        </>
    )
}


const navbarStyles={
    display: 'flex',
    flexDirection:"row",
    justifyContent: "space-between",
    padding:"2px",
    margin:"2px"

}

export default Navbar;