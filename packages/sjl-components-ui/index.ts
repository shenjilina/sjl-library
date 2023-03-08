import { App } from "vue";
import Foo from "@sjl-library/foo";
import '../scss/index.scss'

const components = [Foo];

// 全局动态添加组件
const install = (app: App): void => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export default {
  install,
};
