import { makeAutoObservable } from "mobx";

interface ToDoItem {
  title: string;
  completed: boolean;
  id: number;
}

class TodoListStore {
  toDoList: { title: string; completed: boolean; id: number }[] = [];

  constructor() {
    makeAutoObservable(this);
    if (this.toDoList.length === 0) {
      this.handleLoadTasksFromLocalStorage();
    }
  }

  handleAddTask = (title: string) => {
    const newTask = { title, completed: false, id: Date.now() };
    this.toDoList.push(newTask);
    this.handleUpdateLocalStorage();
  };

  setToDoList = (list: ToDoItem[]) => {
    this.toDoList = list;
    this.handleUpdateLocalStorage();
  };

  setTaskStatus = (index: number) => {
    this.toDoList[index].completed = !this.toDoList[index].completed;
    this.handleUpdateLocalStorage();
  };

  handleUpdateLocalStorage = () => {
    localStorage.setItem("tasks", JSON.stringify(this.toDoList));
  };

  handleLoadTasksFromLocalStorage = () => {
    const tasks = localStorage.getItem("tasks");
    if (tasks) {
      this.toDoList = JSON.parse(tasks);
    }
  };
}

export default new TodoListStore();
