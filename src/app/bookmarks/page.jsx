import BackButton from './BackButton';
import './bookmarks.css';
import Template from './Template';
import Title from './Title';

export default function Bookmarks() {
    return(
        <div className="bookmarkPage">
            <BackButton></BackButton>
            <Title></Title>
            <Template></Template>
        </div>
    );
};