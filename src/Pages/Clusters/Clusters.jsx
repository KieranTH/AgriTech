import React from 'react';
import ClusterItem from './ClusterItem';
import './Clusters.css';

import Loading from '../Comps/Loading/Loading';

var clusterList = [];

class Clusters extends React.Component{

  constructor(props)
  {
    super(props);
    this.state = {
      clusters: null,
      isLoading: true
    }
  }

  componentWillMount(){
    this.callBackendAPI()
      .then(res => {
        for(var i in res.rows)
        {
          clusterList.push([i, res.rows[i]]);
        }
        this.setState({clusters: res.rows, isLoading: false});
        //console.log(clusterList)

      })
      .catch(err => console.log(err));

  }

  getClusters = clusterList => {
  let content = [];
  for (let idx in clusterList) {
    const item = clusterList[idx];
    content.push(<ClusterItem key={item[1].idclusters} clustersName={item[1].clustersName} imagePath={item[1].clustersIconURL}/>);
  }
  console.log(content);
  return content;
  };

  callBackendAPI = async () => {
    console.log("getting data!");
    const response = await fetch('/clusters');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }

    //console.log(body)
    return body;
  };


  render(){

      return(
        <section id="the-clusters">
          <div className="clusters-container">
            <h1 className="clusters-title">The Clusters Page</h1>
            <div className="clusters-filter">
              <ul className="clusters-filter-list">
                <li className="cluster-filter-item"><a>Agriculture</a></li>
                <li className="cluster-filter-item"><a>R&D</a></li>
                <li className="cluster-filter-item"><a>Livestock</a></li>
                <li className="cluster-filter-item"><a>Supply Chain</a></li>
                <li className="cluster-filter-item"><a>Crops</a></li>
                <li className="cluster-filter-item"><a>IoT</a></li>
                <li className="cluster-filter-item"><a>Drone</a></li>
                <li className="cluster-filter-item"><a>Robotics</a></li>
                <li className="cluster-filter-item"><a>Healthcare</a></li>
              </ul>
            </div>
            <div className="clusters-info">
            {this.state.isLoading && <Loading/>}{!this.state.isLoading &&
              <div className="clusters-grid">

              {this.getClusters(clusterList)}


              </div>}
            </div>
          </div>
        </section>
      );
  }
}

export default Clusters;
