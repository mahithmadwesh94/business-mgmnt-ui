import React from 'react';
import { ReactComponent as Solution } from '../../aseets/undraw_All_the_data_re_hh4w.svg'
import { ReactComponent as Solution1 } from '../../aseets/undraw_environment_iaus.svg'
import { ReactComponent as Solution2 } from '../../aseets/undraw_online_friends_x73e.svg'

const Products = () => {
    return (
        <section className="container mt-5 pt-5 mb-5 pb-5" id="product">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 pb-3">
                    <h1 className="text-center hero-div">Product</h1>
                    <div className="text-center hero-div ps-5 pe-5 text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' when an unknown printer took a galley of type and scrambled it to make a type specimen book </div>
                </div>

                <div className="col-12 col-sm-12 col-md-12 col-lg-12 mt-5">

                    <div className="row">
                        <div className="col-6 col-sm-6 col-md-6 col-lg-6 pt-5 ">
                            <h1 className="hero-div text-end">Best Solution for your business </h1>
                            <p className="text-end hero-div">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry' when an unknown printer took a galley of type and scrambled it to make a type specimen book </p>
                        </div>
                        <div className="col-6 col-sm-6 col-md-6 col-lg-6 d-flex mx-auto  ">
                            <Solution style={{ height: '100%', width: '100%' }} />
                            <Solution1 style={{ height: '100%', width: '100%' }} />
                            <Solution2 style={{ height: '100%', width: '100%' }} />
                        </div>


                    </div>
                </div>


            </div>

        </section>
    )
}

export default Products;