import { makeAutoObservable } from "mobx";

class TodoListStore {
  toDoList: { title: string; checked: boolean; id: number }[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setToDoList = (title: string) => {
    const newTask = { title, checked: false, id: Date.now() };
    this.toDoList.push(newTask);
  };
}

export default new TodoListStore();
