import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner.js';
import PropTypes from 'prop-types'
export class News extends Component {
  static defaultProps={
    country:'in',
    pagesize:18,
    category:"general",
  }
  static propTypes ={
    country:PropTypes.string,
    pagesize:PropTypes.number,
    category:PropTypes.string,
  } 
    constructor(){
        super();
        this.state={
          articles:[],
          loading:false,
          page:1

        }
    }
   async componentDidMount(){
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7717a6e0d5d54ca6a392fa3d28d0a592&pageSize=${this.props.pagesize}`;
      let data= await fetch(url);
      let parseData= await data.json();
     this.setState({articles:parseData.articles,totalResults:parseData.totalResults})
    }
    handelprevious= async()=>{
        this.setState({loading:true})
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7717a6e0d5d54ca6a392fa3d28d0a592&page=${this.state.page - 1}&pageSize=${this.props.pagesize}`;
        let data=await fetch(url);
        let parseData=await data.json();
        this.setState({loading:false})

       this.setState({
       
           page:this.state.page - 1,
           articles: parseData.articles

        })
      
    }
     handelnext= async()=>{
        if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pagesize))){

        this.setState({loading:true})
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7717a6e0d5d54ca6a392fa3d28d0a592&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`;
        let data=await fetch(url);
        let parseData=await data.json();
        this.setState({loading:false})
        this.setState({
       
        page:this.state.page + 1,
        articles: parseData.articles
    })
}

    }
   
  render() {
    return (
      <div className='container my-3'>
        <h2 className='text-center'>News-Monkey Top HeadLines</h2>
        {this.state.loading && < Spinner />}
        <div className='row'>
            {!this.state.loading && this.state.articles.map((items)=>{
                 return(
                   
                    <div className='col-md-4' key={items.url}>
                <NewsItem title={items.title?items.title.slice(0,30):""} description={items.description?items.description.slice(0,40):""} imageUrl={items.urlToImage} newUrl={items.url} author={items.author} date={items.publishedAt}/>
                    </div>
                 )
            })}
                </div>
                <div className='container d-flex justify-content-between'>
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handelprevious}>&larr;Previous</button>
                <button disabled={ this.state.page ===4} type="button" className="btn btn-dark" onClick={this.handelnext}>Next&rarr;</button>
                </div>
      
      </div>
    )
  }
}

export default News