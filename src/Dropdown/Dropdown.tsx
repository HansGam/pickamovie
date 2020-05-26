import React from "react";
import Select from 'react-select';
import './Dropdown.scss';

interface SelectOptions {
    value: string;
    label: string;
}
interface Props {
    title: string;
    placeholder: string;
    options: SelectOptions[];
}

const Dropdown: React.FC<Props> = (props) => {
    return (
        <div data-testid={props.title} className="Dropdown-container">
            <Select
                options={props.options}
                placeholder={props.placeholder}
                isMulti
            />
        </div>
    );
}

export default Dropdown