/*
 * @LastEditors: shenjilin
 * @Description: ...
 * @Date: 2023-02-28 19:03:15
 * @LastEditTime: 2023-02-28 19:03:31
 * @Author: shenjilin
 */
import { ExtractPropTypes } from 'vue'

export const fooProps = {
  msg: {
    type: String,
    required: false,
    default: ''
  }
}

export type FooProps = ExtractPropTypes<typeof fooProps>
