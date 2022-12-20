import { Observable } from "@/queue/observable";

const newClientEventKey = "new-client";

export interface NewClientEvent {
  lastName: string;
  id: number;
}

export const useNewClientEventStream = () => {
  const subscribe = (fn: (newClient: NewClientEvent) => void) => {
    return Observable.from(newClientEventKey, fn);
  };

  return {
    subscribe,
  };
};

export const newClientBroadCast = (newClient: NewClientEvent) => {
  document.body.dispatchEvent(
    new CustomEvent(newClientEventKey, {
      detail: newClient,
    })
  );
};
