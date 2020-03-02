import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';


class Header extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <header>
                <FontAwesomeIcon icon={faAlignLeft} />
            </header>
        );
    }
}

export default Header;