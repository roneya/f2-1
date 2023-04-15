/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  const d = arr.map(e => {
    if (e.profession === "developer") {
      return e;
    }
  }).filter(Boolean);

  console.log(d);
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(e => {
    if (e.profession === "developer") {
      console.log(e);
    }
  });
}

function addData() {
  //Write your code here, just console.log

  const x = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(x);
  console.log(arr[arr.length-1]);


}

function removeAdmin() {
  //Write your code here, just console.log
  const f = arr.filter(e => e.profession !== "admin");
  console.log(f);
}

function concatenateArray() {
  //Write your code here, just console.log


  const n = [
    { id: 4, name: "rohan", age: "25", profession: "artist" },
    { id: 5, name: "rachna", age: "22", profession: "biologist" },
    { id: 6, name: "uday", age: "20", profession: "bussinessman" },
  ];

  const c = arr.concat(n);

  console.log(c);
}