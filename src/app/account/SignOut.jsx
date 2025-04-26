export default function SignOut() {
    return(
        <div className="signOut">
            <div style={{
                marginLeft:"1rem",
                color:"plum",
                fontFamily:"var(--font-montserrat)",

            }}>Sign out</div>

            <button className="signOutButton"
            style = {{
                marginRight:"1rem",
                backgroundColor: "plum",
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
                color: "white",
                height: "70%",
                width: "clamp(2rem, 10vw, 5rem)",
                borderRadius: "1rem",
                fontFamily:"var(--font-montserrat)",
            }}><div style = {{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                fontSize: "clamp(0.4rem, 2vh, 0.8rem)",
            }}>Sign Out</div>
            </button>
        </div>
    );
}