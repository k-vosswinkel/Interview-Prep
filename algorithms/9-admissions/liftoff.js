//iterative
let liftoff = (num) => {
  for (let i = num; i > 0; i--){
    console.log(i)
  }
  console.log('liftoff!')
}

//recursive
let liftoff = (num) => {
  if (num > 0){
    console.log(num)
    liftoff(num - 1)
  } else console.log('liftoff!')
}
