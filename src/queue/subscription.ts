export class Subcription<T> {
  private eventName: string;
  private fn: (event: T) => void;

  constructor(eventName: string, fn: (event: T) => void) {
    this.eventName = eventName;
    this.fn = fn;
  }

  public unSubscribe() {
    document.body.removeEventListener(this.eventName, this.fn as any);
  }
}
