import { makeAutoObservable } from "mobx";

class CounterStore {
  counter: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment = (value: number) => {
    this.counter += value;
  };

  decrement = (value: number) => {
    this.counter -= value;
  };
}

export default new CounterStore();