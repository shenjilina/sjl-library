/*
 * @LastEditors: shenjilin
 * @Description: ...
 * @Date: 2023-03-08 18:59:27
 * @LastEditTime: 2023-03-08 18:59:36
 * @Author: shenjilin
 */
import mitt from "mitt";
const Mitt = mitt;
export const emitter: mitt.Emitter = new Mitt();

export default emitter;
