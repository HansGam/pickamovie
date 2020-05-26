import React from 'react';
import './Home.scss';
import Dropdown from "../Dropdown/Dropdown";
import {Card} from "../Card/Card";
import Button from "../Button/Button";

interface Props {
    title?: string;
}

const genreOptions = [
    {value: 'action', label: 'Action'},
    {value: 'adventure', label: 'Adventure'},
    {value: 'animation', label: 'Animation'},
    {value: 'biography', label: 'Biography'},
    {value: 'comedy', label: 'Comedy'},
    {value: 'crime', label: 'Crime'},
    {value: 'drama', label: 'Drama'},
    {value: 'family', label: 'Family'},
    {value: 'fantasy', label: 'Fantasy'},
    {value: 'history', label: 'History'},
    {value: 'horror', label: 'Horror'},
    {value: 'music', label: 'Music'},
    {value: 'musical', label: 'Musical'},
    {value: 'mystery', label: 'Mystery'},
    {value: 'romance', label: 'Romance'},
    {value: 'sci-fi', label: 'Sci-Fi'},
    {value: 'sport', label: 'Sport'},
    {value: 'thriller', label: 'Thriller'},
    {value: 'war', label: 'War '},
    {value: 'western', label: 'Western'}
]

const Home: React.FC<Props> = (props) => {
    return (
        <div data-testid="home-page" className="home-header">
            <h1>{props.title} Page</h1>
            <Card>
                <Dropdown title="genre-dropdown" options={genreOptions} placeholder="Select Genre..."/>
                <Button label="Generate Movie!" />
            </Card>
        </div>
    );
}

export default Home