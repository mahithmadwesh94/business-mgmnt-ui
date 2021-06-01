import React, { useEffect } from 'react';
import './features.styles.css';
import { BsCloudDownload as Download, BsArrowRight as RightArrow } from 'react-icons/bs'
import { BiCheckShield as Shield, BiBarChartAlt2 as UserMonitoring } from 'react-icons/bi';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Features = () => {
    const { ref, inView } = useInView({
        threshold: 1
    });

    const animate = useAnimation()

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
        console.log('inView=', inView)
    }, [inView])
    return (
        <section ref={ref} className="container mt-5 pt-5" id="features">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 pb-3">
                    <h1 className="text-center hero-div">Features</h1>
                    <div className="text-center hero-div ps-5 pe-5 text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' when an unknown printer took a galley of type and scrambled it to make a type specimen book </div>
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
                    </div>
                </motion.div>
            </div>

        </section>
    )
}

export default Features;