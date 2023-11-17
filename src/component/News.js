import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
<h2>React-News</h2>
  <div className="row">
    <div className="col-md-4">
        <Newsitem title="mytitle" description="mydesc" imageUrl="https://variety.com/wp-content/uploads/2023/11/PhoenixKirby.jpg?w=1000&h=563&crop=1"/>
        </div>
        <div className="col-md-4">
        <Newsitem title="mytitle" description="mydesc"/>
        </div>
        <div className="col-md-4">
        <Newsitem title="mytitle" description="mydesc"/>
        </div>
        
       
        </div>
      </div>

    )
  }
}

export default News
