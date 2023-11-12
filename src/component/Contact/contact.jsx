import React, { Component } from 'react'
import './contact.css'
export default class Contact extends Component {
    render() {
        return (
            <div className='contact'>
                <div className='container'>
                    <h2 className='text-center py-5 '>Contact Me</h2>
                <form className='w-50 m-auto'>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Full name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingPassword" placeholder="email" />
                        <label htmlFor="floatingPassword">Email number</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingPhone" placeholder="Phone number" />
                        <label htmlFor="floatingPhone">Phone number</label>
                    </div>
                    <div className="form-floating">
                        <textarea type="text" className="form-control"  id="floatingMessage" cols={5} rows={5}/> 
                        <label htmlFor="floatingMessage">Message</label>
                    </div>
                    <button className='btn btn-primary p-2 fs-4 my-3' id='send'>Send</button>

                </form>
                </div>
                
            </div>
        )
    }
}
