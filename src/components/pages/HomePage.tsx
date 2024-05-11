import { FC } from "react";
import TodoAdd from "./homeSections/TodoAdd.tsx";
import TodoItem from "./homeSections/TodoItem.tsx";

const HomePage: FC = () => {
  return (
    <>
      <TodoAdd />
      <TodoItem />
    </>
  );
};
export default HomePage;
