import React from 'react';
import './Page.scss';

interface Props {
    title: string;
}

const Page: React.FC<Props> = (props) => {
  return (
    <div className="page-header">
      <h1>{props.title} Page</h1>
    </div>
  );
}

export default Page
