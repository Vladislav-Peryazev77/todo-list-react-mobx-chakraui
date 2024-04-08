import { makeAutoObservable } from "mobx";

class TaskInputStore {
  taskInputValue = "";

  constructor() {
    makeAutoObservable(this);
  }

  handleInputValueChange = (value: string) => {
    this.taskInputValue = value;
  };
}

export default new TaskInputStore();
