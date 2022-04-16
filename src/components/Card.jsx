const Card = (props) => {
  const { earth_date, img_src, camera } = props;
  return (
    <article id="card">
      <h1>{camera.full_name}</h1>
      <img src={img_src} alt="" class="image" />
      <p>{earth_date}</p>
    </article>
  );
};

export default Card;
