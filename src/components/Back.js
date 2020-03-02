import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';


class Back extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <>
                <h1>
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                </h1>

                <p className="back__content">
                    BACK
                </p>
            </>);
    }
}


export default Back;