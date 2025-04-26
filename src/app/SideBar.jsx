export default function SideBar({ sidebarOpen, toggleSidebar }) {
    return (
        <div className={`sideBar ${sidebarOpen ? 'open' : ''}`}>
            <div className="topBar" style={{
                width: "100%",
                justifyContent: "space-between",
                height: "3rem",
                alignItems: "center",
                display: "flex",
                flexDirection: "row",
            }}>
                <div style={{
                color: "plum",
                display: "flex",
                fontSize: "1.5rem",
                marginLeft: "0.5rem",
                fontFamily: "var(--font-montserrat)"
                }}>Past Requests</div>
                <button className="closeButton" onClick={toggleSidebar}>
                    <img className="closeImage" src="./close.svg"></img>
                </button>
            </div>
            <ul className="oldChats" style={{
                display: "flex",
                marginLeft: "0.5rem",
                flexWrap: "nowrap",
                
            }}>
                <li className="chatItem" style={{
                    color: "white",
                    backgroundColor: "red",
                    width: "95%",
                    height: "2rem",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "5px",
                    marginTop: "2rem",

                }}>hey</li>
            </ul>
        </div>
    );
};