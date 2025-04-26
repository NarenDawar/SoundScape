export default function Clear() {
    return(
        <div className="clearChats">
            <div style={{
                marginLeft:"1rem",
                color:"plum",
                fontFamily:"var(--font-montserrat)",

            }}>Delete all chats</div>

            <button className="deleteButton"
            style = {{
                marginRight:"1rem",
                backgroundColor: "red",
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
                fontSize: "clamp(0.4rem, 2vh, 1rem)",
            }}>Delete</div>
            </button>
        </div>
    );
};