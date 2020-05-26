import React from 'react';
import './About.scss';

interface Props {
    title: string;
}

const About: React.FC<Props> = (props) => {
    return (
        <div className="about-container">
            <h1>{props.title} Page</h1>
            <p>This app is designed to help you make movie decisions for those stay-in nights at home.</p>
        </div>
    );
}

export default About
