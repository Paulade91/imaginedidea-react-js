function MovieCard({ title, description, image, rating }) {
  const ratingClass =
    rating >= 8
      ? "text-bg-success"
      : rating >= 5
      ? "text-bg-warning"
      : "text-bg-danger";

  const clickTrailer = () => {
    alert("🎬 Trailer coming soon!");
  };

  return (
    <>
      <div className="card" style={{ margin: "20px" }}>
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text"> {description} </p>
          <p className="card-text">
            <button onClick={clickTrailer} className="btn btn-primary">
              Watch Trailer
            </button>{" "}
            <br />
            <span className={`badge rounded-pill ${ratingClass}`}>
              {" "}
              {rating}/10
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
