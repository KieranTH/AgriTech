import React from 'react';

import './News.css';

class News extends React.Component{

  constructor(props)
  {
    super(props);
    this.state = {
      posts: null,
      isLoading: true
    }
  }

  componentWillMount(){
    this.fetchData()

  }

  fetchData(){
    this.callBackendAPI()
      .then(res => {
        this.setState({posts: res.clusters, isLoading: false})
      })
      .catch(err => console.log(err));
  }
  callBackendAPI = async () => {
    console.log("getting data!");
    const response = await fetch('/get-news');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }

    console.log(body)
    return body;
  };

  updateToAPI = async () => {
    console.log("Creating post...");
    const response = await fetch('/add-news');
    if(response.status !== 200)
    {
      throw Error(response)
    }

    console.log(response)
    return response;
  }


  render(){
    return(
      <section id="news">
      <div className="news-container">
        <h1 className="news-title">News and Events</h1>
        <div className="news-info">
          Test
        </div>
      </div>
      </section>
    );
  }
}

export default News;
