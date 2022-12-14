import React from 'react'

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date, source } = props;

    return (
        <div className="my-3">
            <div className="card">
                <img src={imageUrl ? imageUrl : "https://images.news18.com/ibnlive/uploads/2022/05/hypertension1-165272269716x9.jpg"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger" style={{ zIndex: '1' }}>{source}</span>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem