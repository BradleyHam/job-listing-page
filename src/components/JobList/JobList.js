import React, { Component } from 'react'
import JobItem from './JobItem/JobItem'
import classes from './JobList.module.css'

const JobList = (props) => {
    let jobsJsx;

    if (props.selectedTags.length < 1) {
        jobsJsx = props.jobs.map(job =>
            <JobItem job={job} addTag={props.addTag} />
        )
    } else {
        let filteredJobs = props.jobs.filter(job => {
            return props.selectedTags.every(tag =>
                job.languages.includes(tag)
            )
        })

        jobsJsx = filteredJobs.map(job =>
            <JobItem job={job} addTag={props.addTag} />
        )
    }





    return (
        <div className={classes.jobList}>
            {jobsJsx}
        </div>
    );

}

export default JobList;