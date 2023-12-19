import React, { Component } from 'react'
import "./newsitem.css" 
export class NewsItem extends Component {
    
  render() {
   let {title,description,imageUrl,newUrl,date,author}=this.props;
     
    return (
      <div className='my-3'> 
       <div className="card text-center">
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title} <span class="badge rounded-pill text-bg-info">New</span></h5>
                <p className="card-text">{description}...</p>
                <p className='card-date'>Published AT:{new Date(date).toGMTString()} by {author===null?"unknown":author}</p>
                <a href={newUrl} className="btn btn-sm btn-dark">Read More</a>
            </div>
         </div>
      </div>
    )
  }
}

export default NewsItem