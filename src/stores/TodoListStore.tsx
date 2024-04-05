import { makeAutoObservable } from "mobx";

interface ToDoItem {
  title: string;
  completed: boolean;
  id: number;
}

class TodoListStore {
  toDoList: ToDoItem[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setToDoList = (titleOrList: string | ToDoItem[]) => {
    if (typeof titleOrList === "string") {
      // Если передана строка, создаем новую задачу
      const newTask = { title: titleOrList, completed: false, id: Date.now() };
      this.toDoList.push(newTask);
    } else {
      // Если передан массив объектов, обновляем список задач
      this.toDoList = titleOrList;
    }
  };

  setTaskStatus = (foundIndex: number) => {
    this.toDoList[foundIndex].completed = !this.toDoList[foundIndex].completed;
  };
}

export default new TodoListStore();
