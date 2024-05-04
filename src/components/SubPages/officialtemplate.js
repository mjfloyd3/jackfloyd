import React from 'react';
import './officialtemplate.css';
import OfficialTemplateMockupImg from '../../assets/images/official-template-mockup.png';
import OfficialTemplateWebEditImg from '../../assets/images/official-template-webedit.png';
import OfficialTemplateMobile from '../../assets/images/product-template-mobile.png';
import ProductCallouts from '../../assets/images/product-callouts.png';
import OfficialTemplateGuide from '../../assets/images/official-template-guide.png';

const scrollToTop = () => {
    window.scrollTo(0, 0)
}

const ProductCommTemplate = () => {
    return (
        <section id="Communications">  
            <div className="container templateContent">     
                <div className="row">
                    <div className="col-lg-8 py-5">
                        <h1 className="fw-normal fs-4">BlueMatrix</h1>
                        <h2 className="fw-bold mb-4">Official Product Communication Template</h2>
                        <div className="d-flex justify-content-start">
                            <div className="pe-md-5 pe-3">
                                <p className="m-0">My Role</p>
                                <p className="m-0 fw-light">Design & Development Lead</p>
                            </div>
                            <div className="pe-md-5 pe-3">
                                <p className="m-0">The Team</p>
                                <p className="m-0 fw-light">2x Sales</p>
                                <p className="m-0 fw-light">3x Product</p>
                                <p className="m-0 fw-light">2x Customer Success</p>
                                <p className="m-0 fw-light">1x Marketing</p>
                                <p className="m-0 fw-light">1x Designer/Developer</p>
                            </div>
                            <div>
                                <p className="m-0">Year</p>
                                <p className="m-0 fw-light">2021</p>
                            </div>
                        </div>
                        <p className="fw-light fs-6 mt-4">The goal here was to create a multi-formatted template (Web, Email, PDF) for Product and Support teams to write and share key information more effectively with clients.</p>
                        <p className="fw-light fs-6">I was tasked with designing and developing a template within our system for the goal of unifying the way we present information to clients about release notes and product enhancements. This template would be used by many teams including Sales, Marketing, Product and Support, so it was important that we factored in several use-cases while maintaining a singular aesthetic so that there was no mistaking the reliability of our communication methods.</p>
                        <p className="fw-light mt-5">
                        The result of this project has become essential for my colleagues, who now rely on it to compile product release notes, guides, and other key materials. By standardizing how we present information to our clients, we emphasize the importance of our partnership and set the stage for shared success.
                        </p>
                    </div>
                </div>
            </div>
            <div class="bm-highlights-opt mb-5">
                <div class="container">
                <div className="row">
                <div className="col-lg-12">
                    <div className="text-center">
                        <div className="pt-5 mx-5">
                            <img src={OfficialTemplateWebEditImg} width="600"/>
                            <p className="fs-6 text-muted fw-light mt-3">Report content editing page where author enters information and a PDF and HTML preview get generated and sent out to subscribers.</p>
                        </div>
                        <div className="pt-5">
                            <img className="me-3 mb-lg-0 mb-4" src={OfficialTemplateMobile} width="200"/>
                            <img src={OfficialTemplateMockupImg} width="650"/>
                            <p className="fs-6 text-muted fw-light mt-3">
                                Mobile and Web outputs featuring a ToC generated by author-defined Component Titles, H1's, and H2's.
                            </p>
                        </div>
                        <div className="py-5">
                            <img className="me-3 mb-lg-0 mb-4" src={ProductCallouts} width="320"/>
                            <img src={OfficialTemplateGuide} width="650" height="auto"/>
                            <p className="fs-6 text-muted fw-light mt-3">
                                Concept I created for an author to “callout” a particular part of a note to emphasize something.
                            </p>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default ProductCommTemplate;