import React, {Component} from 'react'

class Portfolio extends Component{
    constructor(props){
        super(props);
        this.state = {
            repos: [],
        }
    };
    componentDidMount(){
        fetch('https://api.github.com/users/RavilBoyukzade/repos')
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({repos:data});
        });
    }

    render(){
        return(
            <div className="container mt-4">
                <h2>My projects from GitHub platform</h2>
                <div className='row'>
                    {this.state.repos.map((repo)=>(
                        <div className='col-md-6 mb-4' key={repo.id}>
                            <div className='card'>
                                <div className="card-body">
                                    <h5 className='card-title'>{repo.name}</h5>
                                    <p className='card-text'>{repo.description}</p>
                                    <a href={repo.html_url} 
                                    className='btn btn-success'
                                    target="_blank"
                                    rel="noreferrer">Look at my GitHub</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        );
    }
}

export default Portfolio;
