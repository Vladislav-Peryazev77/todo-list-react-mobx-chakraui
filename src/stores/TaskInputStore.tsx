import { makeAutoObservable } from "mobx";

class TaskInputStore {
  taskInputValue = "";

  constructor() {
    makeAutoObservable(this);
  }

  handleInputValueChange = (value: string) => {
    this.taskInputValue = value;
  };

  // handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log(this.taskInputValue);
  //   this.taskInputValue = "";
  // };
}

export default new TaskInputStore();
