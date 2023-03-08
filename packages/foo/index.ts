/*
 * @LastEditors: shenjilin
 * @Description: ...
 * @Date: 2023-02-28 19:02:51
 * @LastEditTime: 2023-03-08 18:15:47
 * @Author: shenjilin
 */
import { App } from "vue";
import Foo from "./src/index.vue";

Foo.install = (app: App) => {
  app.component(Foo.name, Foo);
};

export default Foo;
