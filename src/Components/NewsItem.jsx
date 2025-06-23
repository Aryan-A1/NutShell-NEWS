const NewsItem = ({ title, description, src, url, author, publishedAt }) => {
  return (
    <div className="card mb-3" style={{ maxWidth: "100%" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img 
            src={src || "https://via.placeholder.com/300x200?text=No+Image"} 
            className="img-fluid rounded-start h-100" 
            alt={title}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text text-muted">
              <small>
                {author && <span>By {author} • </span>}
                {new Date(publishedAt).toLocaleString()}
              </small>
            </p>
            <p className="card-text">{description}</p>
            <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsItem