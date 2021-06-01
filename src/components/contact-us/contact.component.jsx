import React from 'react';
import '../features/features.styles.css';
import { ReactComponent as Contact } from '../../aseets/undraw_contact_us_15o2.svg'

const ContactUs = () => {
    return (
        <section className="container pt-5 mt-5" id="contact">
            <div className="row">

                <div className="col-12 col-sm-12 col-md-12 col-lg-12 ">
                    <h1 className="text-center hero-div">Contact Us</h1>
                </div>


                <div className="col-12 col-sm-12 col-md-12 col-lg-12 pb-3">

                    <div className="row">
                        <div className="col-6 col-sm-6 col-md-6 col-lg-6 pb-3 pt-5 mt-5">
                            <form>

                                <div className="form-group">

                                    <input type="text" className="form-control mb-2 w-75" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name" />

                                </div>


                                <div className="form-group">

                                    <input type="text" className="form-control mb-2 w-75" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Last Name" />
                                </div>


                                <div className="form-group">

                                    <input type="email" className="form-control w-75" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    <small id="emailHelp" className="form-text text-muted mb-2">We'll never share your email with anyone else.</small>
                                </div>

                                <div className="form-group">

                                    <textarea className="form-control mb-2 w-75" placeholder="Message..." id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary" onClick={(event) => event.preventDefault()}>Submit</button>
                            </form>
                        </div>
                        <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                            <Contact style={{ with: '100%', height: '50%' }} />

                        </div>



                    </div>
                </div>
            </div>


        </section>
    )
}

export default ContactUs;