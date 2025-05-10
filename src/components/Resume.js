import React, {Component} from 'react'

class Resume extends Component{
    render() {
        return(
            <div className="container mt-5">
                <h2>Resume</h2>
                <p>Here you can add your resume</p>
                <a href='/resume.pdf' className="btn btn-outline-primary"
                target='_blank'
                rel="noreferrer"> Download my resume</a>
            </div>
        );
    }
}

export default Resume;