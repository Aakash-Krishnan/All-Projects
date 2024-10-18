/**
 *$ Pollyfill functions
 *
 *! 1. map
 * !2. filter
 *! 3. reduce
 *! 4. flat [arr / Obj]
 *
 * 5. async/await -> Generators
 *
 *! 6. Promise
 *! 7. all
 *! 8. any
 *! 9. race
 * !10. allSetteled
 *
 * !11. once
 * !12. memoized
 *
 *!13. debounce
 *! 14. throttle
 *
 *! 15. curry
 *? 16. compose
 *
 *! 17. Pagination
 *! 18. Infinite scrolling
 *
 * 19. module method
 */

// if (!Array.prototype.myMap) {
//   Array.prototype.myMap = function (callback) {
//     const arr1 = this;
//     const result = [];

//     for (let i = 0; i < arr1.length; i++) {
//       const value = callback(arr1[i], i, arr1);
//       result.push(value);
//     }

//     return result;
//   };
// }

// if (!Array.prototype.myFilter) {
//   Array.prototype.myFilter = function (callback) {
//     const arr = this;
//     const result = [];

//     for (let i = 0; i < arr.length; i++) {
//       const value = callback(arr[i], i, arr);

//       if (value) {
//         result.push(arr[i]);
//       }
//     }
//     return result;
//   };
// }

// if (!Array.prototype.myReduce) {
//   Array.prototype.myReduce = function (callback, initialValue) {
//     const arr = this;

//     let prev = initialValue;
//     let idx = 0;

//     if (!prev) {
//       prev = arr[0];
//       idx = 1;
//     }
//     for (let i = idx; i < arr.length; i++) {
//       prev = callback(prev, arr[i]);
//     }

//     return prev;
//   };
// }

// if (!Array.prototype.myFlat) {
//   Array.prototype.myFlat = function (depth = 1) {
//     const arr = this;
//     if (depth < 1) return arr;
//     const result = [];

//     for (let i = 0; i < arr.length; i++) {
//       if (Array.isArray(arr[i])) {
//         result.push(...arr[i].myFlat(depth - 1));
//       } else {
//         result.push(arr[i]);
//       }
//     }

//     return result;
//   };
// }

// const arr = [1, 2, 3, 4]

// const res = arr.map((item) => item * 2)
// res

// const res2 = arr.myMap((item) => item * 6)
// res2

// const resf1 = arr.filter((item ) => item % 2)
// resf1

// const resf2 = arr.myFilter(item => item % 2)
// console.log("resf2",resf2)

// const resd1 = arr.reduce((acc, curr) => acc + curr)
// resd1

// const resd2 = arr.myReduce((acc, curr) => acc * curr, 1)
// console.log(resd2)

// const nesArr = [1, 2, 3, [4, 5, 6], [7, 8, 9, [10, 11, 12]], [13, 14, 15, [16, 17, 18, [19, 20, 21]]]]

// const resN2 = nesArr.flat()
// resN2

// const resN1 = nesArr.myFlat()
// console.log(resN1)

// const resAfter = (delay) =>
//   new Promise((res) => setTimeout(() => res(), delay * 1000));
// const rejAfter = (delay) =>
//   new Promise((_, rej) => setTimeout(() => rej(), delay * 1000));

// function myAllPromise(promises = []) {
//   if (!Array.isArray(promises)) throw new Error("Not an array");

//   return new Promise((res, rej) => {
//     const result = [];

//     promises.forEach((promise) => {
//       promise
//         .then((data) => {
//           result.push(data);
//           if (result.length === promises.length) {
//             res(result);
//           }
//         })
//         .catch((err) => rej(err));
//     });
//   });
// }

// function myAnyPromise(promises = []) {
//   return new Promise((res, rej) => {
//     let count = 0;

//     promises.forEach((promise) => {
//       promise
//         .then((data) => {
//           res(data);
//         })
//         .catch((err) => {
//           count++;
//           if (count === promises.length) {
//             rej(err);
//           }
//         });
//     });
//   });
// }

