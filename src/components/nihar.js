import React from "react";
import { Component } from "react";
import './style.css';
 
function EduConnect() {
    return(
        <div>
            <div className="home-page">
            
            <div className="home-logo d-flex flex-row">
            <img  className="logo" src="https://yuktha.my.canva.site/images/dd9381d45cd85a6439703e73e725bb28.svg"></img>
            <h4>MAKING <br />PARENTHOOD EASIER</h4>
            </div>
            <div className="container home-inside">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h1 className="home-heading">EDUCONNECT <br></br>PARENTS</h1>
                        <p className="home-content">
                        Connecting Parents to their Children's Education - Anytime, Anywhere
                        </p>
                    </div>
                    <div className="col-12 col-md-6">
                        <div >
                            <img className="home-img" src="https://yuktha.my.canva.site/images/698f92631f2d78bc12c38a68d05372a8.png"></img>
                        </div>
                    </div>
                </div>
                <div className="col-12 home-btn-cont">
                
                <button type="button" onClick={() => document.getElementById('main-page').scrollIntoView({ behavior: 'smooth' })} class="btn btn-warning home-btn">Learn More</button>
            
                </div>
            </div>
            </div>

            <div className="help-page">
              <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                      <h1 className="help-header">
                        How we offer help
                      </h1>
                      <br/>
                      <p className="help-content">
                      Being there for your child in childhood is critical for setting them up for a healthy and successful future.Children need love, attention, and guidance to thrive, and having a supportive parent can provide all of these things. When parents are present and involved in their child's life, children are more likely to feel secure, valued, and loved. This can have a positive impact on their emotional, social, and cognitive development
                      </p>
                      
                      <a href="https://forms.gle/67P4AW9Vurmo6cQJ7"><button type="button" class="btn btn-warning btn-help" >GET IN TOUCH</button>
                      </a>
                     
                    </div>
                    <div className="col-12 col-md-6">
                        <div>
                            <img className="help-img" src="https://yuktha.my.canva.site/images/b55ae8480d415fa0386b99ad4564acef.png"/>
                        </div>
                    </div>
                </div>
              </div>
            </div>

            <div className="main-page" id="main-page">
                <div className="main-header d-flex flex-row justify-content-between">
                <h1 className="">Our Main <br/> Practices </h1>
                <div className="main-logo d-flex flex-row pr-md-5">
                 <img  className="logo" src="https://yuktha.my.canva.site/images/8e6fc82bae3be3af2319ccecc6d779b9.svg"></img>
                 <h1 className="main-logoname"> EduConnect<br/>Parents</h1>
                </div>
                 </div>
                <div className="container main-content">
                    <div className="row">
                    <div className="main-card-1 col-12 col-md-4">
                        <h1 className="main-card-1-h1">General Idea</h1>
                        <p className="main-card-1-p">It provides a comprehensive platform for parents and students to stay connected and engaged with their education.</p>
                    </div>
                    <div className="main-card-2 col-12 col-md-4">
                        <h1 className="main-card-1-h1">Speciality</h1>
                        <p className="main-card-1-p">Unlike other educational apps that may focus on a single aspect of education, such as homework or grades, EduConnect provides a range of services to support academic success.</p>
                    </div>
                    <div className="main-card-3 col-12 col-md-4">
                        <h1 className="main-card-1-h1">Objective</h1>
                        <p className="main-card-1-p">The primary objectives of EduConnect are to improve student academic performance, increase parent involvement and engagement, and enhance communication and collaboration between students, parents, and teachers.</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="services">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <img src="https://yuktha.my.canva.site/images/459728c46507f3422cb72091cca3b25e.jpg" className="ser-main-img"/>
                        </div>
                        <div className="col-12 col-md-6">
                            <h1>Our Services</h1>
                            <p className="ser-tagline">The EduConnect Parents app can help improve the relationship between parents and their children in several ways.</p>
                            <div className="service-in d-flex flex-row">
                                <img src="	https://yuktha.my.canva.site/images/4b0c07b2790cc3dad2bc9f1d7dc7c336.svg" className="ser-small-img" />
                                <a href="https://codenihar.github.io/fireone/"><h1 className="ser">Parental Advice</h1></a>
                            </div>
                            <div className="service-in  d-flex flex-row">
                            <img src="	https://yuktha.my.canva.site/images/4b0c07b2790cc3dad2bc9f1d7dc7c336.svg" className="ser-small-img" />
                                <a href="https://montessori-ami.org/about-montessori/montessori-programmes"><h1 className="ser">Montessori Education</h1></a>
                            </div>
                            <div className="service-in d-flex flex-row">
                            <img src="	https://yuktha.my.canva.site/images/4b0c07b2790cc3dad2bc9f1d7dc7c336.svg" className="ser-small-img" />
                               <a href="https://www.readingrockets.org/books/booksbytheme"> <h1 className="ser">Themed Books</h1></a>
                            </div>
                            <div className="service-in d-flex flex-row">
                            <img src="	https://yuktha.my.canva.site/images/4b0c07b2790cc3dad2bc9f1d7dc7c336.svg" className="ser-small-img" />
                             <a href="https://pbskids.org/"> <h1 className="ser">Hands On-Learning</h1></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="feedback d-flex flex-column justify-content-center">
                <div className="feedback-content">
                <div className="feedback-header mb-5">
                    <h1>Feedback from Clients</h1>
                    <p>Why you should trust us?</p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4">
                        <div className="feed-card m-3">
                        <p>
                        I just wanted to say how grateful I am for the EduConnect Parents app.  This app has helped me feel more involved and informed about my child's education, and I would highly recommend it to other parents.
                         <br /> -abc
                        </p>
                        </div>
                        </div>
                        <div className="col-12 col-md-4">
                        <div className="feed-card m-3">
                        <p>
                        I just wanted to say how grateful I am for the EduConnect Parents app.  This app has helped me feel more involved and informed about my child's education, and I would highly recommend it to other parents.
                         <br /> -abc
                        </p>
                        </div>
                        </div>
                        <div className="col-12 col-md-4">
                        <div className="feed-card m-3">
                        <p>
                        I just wanted to say how grateful I am for the EduConnect Parents app.  This app has helped me feel more involved and informed about my child's education, and I would highly recommend it to other parents.
                         <br /> -abc
                        </p>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
              </div>
            

            <div className="contact">
                <h1 className="contact-header">Contact Us</h1><br />
                <div className=" d-flex flex-row">
                    <img className="logo-about" src="https://yuktha.my.canva.site/images/cd8bc7ff33917811bdc17a44e491bccb.svg" />
                    <h1 className="about">Nihar</h1>
                </div>
                <div className=" d-flex flex-row">
                    <img className="logo-about" src="https://yuktha.my.canva.site/images/5ffff2db03a11ae230b2e4b0b919e9ce.svg" />
                    <h1 className="about">83281911xx</h1>
                </div>
                <div className=" d-flex flex-row">
                    <img className="logo-about" src="https://yuktha.my.canva.site/images/e6098c2fcea9d538f00e55bf8e2c81b0.svg" />
                    <h1 className="about">nihar@gmail.com</h1>
                </div>
                <h1 className="contact-header">Office hours</h1><br />
                <h1 className="day">Monday to Friday</h1>
                <p className="time">9:00 am to 6:00 pm</p>
                <h1 className="day">Saturday</h1>
                <p className="time">9:00 am to 12:00 pm</p>
                <h1 className="day">Closed on Sundays</h1><br />

                <div className="follow-cont mb-5 mt-5 d-flex flex-row justify-content-between">
                    <div className="follow-h1-cont d-flex flex-column">
                        <div className="d-flex flex-row">
                        <h1><i><b>Follow us online</b></i></h1>
                        <img src="	https://yuktha.my.canva.site/images/7038a66e58c92331002904e5b5eda41f.svg" className="follow-logo" />
                        <img src="	https://yuktha.my.canva.site/images/3078497d8e619b5217a7c8258918230b.svg" className="follow-logo" />
                        <img src="	https://yuktha.my.canva.site/images/27ad4db0eb70f0e9c07bab0ea9b68e60.svg" className="follow-logo" />
                        </div>
                        <p className="follow-p">This is an accessible workplace. Persons with<br /> disabilities are welcome to apply.</p>
                    </div>
                    <div className="main-logo d-flex flex-row pr-md-5">
                     <img  className="logo " src="https://yuktha.my.canva.site/images/8e6fc82bae3be3af2319ccecc6d779b9.svg"></img>
                      <h1 className="contact-logoname  "> <i>EduConnect<br/>Parents</i></h1>
                    </div>
                </div> 

            </div>
            </div>
            

        
    )
}

export default EduConnect