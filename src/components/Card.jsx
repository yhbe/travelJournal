export default function Card(prop) {
  return (
    <>
      <div className="card--container section">
        <img src={prop.data.imageUrl} className="card--image" />
        <div className="card--text-container">
          <i className="fa-solid fa-location-pin"></i>
          &nbsp;
          <span className="spaced-out">{prop.data.location}</span> &nbsp;
          <a href={prop.data.googleMapsUrl} className="card--gray">
            View on Google Maps
          </a>
          <h1>{prop.data.title}</h1>
          <div className="card--description-container">
            <h3>
              {prop.data.startDate} - {prop.data.endDate}
            </h3>
            <p className="card--text-description">{prop.data.description}</p>
          </div>
        </div>
      </div>
      {prop.data.key === 3 ? "" : <hr className="card--hr"></hr>}
    </>
  );
}
