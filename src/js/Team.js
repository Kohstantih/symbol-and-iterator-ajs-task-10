export default class Team {
  constructor(args) {
    this.length = args.length;
    for (let i = 0; i < this.length; i += 1) {
      this[i] = args[i];
    }
  }

  [Symbol.iterator]() {
    return {
      current: 0,
      last: this.length,
      next() {
        if (this.current < this.last) {
          const value = this.current;
          this.current += 1;
          return { done: false, value };
        }
        return { done: true };
      },
    };
  }
}
