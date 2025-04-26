import "./account.css";
import Title from "./Title";
import Clear from "./Clear";
import SignOut from "./SignOut";
import BackButton from "../bookmarks/BackButton";

export default function Account() {
    return(
        <div className="accountPage">
            <BackButton></BackButton>
            <Title></Title>
            <Clear></Clear>
            <SignOut></SignOut>
        </div>
    );
};