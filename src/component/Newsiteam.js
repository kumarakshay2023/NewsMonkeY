import React, { Component } from 'react'

export class Newsiteam extends Component {
    render() {
        let {tittle,discription,imageurl,newsurl}=this.props;
        return (
            
            <div>
                 <div>
              <div className="card" style={{width: "18rem"}}>
     <img src={!imageurl?"https://picsum.photos/id/237/200/300":imageurl} className="card-img-top" alt="..."/>
     <div className="card-body">
     <h5 className="card-title">{tittle}</h5>
     <p className="card-text">{discription}</p>
     <a href={newsurl} className="btn btn-sm btn-dark">Read More</a>
     </div>
    </div>  
            </div>
            </div>
        )
    }
}

export default Newsiteam;
