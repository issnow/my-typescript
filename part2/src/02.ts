/*
 * @Author: fucheng
 * @Date: 2021-10-29 19:25:20
 * @LastEditTime: 2021-10-29 19:59:10
 * @LastEditors: fucheng
 * @Description: 
 */

let str:string = 'hello'

function fn(this: Window) {
  console.log(this)
}