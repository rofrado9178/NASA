import { BiLike, BiDislike } from "react-icons/bi";
import { useState } from "react";
const Button = () => {
  const [like, setLike] = useState();
  const [dislike, setDisLike] = useState();

  return (
    <aside>
      <button
        className="button"
        onClick={() =>
          !like ? (setLike(true), setDisLike(false)) : setLike(false)
        }
      >
        <BiLike className={!like ? "like" : "fill"} />
      </button>
      <button
        className="button"
        onClick={() =>
          !dislike ? (setDisLike(true), setLike(false)) : setDisLike(false)
        }
      >
        <BiDislike className={!dislike ? "dislike" : "fill"} />
      </button>
    </aside>
  );
};

export default Button;