// function myRacePromise(promises = []) {
//   return new Promise((res, rej) => {
//     promises.forEach((promise) => {
//       promise.then((data) => res(data)).catch((err) => rej(err));
//     });
//   });
// }

// function myAllSettledPromise(promises = []) {
//   return new Promise((res) => {
//     const result = [];
//     promises.forEach((promise) => {
//       promise
//         .then((data) => {
//           result.push(data);
//         })
//         .catch((err) => result.push(err))
//         .finally(() => {
//           if (result.length === promises.length) {
//             res(result);
//           }
//         });
//     });
//   });
// }

// console.time("Timer");
// // const p = myAllPromise([resAfter(2), resAfter(3), resAfter(4)])
// // const p = myAnyPromise([rejAfter(2), rejAfter(3), rejAfter(4)])
// // const p = myRacePromise([resAfter(2), resAfter(3), rejAfter(4)]);
// const p = myAllSettledPromise([rejAfter(2), rejAfter(3), rejAfter(4)]);

// p.then(() => {
//   console.log("SUCCESS");
//   console.timeEnd("Timer");
//   process.exit(0);
// }).catch(() => {
//   console.log("ERROR");
//   console.timeEnd("Timer");
//   process.exit(1);
// });

// *************************************************

// NOTE: Pollyfill of Flat for Objects.

// Object.prototype.myFlat = function () {
//     const res = {};
//     const obj = this;
//     for (let key in obj) {
//       if (typeof obj[key] === "object") {
//         const temp = obj[key].myFlat();
//         for (let key2 in temp) {
//           res[key + "." + key2] = temp[key2];
//         }
//       } else if(typeof obj[key] !== "function") {
//         res[key] = obj[key];
//       }
//     }
//     console.log("RETURN", res);
//     return res;
//   };

//   const obj = {
//     nest1: {
//       nest2: {
//         num: 1,
//       },
//     },
//     nest3: {
//       nest4: {
//         num: 2,
//       },
//     },
//   };

//   const res = obj.myFlat();
//   console.log(res);

// *************************************************

// NOTE: Getting the index using "var" by closure function.

// for (var i = 0; i < 5; i++) {
//   (function (i) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   })(i);
// }

// *************************************************

// NOTE: Infinite nesting of curring function.

// function sum(a){
//     return function(b){
//         if(b) return sum(a + b)
//         return a
//     }
// }

// const res = sum(1)(2)(3)(5)
// console.log(res())
// console.log(res())

// *************************************************

// NOTE: Converting nrml function to curried function.

// function curry(fn){
//     return function curriedFunc(...args){
//         if(args.length >= fn.length){
//             return fn(...args)
//         }
//         return function(...next){
//             return curriedFunc(...args, ...next)
//         }
//     }
// }

// const sum = (a, b, c, d) => a + b + c + d;

// const totalSum = curry(sum)

// console.log(totalSum(1)(2)(3)(4));

// *************************************************

// NOTE: PAGINATION
// const slides = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];

// const pagesPerSilde = 10
// const currentPage = 1
// const startIndex = (currentPage - 1) * pagesPerSilde
// const endIndex = startIndex + pagesPerSilde

// const items = slides.slice(startIndex, endIndex)

// *************************************************

// NOTE: Infinite Scrolling
// loadMore();

// function loadMore() {
// Task to fetch more date
// }

// const threshold = 200;

// window.addEventListener("scroll", (e) => {
//   const scrollPosition = window.scrollY;
//   const totalHeight = document.documentElement.scrollHeight;
//   const windowHeight = window.innerHeight;
// console.log(windowHeight);
//   console.log(scrollPosition);
//   console.log(totalHeight - (scrollPosition + windowHeight));

//   if (totalHeight - (scrollPosition + windowHeight) < threshold) {
//     loadMore();
//   }
// });

// *************************************************

// NOTE: Module Method

// const module = (function () {
//   function privateMethod(){
//       console.log("PRIVATE METHOD");
//   }

//   function publicMethod(){
//       privateMethod()
//       console.log("PUBLIC METHOD");
//   }

//   return {
//       publicMethod
//   }
// })()

// module.publicMethod()

// *************************************************

