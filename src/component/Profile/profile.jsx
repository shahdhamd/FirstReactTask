import React, { Component } from 'react'
import './profile.css'
import card1 from '../../img/1.jpg';
import card2 from '../../img/2.jpg';
import card3 from '../../img/3.jpg';

import Card from '../Card/card';
export default class Profile extends Component {
    data = [
        { id: '11', image: card1, title: 'Fully Responsive', desc: 'This theme will look great on any device, no matter the size!' },
        { id: '22', image: card2, title: 'Bootstrap 5 Ready', desc: 'Featuring the latest build of the new Bootstrap 5 framework! ' },
        { id: '33', image: card3, title: 'Easy to Use', desc: 'Ready to use with your own content, or customize the source files!' },
    ]
    render() {

        return (
            <div className=' profile p-5' id='profile'>
                <h2 className='text-center' style={{'fontSize':'50px'}}>Profile</h2>
                <div className='row container m-auto'>
                    {this.data.map((elem) =>
                        <Card inform={elem} />
                    )}
                </div>
            </div>
        )
    }
}
