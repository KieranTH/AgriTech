import React from 'react';

import ReactTooltip from 'react-tooltip';

class ClusterItem extends React.Component{
  render(){
    if(this.props.imagePath != null)
    {
    return(
      <div data-tip={this.props.clustersName} className="Cluster-Item">
        <ReactTooltip place="top" effect="solid" type="dark" delayHide={200}/>
        <div className="inner-cluster">
          <img className="cluster-image" src={"/Images/temp-image.png"}/>
        </div>
      </div>
    );
    }
    else{
      return(
        <div className="Cluster-Item">
          <h1 className="cluster-title">{this.props.clusterName}</h1>
        </div>
      )
    }
  }

}

export default ClusterItem
