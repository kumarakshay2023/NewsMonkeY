import React, { Component } from "react";
import Newsiteam from "./Newsiteam";

export class News extends Component {
           
     constructor(){
         super();
         console.log("constructor call");
         this.state={
                 articles:[

                 ]

                 
        }
     }
       async componentDidMount(){
          let Url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4e9e61e01ee9415ebeb41ed321666232";
          let data=await fetch(Url);
          let Parsedata=await data.json();
          this.setState({articles:Parsedata.articles})
       }
  render() {
    return (
      <div className="container my-3">
        <h1>News Monkey Top headlines</h1>
      
        <div className="row">
        {this.state.articles.map((ele)=>{
            return   <div className="col-md-4" key={ele.url}>
            <Newsiteam tittle={ele.title} discription={ele.description} imageurl={ele.urlToImage} newsurl={ele.url}  />
          </div>
        })}
           </div>
      </div>
    );
  }
}

export default News;
