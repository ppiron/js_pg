function arrayToList(arr) {
  let rest = {};

  rest.val = arr[arr.length - 1];
  rest.rest = null;

  for (let i = arr.length - 2; i >= 0; i--) {
    let newRest = {};
    newRest.val = arr[i];
    newRest.rest = rest;
    rest = newRest;
  }
  return rest;
}

//console.log(arrayToList([1]));

function listToArray(list) {
  let arr = [];
  if (list.val !== null) {
    arr.push(list.val);
  }
  else {
    return arr;
  }

  while (list.rest) {
    list = list.rest;
    arr.push(list.val);
  }
  return arr;
}

//console.log(listToArray(arrayToList([1])));

function append(l1, l2) {
  let arr1 = listToArray(l1);
  let arr2 = listToArray(l2);
  let arr = arr1.concat(arr2);
  return arrayToList(arr);
}

const addTwoNumbers = function(l1, l2) {
  let A = {};
  let B = {};
  A.val = (l1.val + l2.val) % 10;
  let rep = Math.floor(((l1.val + l2.val) / 10));
  console.log(rep);
  A.rest = null;

  while(true) {
    if(l1.rest) {
      l1 = l1.rest;
      l2 = l2.rest;
      B.val = ((l1.val + l2.val) + rep) % 10;
      rep = Math.floor(((l1.val + l2.val) + rep) / 10);
      console.log(rep);
      B.rest = null;
      A = append(A, B);
    }
    else {
      if (rep > 0) {
        B.val = rep;
        B.rest = null;
        A = append(A, B);
      }
      break;
    }
  }
  return A;
};

const l1 = arrayToList([2,5,3]);
const l2 = arrayToList([5,6,8]);

console.log(JSON.stringify(addTwoNumbers(l1, l2), null, 2));