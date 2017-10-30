// Code your solution here!

var printString = (string) => {
  if (string.length > 0){
    console.log(string[0])
    printString(string.substring(1,string.length))
  }
}

var reverseString = (string) => {
  if (string.length > 1){
    return string[string.length -1] + reverseString(string.substring(0,string.length -1))
  } else {
    return string
  }
}

var isPalindrome = (string) => {
  if (string.length > 1){
    if (string[0] === string[string.length-1]){
      let newString = string.substring(1, string.length -1)
      if (newString.length > 2){
        return isPalindrome(newString)
      }
    } else {
      return false
    }
  }
  return true
}

var addUpTo = (arr, index) => {
  if (index > 0){
    return arr[index] + addUpTo(arr, index -1)
  } else {
    return arr[index]
  }
}

var maxOf = (arr) => {
  let biggest = arr[0]
  if (arr.length === 1){
    return biggest
  }
  if (biggest > arr[arr.length-1]){
    arr.pop()
    return maxOf(arr)
  } else {
    arr.shift()
    return maxOf(arr)
  }
}

var includesNumber = (arr, num) => {
  if (arr.length < 1){
    return false
  }
  if (arr.pop() === num){
    return true
  } else{
    return includesNumber(arr, num)
  }
}
