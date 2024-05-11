import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../store/store.ts";
import { getReq, postReq } from "../../../store/features/TodoSlice.ts";
import scss from "./TodoAdd.module.scss";

const TodoAdd = () => {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const dispatch = useAppDispatch();

  const postTodo = () => {
    if (title !== "" || img !== "") {
      const newData = {
        title,
        img,
      };
      dispatch(postReq(newData));
    }
    setImg("");
    setTitle("");
  };

  useEffect(() => {
    dispatch(getReq());
  }, [dispatch]);

  return (
    <section className={scss.Inputs}>
      <div>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
        />
        <input
          value={img}
          onChange={(e) => setImg(e.target.value)}
          type="text"
        />
        <button onClick={postTodo}>add</button>
      </div>
    </section>
  );
};

export default TodoAdd;
