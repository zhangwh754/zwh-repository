import { createApp } from "vue";
// import { Button } from "@zwh/components";
import zwhComponents from "@zwh/components";
import App from "./App.vue";

const app = createApp(App);

// app.use(Button);
app.use(zwhComponents);

app.mount("#app");
