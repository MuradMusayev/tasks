function swapCase(params) {
  let newArr = [];
  let arr = params.split("");
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i].toUpperCase()) {
      newArr.push(arr[i].toUpperCase());
    } else {
      newArr.push(arr[i].toLowerCase());
    }
  }
  console.log(newArr);
}
swapCase("Murad");
