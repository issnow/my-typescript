/*
 * @Author: fucheng
 * @Date: 2021-10-22 19:02:29
 * @LastEditTime: 2021-10-22 19:14:06
 * @LastEditors: fucheng
 * @Description: interface
 */
// function printLabel(labelledObj: { label: string }) {
//   console.log(labelledObj.label);
// }

// let myObj = { size: 10, label: "Size 10 Object" };
// printLabel(myObj);

// *1规定大写

// interface LabelledObj {
//   label: string
// }

// function printLabel(labelledObj: LabelledObj) {
//   console.log(labelledObj.label)
// }

// let myObj = { size: 10, label: "Size 10 Object" };
// printLabel(myObj);

// *2可选属性
// interface SquareConfig {
//   color?: string;
//   width?: number;
// }

// function createSquare(config: SquareConfig): {color: string; area: number} {
//   let newSquare = {color: "white", area: 100};
//   if (config.color) {
//     newSquare.color = config.color;
//   }
//   if (config.width) {
//     newSquare.area = config.width * config.width;
//   }
//   return newSquare;
// }

// let mySquare = createSquare({color: "black"});
// console.log(mySquare)

// *3只读属性
interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error! Cannot assign to 'x' because it is a read-only property.