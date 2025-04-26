import Link from "next/link";

export default function BackButton() {
    return(
        <Link className="buttonLink" href="/">
            <img src="./back.svg" className="backImage"/>
        </Link>
    );
};