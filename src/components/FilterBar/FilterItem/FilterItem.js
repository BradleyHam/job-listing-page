import React from 'react';
import classes from './FilterItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const FilterItem = (props) => {
    return (
        <div className={classes.item}>
            <p className={classes.p}>{props.tag}</p>
            <div className={classes.iconContainer} onClick={() => props.removeTag(props.tag)}>
                <FontAwesomeIcon icon={faTimes} size="lg" className={classes.icon} />
            </div>
        </div>
    );
}

export default FilterItem;