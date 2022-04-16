const Card = (props) => {
  const { earth_date, img_src, camera } = props;
  return (
    <article id="card">
      <img src={img_src} alt="" className="image" />
      <aside className="container">
        <h1>{camera.full_name}</h1>
        <p>{earth_date}</p>
      </aside>
    </article>
  );
};

export default Card;
