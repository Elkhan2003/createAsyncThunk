import React, { useEffect, useState } from "react";
import scss from "./TodoItem.module.scss";
import { useAppDispatch, useAppSelector } from "../../../redux/store.ts";
import {
  deleteReq,
  editReq,
  getReq,
} from "../../../redux/features/TodoSlice.ts";

const TodoItem = React.memo(() => {
  const [edit, setEdit] = useState<number | null>(null);
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const { todo } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const deleteFunc = (_id: number) => {
    dispatch(deleteReq(_id));
  };

  const Update = (_id: number) => {
    const newData = {
      title,
      img,
    };
    dispatch(editReq({ _id, newData }));
    setEdit(null);
  };

  const editFunc = (item: TodoData) => {
    setTitle(item.title);
    setImg(item.img);
    setEdit(item._id!);
  };

  useEffect(() => {
    dispatch(getReq());
  }, [dispatch]);

  return (
    <section className={scss.todo}>
      {todo.map((item) => (
        <div className={scss.card}>
          {edit === item._id ? (
            <>
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
              <button onClick={() => Update(item._id!)}>save</button>
            </>
          ) : (
            <>
              <h1>{item.title}</h1>
              <img src={item.img} alt="" />
              <div className={scss.buttons}>
                <button
                  className={scss.delete}
                  onClick={() => deleteFunc(item._id!)}
                >
                  delete
                </button>
                <button
                  className={scss.edit}
                  onClick={() => {
                    editFunc(item);
                    setEdit(item._id!);
                  }}
                >
                  edit
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </section>
  );
});

export default TodoItem;
