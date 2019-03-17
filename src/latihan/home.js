import React from 'react'
import './../suport/css/home.css'
import { Jumbotron, Container } from 'reactstrap';
import Employee from './img/employee.png'
import Hires from './img/hires.png'
import Security from './img/security.png'
import Workingspac from './img/workingspace.png'

class Home extends React.Component{
    render(){
        return(
            <div>
                <div className ='container'>
                    <div className='jumbotron'>
                        <h1 className="display-3">PURWADHIKA</h1>
                        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </div>
                    <div>
                        {/* info panel */}
                        <div className="row justify-content-center">
                            <div className="col-10 info-panel">
                                <div className="row">
                                        <div className="col-lg">
                                        <img src={Employee} alt="employee" className="float-left" />
                                        <h4>24 Hours</h4>
                                        <p>Lorem ipsu dolor sit amet</p>
                                    </div>
                                    <div className="col-lg">
                                        <img src={Hires} alt="hires" className="float-left" />
                                        <h4>High-Res</h4>
                                        <p>Lorem ipsu dolor sit amet</p>
                                    </div>
                                        <div className="col-lg">
                                        <img src={Security} alt="security" className="float-left" />
                                        <h4>security</h4>
                                        <p>Lorem ipsu dolor sit amet</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Akhir info panel */}

                        {/* <!-- workingspac --> */}
                        <div className="row workingspac">
                            <div className="col-lg-6">
                                <img src={Workingspac} alt="workingspac" className="img-fluid" />
                            </div>
                            <div className="col-lg-5">
                                <h3>YOU<span> WORK</span> LIKE AT <span>HOME</span> </h3>
                                <p>Bekerja Dengan Suasana Hati Yang Lebih Asik dan mempelajari hal baru setiap hari</p>
                                <a href className="btn btn-primary tombol ">Gallery</a>
                            </div>
                        </div>
                        {/* <!-- Akhir workingspac --> */}

                         {/* Testimonial */}
                        <section className="testimonial">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <h5>Bekerja Dengan Suasana Hati Yang Lebih Asik dan mempelajari hal baru setiap hari</h5>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                            <div className="col-lg-6 justify-content-center d-flex">
                                <figure className="figure">
                                    <img src="img/img1.png" className="figure-img img-fluid rounded-circle" alt="texti 1" />
                                </figure>
                                <figure className="figure">
                                    <img src="img/img2.png" className="figure-img img-fluid rounded-circle utama" alt="texti 2" />
                                    <figcaption className="figure-caption">
                                        <h5>Sunny Ye</h5>
                                        <span>Designer</span>
                                    </figcaption>
                                </figure>
                                    <figure className="figure">
                                        <img src="img/img3.png" className="figure-img img-fluid rounded-circle" alt="texti 1" />
                                </figure>
                            </div>
                            </div>
                        </section>
      {/* Akhir Testimonial */}

                    </div>
                
                </div>
            </div>
        );
    }
};
export default Home


