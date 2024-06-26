import React from 'react';

const scrollToTopHere = () => {
    window.scrollTo(0, 0)
}

const scrollTop = () => {
    return ( 
    <div className="d-flex justify-content-end p-md-5 p-0 me-5">
        <a href={scrollToTopHere} onClick={scrollToTopHere} className="btn btn-outline-secondary"><i class="bi bi-arrow-up-short"></i>  Back to Top</a>
    </div>
    )
}

export default scrollTop;