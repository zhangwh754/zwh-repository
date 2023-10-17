## 指南

### 安装
```bash
npm i @djdg626/components_test
```

### 全局安装

```typescript
import { createApp } from "vue";
import zwhComponents from "@djdg626/components_test";
import App from "./App.vue";

const app = createApp(App);

app.use(zwhComponents);
```

### 局部安装

```typescript
import { createApp } from "vue";
import { Button } from "@zwh/components";
import App from "./App.vue";

const app = createApp(App);

app.use(Button);
```

