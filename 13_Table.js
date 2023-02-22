// <!DOCTYPE html>
// <html lang="en">

// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="IE=edge">
//   <meta name="viewport" content="width=2.0, initial-scale=1.0">
//   <title>Testing JavaScript</title>
//   <link rel="stylesheet" href="styles.css">
// </head>
// <body>
//   <div class="container my-4">
//     <table>
//       <caption>Table</caption>
//       <thead>
//         <tr>
//           <th>Month</th>
//           <th>Savings</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>January</td>
//           <td>$100</td>
//         </tr>
//         <tr>
//           <td>February</td>
//           <td>$80</td>
//         </tr>
//       </tbody>
//       <tfoot>
//         <tr>
//           <td>Sum</td>
//           <td>$180</td>
//         </tr>
//       </tfoot>
//     </table><script src="13_Table.js"></script>
//   </div>
// </body>
// </html>

let t = document.body.firstElementChild.firstElementChild
console.log(t);
console.log(t.rows); //Collection of Tr Elements
console.log(t.caption);     //Returns Caption
console.log(t.tHead);       //Returns THead
console.log(t.tFoot);       //Returns TFoot
console.log(t.tBodies);     //Returns TBodies
console.log(t.tHead.firstElementChild.cells);
console.log(t.tHead.firstElementChild.sectionRowIndex);
console.log(t.tHead.firstElementChild.rowIndex);
console.log(t.tFoot.firstElementChild.sectionRowIndex);
console.log(t.tFoot.firstElementChild.rowIndex);
console.log(t.tFoot.firstElementChild.firstElementChild.cellIndex);
console.log(t.tFoot.firstElementChild.lastElementChild.cellIndex);