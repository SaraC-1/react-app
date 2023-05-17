import { useState } from "react";
import Trash from "../components/trash";

type ListItemType = {
  id: number;
  label: string;
  done: boolean;
};

const initialList: ListItemType[] = [
  {
    id: 0,
    label: "Nauci React",
    done: false,
  },
  {
    id: 1,
    label: "Nauci CSS",
    done: false,
  },
];
const Todo = () => {
  const [listItems, setListItems] = useState<ListItemType[]>(initialList);
  const [inputValue, setInputValue] = useState<string>("");
  return (
    <div className="container">
      <h1>ToDo List</h1>
      <div className="todo">
        <div className="todo__header">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="todo__input"
            type="text"
          />
          <button className="todo__btn">Dodaj</button>
        </div>
        <div className="todo__item__wrapper">
          {listItems.map((listItem: ListItemType) => {
            return (
              <div className="todo__item" key={listItem.id}>
                <div className="todo__item__label">{listItem.label}</div>
                <div className="todo__item__remove">
                  <Trash />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todo;
