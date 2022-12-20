import { Subcription } from "./subscription";

export class Observable {
  public static from<Type>(eventName: string, fn: (event: Type) => void) {
    const listenFunction = (customEvent: CustomEvent) => {
      console.log("event", customEvent);
      fn(customEvent.detail as Type);
    };

    document.body.addEventListener(eventName, listenFunction as any);

    return new Subcription(eventName, listenFunction);
  }
}
