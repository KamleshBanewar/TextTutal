import React from 'react'

function Alert(props) {
    return (
        <div>
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                {/* Hear The Props Are Pass  */}
                <strong></strong>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
    )
}

export default Alert