// NOTE: Pollyfill of "once" function.

// function once(fn, context) {
//   let ran;
//   return function () {
//     if (fn) {
//       ran = fn.apply(context || this, arguments);
//       fn = null;
//     }
//     return ran;
//   };
// }

// const hello = once(() => console.log("HELLO"));

// hello();
// hello();
// hello();
// hello();

// *************************************************

// NOTE: Memoization function with closure.

// function myMemoize (fn, context) {
//   let cache = {}
//   return function(){
//       const item = JSON.stringify(arguments)
//       if(!cache[item]){
//           console.log(item);
//           cache[item] = fn.apply(context || this, arguments)
//       }
//       return cache[item]
//   }
// }

// const clumsySquare = (num1, num2) => {
//   for (let i = 0; i < 1000000; i++){
//   }
//   return num1 * num2
// }

// const cachedFn = myMemoize(clumsySquare)

// console.log(cachedFn(2, 3));
// console.log(cachedFn(2, 3));
// console.log(cachedFn(2, 3));
// console.log(cachedFn(2, 5));
// console.log(cachedFn(2, 1));

// *************************************************

// NOTE: Trick question.

// const obj = {value : 10}

// const fn = (x = {...obj}) => {
//     console.log(x.value += 10)
// }

// fn()
// fn()
// fn(obj)
// fn(obj)

// *************************************************

// NOTE: Trick question.

// const changeObj = (obj) => {
//   obj.value = 30;
//   obj = {
//     value: 50,
//     name: "Sky",
//   };

//   return obj;
// };

// const obj = { value: 10, name: "Aakash" };

// const obj2 = changeObj(obj);

// console.log(obj);
// console.log(obj2);

// *************************************************

// NOTE: Pollyfill of Async/Await

// function* asyncAwait() {
//   const data = yield fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const res = yield data.json();
//   console.log(res);
// }

// const returnNext = asyncAwait();

// function handleNext(nextValue) {
//   const { value, done } = returnNext.next(nextValue);
//   if (!done) {
//     value.then(handleNext);
//   }
// }

// handleNext();

// *************************************************

// NOTE: Pollyfill for Promise

// function myPromise(executer){
//   let onResolve,
//       onReject,
//       isFullfilled = false,
//       isRejected = false,
//       isCalled = false,
//       value

//   function resolve(data){
//       isFullfilled = true
//       value = data
//       if(typeof onResolve === "function"){
//           isCalled = true
//           onResolve(data)
//       }
//   }

//   function reject(data){
//       isRejected = true
//       value = data

//       if(typeof onReject === 'function'){
//           isCalled = true
//           onReject(data)
//       }
//   }

//   this.then = function(cb){
//       onResolve = cb

//       if(isFullfilled && !isCalled){
//           isCalled = true
//           onResolve(value)
//       }
//       return this
//   }

//   this.catch = function (cb){
//       onReject = cb

//       if(isRejected && !isCalled){
//           isCalled = true
//           onReject(value)
//       }
//       return this
//   }

//   executer(resolve, reject)
// }

// const p = new myPromise((resolve, reject) => {
//   // setTimeout(() => {
//       resolve('Yes')
//       // reject('NO')
//   // }, 1000)
// })

// p.then((res) => {
//   console.log(res)
//   return 'Hello'
// }).catch((err) => {
//   console.log(err)
// })

// *************************************************

// NOTE: Interesting circle problem.

// ! CSS
// .circle {
//     border: 1px solid black;
//     position: absolute;
//     border-radius: 50%;
//   }

// ! JS
// let count = 0;
// let Div1;
// let coords = [];

// function isInteresting() {
//   return (
//     Math.hypot(coords[0].x - coords[1].x, coords[0].y - coords[1].y) <=
//     coords[0].radius + coords[1].radius
//   );
// }

// document.addEventListener("click", (e) => {
//   if (count == 2) {
//     Div1 = null;
//     document.body.innerHTML = "";
//     count = 0;
//     coords = [];
//   }
//   count++;
//   const x = e.clientX;
//   const y = e.clientY;

