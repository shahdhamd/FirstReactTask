import React, { Component } from 'react'
import PeopleCard from '../PeopleCard/peopleCard'
import './people.css'
import img1 from '../../img/10002.jpg'
import img2 from '../../img/10003.jpg'
import img3 from '../../img/10004.jpg'
export default class People extends Component {
    data=[
        {id:'1',image:img1,name:"Margaret E.",des:'"This is fantastic! Thanks so much guys!"'},
        {id:'2',image:img2,name:"Fred S.",des:'"Bootstrap is amazing. Ive been using it to create lots of super nice landing pages."'},
        {id:'3',image:img3,name:"Sarah W.",des:'"Thanks so much for making these free resources available to us!"'}

    ]
  render() {
    return (
      <div className='container'>
        <h2 className='text-center py-5'>What people are saying...</h2>
        <div className='row'>
            {this.data.map((elem)=>
                <PeopleCard data={elem} />
            )}

        </div>
      </div>
    )
  }
}
