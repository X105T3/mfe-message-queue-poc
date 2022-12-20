export function Broadcast(eventName: string, event: any) {
  document.body.dispatchEvent(
    new CustomEvent(eventName, {
      detail: event,
    })
  );
}