//   const div1 = document.createElement("div");
//   document.body.appendChild(div1);
//   div1.classList.add("circle");

//   const radius = Math.floor(Math.random() * (200 - 50) + 50);
//   coords.push({ x, y, radius });

//   div1.style.width = `${radius * 2}px`;
//   div1.style.height = `${radius * 2}px`;

//   div1.style.top = `${y - radius}px`;
//   div1.style.left = `${x - radius}px`;

//   if (count == 2) {
//     const res = isInteresting();
//     console.log(res);
//   }
//   Div1 = div1;
// });

// *************************************************

// NOTE: Object grouping based on key value pair.
// const myObj = {}

// const res = {}

// myObj.forEach((item) => {
//     if(res[item.key]){
//         res[item.key].push(item.val)
//     }
//     else{
//         res[item.key] = [item.val]
//     }
// })

// *************************************************

// function myMemoize(fn) {
//   const cache = {};

//   return function (...args) {
//     const item = JSON.stringify(args.join("_"));
//     if (!cache[item]) {
//       console.log("COMPUTED");
//       cache[item] = fn(args);
//     }
//     return cache[item];
//   };
// }

// function add(args) {
//   return args.reduce((acc, curr) => acc + curr);
// }

// const memoizedAdd = myMemoize(add);

// console.log(memoizedAdd(1, 2));
// console.log(memoizedAdd(1, 2));
// console.log(memoizedAdd(1, 2));
// console.log(memoizedAdd(2, 2, 7, 3));
// console.log(memoizedAdd(2, 2, 7, 3));
// console.log(memoizedAdd(2, 2, 7, 3));

// *************************************************

// const Tbtn = document.querySelector(".throttle");
// const Dbtn = document.querySelector(".debounce");

// const server = () => {
//   console.log("API call made..");
// };

// const throttle = (callback, delay) => {
//   let throttleTimout = false;

//   return function () {
//     if (throttleTimout) {
//       console.log("Ignoring");
//       return;
//     }

//     callback();
//     throttleTimout = true;
//     setTimeout(() => {
//       throttleTimout = false;
//     }, delay * 1000);
//   };
// };

// const debounce = (callback, delay) => {
//   let debounceTimout;

//   return function () {
//     clearTimeout(debounceTimout);

//     debounceTimout = setTimeout(() => {
//       callback();
//     }, delay * 1000);
//   };
// };

// const throttleServer = throttle(server, 5);

// const debounceServer = debounce(server, 1);

// Tbtn.addEventListener("click", throttleServer);
// Dbtn.addEventListener("click", debounceServer);

// const resAfter = (delay) =>
//   new Promise((res) => setTimeout(() => res(), delay * 1000));

// const rejAfter = (delay) =>
//   new Promise((res, rej) => setTimeout(() => rej(), delay * 1000));

// function myAllPromise(promises = []) {
//   return new Promise((res, rej) => {
//     const result = [];

//     promises.forEach((promise) => {
//       promise
//         .then((val) => {
//           result.push(val);
//           if (result.length === promises.length) {
//             res(result);
//           }
//         })
//         .catch((err) => rej("ABORTED"));
//     });
//   });
// }

// const myAnyPromise = (promises = []) => {
//   return new Promise((res, rej) => {
//     let count = 0;
//     promises.forEach((promise) => {
//       promise
//         .then(() => {
//           res();
//         })
//         .catch(() => {
//           count++;
//           if (count === promises.length) {
//             rej();
//           }
//         });
//     });
//   });
// };

// const myRacePromise = (promises = []) => {
//   return new Promise((res, rej) => {
//     promises.forEach((promise) => {
//       promise.then(() => res()).catch(() => rej());
//     });
//   });
// };

// const mySettledPromise = (promises = []) => {
//   return new Promise((res) => {
//     const result = [];
//     promises.forEach((promise) => {
//       promise
//         .then((value) => result.push(value))
//         .catch((err) => result.push(err))
//         .finally(() => {
//           if (result.length === promises.length) {
//             res();
//           }
//         });
//     });
//   });
// };

// console.time("Time");

