import { useState, useEffect, use } from "react";

function Title({onLoading}) {
    const [isVisible, setVisibility] = useState(false)

    useEffect(() => {
        setVisibility(true);
    }, []);

    return(
        <div className="title-container">
            <h1 className={`title ${isVisible ? "visible" : ""}`}>Welcome!</h1>
        </div>
    );
}

export default Title;