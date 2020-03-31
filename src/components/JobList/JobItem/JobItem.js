import React from 'react'
import classes from './JobItem.module.css'
import Tag from './Tag'

const JobItem = (props) => {
    let tagsJsx = props.job.languages.map(tag => <Tag tag={tag} addTag={props.addTag} />)
    return (
        <div className={classes.jobItem}>
            <div className={classes.jobDetailsContainer}>
                <div className={classes.jobDetails}>
                    <p className={classes.company}>{props.job.company}</p>
                    <p className={classes.title}>{props.job.position}</p>
                    <p className={classes.desc}>{props.job.whenPosted}</p>
                </div>
            </div>
            <div className={classes.jobTags}>
                {tagsJsx}
            </div>

        </div>
    );
}

export default JobItem;