// // const p = myAllPromise([resAfter(2), rejAfter(3), resAfter(2)]);
// // const p = myAnyPromise([resAfter(5), resAfter(3), resAfter(4)]);
// // const p = myRacePromise([resAfter(5), resAfter(3), resAfter(4)]);
// // const p = mySettledPromise([rejAfter(5), resAfter(3), rejAfter(4)]);

// p.then(() => {
//   console.log("Success");
//   console.timeEnd("Time");
// }).catch(() => {
//   console.log("Error");
//   console.timeEnd("Time");
// });

// **********************************************************

// const server = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res("MADE API CALL");
//     }, 2000);
//   });
// };

// console.log("STARTEd");

// const connect = async () => {
//   const res1 = server();
//   res1.then((result) => {
//     console.log("THEN");
//   });

//   setTimeout(() => {
//     console.log("SET-TIMEOUT");
//   }, 1000);

//   const res = await server();
//   console.log(res, "AWAIT");

//   console.log("ENDED");
// };

// connect();
// console.log("OVER");

// **********************************************************

// function userCreator(name, score) {
//   const newUser = Object.create(userFunctionsStore); // creates a prototype
//   newUser.name = name;
//   newUser.score = score;
//   return newUser;
// }

// const userFunctionsStore = {
//   increment: function () {
//     const add = () => {
//       this.score++;
//       console.log(this.score);
//       console.log(this.score);
//     };
//     add();
//   },

//   decrement: function () {
//     const sub = () => {
//       this.score--;
//       console.log(this.score);
//     };
//     sub();
//   },
// };

// const user1 = userCreator("Eva", 9);

// user1.increment();
// user1.decrement();

// class UserCreator {
//   constructor(name, score) {
//     this.name = name;
//     this.score = score;
//   }

//   increment() {
//     this.score++;
//   }

//   login() {
//     console.log("You are logged in", this.name);
//   }
// }

// const user2 = new UserCreator("Eva", 9);

// **********************************************************

// if (!Function.prototype.myApply) {
//   Function.prototype.myApply = function (context, args = []) {
//     const fn = Symbol();

//     context[fn] = this;
//     context[fn](...args);

//     delete context[fn];
//   };
// }

// if (!Function.prototype.myCall) {
//   Function.prototype.myCall = function (context, ...args) {
//     const fn = Symbol();

//     context[fn] = this;
//     context[fn](...args);

//     delete context[fn];
//   };
// }

// if (!Function.prototype.myBind) {
//   Function.prototype.myBind = function (context, ...args) {
//     const fnToCall = this;

//     return function (...extraArgs) {
//       fnToCall.myApply(context, [...args, ...extraArgs]);
//     };
//   };
// }

// const obj = {
//   name: "Aakash",
//   display: function () {
//     console.log("HELLo");
//   },
// };

// function test(a = null, b = null, c = null) {
//   console.log(this.name, a, b, c);
// }

// test.myCall(obj, "MYCALL", 7, 8);
// const ref = test.myBind(obj, "BIND");
// ref("APPLY", 4);

// **********************************************************

// const arr = [1, 2, 3, 4];

// const res = arr.map((item) => item * 2);
// console.log(res);

// **********************************************************

// const resAfter = (delay) =>
//   new Promise((res) => setTimeout(() => res(), delay * 1000));
// const rejAfter = (delay) =>
//   new Promise((_, rej) => setTimeout(() => rej(), delay * 1000));

// function myAllPromise(promises = []) {
//   if (!Array.isArray(promises)) throw new Error("Not an array");

//   return new Promise((res, rej) => {
//     const result = [];

//     promises.forEach((promise) => {
//       promise
//         .then((data) => {
//           result.push(data);
//           if (result.length === promises.length) {
//             res(result);
//           }
//         })
//         .catch((err) => rej(err));
//     });
//   });
// }

// console.time("Timer");
// const p = myAllPromise([resAfter(2), resAfter(3), resAfter(4)]);

// p.then(() => {
//   console.log("SUCCESS");
//   console.timeEnd("Timer");
// }).catch(() => {
//   console.log("ERROR");
//   console.timeEnd("Timer");
// });
