import React from 'react';
import './Card.scss';


export const Card: React.FunctionComponent<any> = ({children}) => (
    <main className="Card">
        {children}
    </main>
);