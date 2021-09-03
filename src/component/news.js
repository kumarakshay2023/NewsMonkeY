import React, { Component } from "react";
import Newsiteam from "./Newsiteam";
import './heading.css';
import Spinner from "./spinner";
import PropsTypes from 'prop-types';
export class News extends Component {
      static defaultProps={
        country:'in',
        category:'general'
      }     
      static PropsTypes={
        country:PropsTypes.string,
        category:PropsTypes.string,
      }
     constructor(){
         super();
         console.log("constructor call");
         this.state={
                 articles:[

                 ],
                 page:1,
                 loading:false
               

                 
        }
     }
       async componentDidMount(){
          let Url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&page={this.state.page}&apiKey=4e9e61e01ee9415ebeb41ed321666232`;
          let data=await fetch(Url);
          let Parsedata=await data.json();
          this.setState({articles:Parsedata.articles})
       }
       handleprev=async()=>{
          console.log("previous clicked");
          this.setState({loading:true});
          let Url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&page=${this.state.page-1}&apiKey=4e9e61e01ee9415ebeb41ed321666232`;
          let data=await fetch(Url);
          let Parsedata=await data.json();
          this.setState({page:this.state.page-1,
                articles:Parsedata.articles,
                loading:false
          })
       }
       handlenext=async()=>{
      console.log("next was clicked");
    this.setState({loading:true});
      let Url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&page=${this.state.page+1}&apiKey=4e9e61e01ee9415ebeb41ed321666232`;
      let data=await fetch(Url);
      let Parsedata=await data.json();
      this.setState({page:this.state.page+1,
            articles:Parsedata.articles,
            loading:false
      })

       }
  render() {
    return (
   
      <div className="container my-3 ">
          
        <h1  className="head">News Monkey Top headlines</h1>
       {this.state.loading&& <Spinner />}
        <div className="row">
        {!this.state.loading&&this.state.articles.map((ele)=>{
            return   <div className="col-md-4" key={ele.url}>
            <Newsiteam tittle={ele.title} discription={ele.description} imageurl={ele.urlToImage} newsurl={ele.url}  />
          </div>
        })}
           </div>
         <div className="container d-flex justify-content-between">
         <button disabled={this.state.page<=1} type="button" className="btn btn-dark " onClick={this.handleprev}>&larr; Previous</button>
         <button type="button" className="btn btn-dark" onClick={this.handlenext}>Next &rarr; </button>
         </div>
      </div>
    );
  }
}

export default News;
