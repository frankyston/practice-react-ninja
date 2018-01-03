'use strict'

const map = (arr = [], func = (item) => item) => {
  const tempArr = []
  for (var i = 0; i < arr.length; i++)
    tempArr.push(func(arr[i], i, arr))
  return tempArr
}

export default map
