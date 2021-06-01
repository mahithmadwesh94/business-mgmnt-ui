import React from 'react';
import './hero.styles.css'
import { ReactComponent as HeroLogo } from '../../aseets/undraw_pie_chart_6efe.svg'
import { ReactComponent as AvastLogo } from '../../aseets/avast-software-logo-2016.svg'
import { ReactComponent as BuzzFeed } from '../../aseets/buzzfeed.svg'
import { ReactComponent as Booking } from '../../aseets/bookingcom.svg'
import { ReactComponent as Expedia } from '../../aseets/expedia.svg'
import { ReactComponent as Discord } from '../../aseets/discord.svg'
import { AiOutlineInstagram as Insta } from 'react-icons/ai'
import { FaFacebookF as Fb, FaGitSquare as Git } from 'react-icons/fa'

const Hero = () => {
    return (
        <div className="container hero-div mt-5 pt-5 mb-5 pb-5" id="about">
            <div className="row  pb-0 pe-lg-0  align-items-center rounded-3 ">
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h1 className="display-4 fw-bold lh-1 hero-heading">Business Management</h1>
                    <p className="lead pt-2">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-2 mb-4 mb-lg-3 ">
                        <button type="button" className="btn btn-light btn-lg px-4 me-md-2 fw-bold">Join Us</button>

                    </div>
                </div>
                <div className="col-lg-4 offset-lg-1 p-0">
                    <HeroLogo className="img-fluid" />
                </div>

                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <span className="ps-3" ><Insta className="social-links" /></span>
                    <span className="ps-3" ><Fb className="social-links" /></span>
                    <span className="ps-3" ><Git className="social-links" /></span>
                </div>


                <div className=" d-flex justify-content-between pt-5">
                    <AvastLogo className="customer-logo" />
                    <BuzzFeed className="customer-logo" />
                    <Booking className="customer-logo" />
                    <Expedia className="customer-logo" />
                    <Discord className="customer-logo" />
                </div>
            </div>
        </div>
    )
}

export default Hero;