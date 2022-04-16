import { BiLike, BiDislike } from "react-icons/bi";
import { useState } from "react";
const Button = () => {
  const [like, setLike] = useState(false);
  const [dislike, setDisLike] = useState(false);

  // const changeColor = (){
  //   if(!like) {

  //   }
  // }

  return (
    <aside>
      <button
        className="button"
        onClick={() => (!like ? setLike(true) : setLike(false))}
      >
        <BiLike className={!like ? "like" : "fill"} />
      </button>
      <button
        className="button"
        onClick={() =>
          !like && !dislike ? setDisLike(true) : setDisLike(false)
        }
      >
        <BiDislike className={!like ? "like" : "fill"} />
      </button>
    </aside>
  );
};

export default Button;
