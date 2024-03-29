import { component$, Host } from "@builder.io/qwik";

// @ts-ignore
import { MyComponent } from "example-lib";

export const App = component$(() => {
  return (
    <Host class="my-app p-20">
      <h1 class="text-3xl mb-2">Counter from library:</h1>
      <MyComponent></MyComponent>
    </Host>
  );
});
