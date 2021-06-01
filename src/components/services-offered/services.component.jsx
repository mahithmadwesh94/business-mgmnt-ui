import React, { useEffect } from 'react';
import './services.style.css'
import '../features/features.styles.css';
import { BsCloudDownload as Download, BsArrowRight as RightArrow } from 'react-icons/bs'
import { BiCheckShield as Shield, BiBarChartAlt2 as UserMonitoring } from 'react-icons/bi';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Services = () => {

    const { ref, inView } = useInView({
        threshold: 0.85
    })

    const animate = useAnimation();

    useEffect(() => {
        if (inView) {
            animate.start({
                scale: 1,
                transition: {
                    type: 'spring', duration: 1, bounce: 0.3
                }
            })
        }
        if (!inView) {
            animate.start({
                scale: 0
            })
        }
    }, [inView])


    return (
        <section ref={ref} className="container mt-5 mb-5 pt-5 pb-5" id="services">
            <div className="row">

                <div className="col-12 col-sm-12 col-md-12 col-lg-12 pb-3 mt-5">
                    <h1 className="text-center hero-div">Services</h1>
                    <p className="text-center hero-div">Our Services</p>
                    <h1 className="text-center hero-div ps-5 pe-5 text-center">We provide various Kinds of Services for you </h1>
                </div>


                <motion.div animate={animate} className="col-12 col-sm-8 col-md-8 col-lg-8 mx-auto">

                    <div className="row features-card">

                        <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                            <div className="card" >
                                <Download className="feature-icon" style={{ backgroundColor: 'red' }} />
                                <div className="card-body">
                                    <h5 className="card-title">Business Consulting</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div href="#" className="learn-more">Learn More <RightArrow /></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                            <div className="card" >
                                <Shield className="feature-icon" style={{ backgroundColor: 'green' }} />
                                <div className="card-body">
                                    <h5 className="card-title">Market Analysis</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div href="#" className="learn-more">Learn More <RightArrow /></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-12 col-md-6 col-lg-4 ">
                            <div className="card" >
                                <UserMonitoring className="feature-icon" style={{ backgroundColor: 'blue' }} />
                                <div className="card-body">
                                    <h5 className="card-title">User Monitoring</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <span href="#" className="learn-more">Learn More <RightArrow /></span>
                                </div>
                            </div>
                        </div>


                        <div className="col-12 col-sm-12 col-md-6 col-lg-4 ">
                            <div className="card" >
                                <Download className="feature-icon" style={{ backgroundColor: 'blue' }} />
                                <div className="card-body">
                                    <h5 className="card-title">Finance Consulting</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <span href="#" className="learn-more">Learn More <RightArrow /></span>
                                </div>
                            </div>
                        </div>


                        <div className="col-12 col-sm-12 col-md-6 col-lg-4 ">
                            <div className="card" >
                                <Shield className="feature-icon" style={{ backgroundColor: '#CCCC00' }} />
                                <div className="card-body">
                                    <h5 className="card-title">Custom Satisfaction</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <span href="#" className="learn-more">Learn More <RightArrow /></span>
                                </div>
                            </div>
                        </div>


                        <div className="col-12 col-sm-12 col-md-6 col-lg-4 ">
                            <div className="card" >
                                <UserMonitoring className="feature-icon" style={{ backgroundColor: '#e75480 ' }} />
                                <div className="card-body">
                                    <h5 className="card-title">Plug & Play</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <span href="#" className="learn-more">Learn More <RightArrow /></span>
                                </div>
                            </div>
                        </div>

                    </div>
                </motion.div>






            </div>


        </section>
    )
}

export default Services;