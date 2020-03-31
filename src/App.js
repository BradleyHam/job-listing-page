import React, { Component } from 'react';
import Header from './components//Header/Header';
import FilterBar from './components/FilterBar/FilterBar';
import JobList from './components/JobList/JobList'
import data from "./jobData"
import './App.css';

class App extends Component {
    state = {
        jobs: [],
        selectedTags: ["HTML"]
    }
    componentDidMount() {
        let jobs = JSON.parse(data)
        this.setState({
            jobs
        })
    }
    removeTag = (tagName) => {
        let filterTags = this.state.selectedTags.filter(tag =>
            tag !== tagName
        )
        this.setState({
            selectedTags: filterTags
        })
    }
    addTag = (tagName) => {
        this.setState(prevState => {
            return { selectedTags: [...prevState.selectedTags, tagName] }
        })
    }
    render() {
        return (
            <div>
                <Header />
                <FilterBar
                    selectedTags={this.state.selectedTags}
                    removeTag={this.removeTag}
                />
                <JobList
                    jobs={this.state.jobs}
                    addTag={this.addTag}
                    selectedTags={this.state.selectedTags}
                />
            </div>
        );
    }
}

export default App;