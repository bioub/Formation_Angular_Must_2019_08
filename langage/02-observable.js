const { Observable, interval } = require('rxjs');
const { mapTo, take } = require('rxjs/operators');

// function timeout(delay) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(delay);
//     }, delay);
//   });
// }

// timeout(1000)
//   .then((delay) => console.log(delay + 'ms'));

// |-----1000

// function interval(delay) {
//   return new Observable((observer) => {
//     setInterval(() => {
//       observer.next(delay);
//     }, delay);
//   });
// }

const interval$ = interval(1000).pipe(mapTo(1000), take(4));

const subcription = interval$
  .subscribe((delay) => console.log(delay + 'ms'));

// setTimeout(() => {
//   subcription.unsubscribe();
// }, 4500);

// Marble Graph (https://rxmarbles.com/)
// |-----0-----1-----2-----3------
// filter((val) => val % 2 === 0)
// |-----0-----------2------------
// mapTo(1000)
// |-----1000--------1000---------1000--1000-----
// take(4)
// |-----1000--------1000---------1000---------1000X
