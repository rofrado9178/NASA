import Button from "./Button";
const Card = (props) => {
  const { earth_date, img_src, camera, rover } = props;
  return (
    <article id="card">
      <img src={img_src} alt="" className="image" />
      <aside className="container">
        <h1 className="card-title">
          {rover.name + " rover - " + camera.full_name}
        </h1>
        <p className="date">{earth_date}</p>
        <Button />
      </aside>
    </article>
  );
};

export default Card;
