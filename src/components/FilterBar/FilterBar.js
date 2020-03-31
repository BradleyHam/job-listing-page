import React from 'react';
import FilterItem from './FilterItem/FilterItem'
import classes from './FilterBar.module.css';



const FilterBar = (props) => {
    let tagsJsx = props.selectedTags.map(tag => <FilterItem tag={tag} removeTag={props.removeTag} />)
    return (
        <div className={classes.filterBar}>
            <div className={classes.tagRow}>
                {tagsJsx}
            </div>
            <button className={classes.button}>click me</button>
        </div>
    );

}

export default FilterBar;