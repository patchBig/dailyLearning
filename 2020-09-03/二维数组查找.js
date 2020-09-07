function Find(target, array) {
    let columnMax = array.length
    let firstRowArr = array[0];
    if (!firstRowArr.length) return false
    let rowFindObj = findIndex(firstRowArr, target);
    if (rowFindObj.isFind) {
        return true
    }
    let rowStartIndex = firstRowArr.indexOf(rowFindObj.num);
    let columnArr = [];
    for (let i = 0; i < columnMax; i++) {
        columnArr.push(array[i][rowStartIndex - 1])
    }
    let columnFindObj = findIndex(columnArr, target);
    if (columnFindObj.isFind) {
        return true
    }
    let columnStartIndex = columnArr.indexOf(columnFindObj.num);
    let secCol = rowStartIndex - 1;
    let secRow = columnStartIndex;
    let t = false;
    console.log('rowFindObj', rowFindObj, 'columnFindObj', columnFindObj, 'secCol', secCol, 'secRow', secRow);
    while(true) {
        let f = array[secRow][secCol];
        if (f === target) {
            t = true;
            break;
        }
        if (f > target) {
            secCol--
        }
        else {
            secRow++
        }
        console.log('f', f, 'secCol', secCol, 'secRow', secRow);
        if (secRow > columnMax - 1 || secCol < 0) {
            break
        }
    }
    return t
}

function findIndex(arr, target) {
    let len = arr.length;
    let mid = Math.floor(len / 2);
    let newArr;
    if (arr[mid] > target) {
        newArr = arr.slice(0, mid)
    }
    else if (arr[mid] < target) {
        newArr = arr.slice(mid + 1)
    }
    else {
        return {
            isFind: true
        }
    }
    if (arr.length === 1 || !newArr.length) {
      return {
        isFind: false,
        num: arr[mid]
      }
    }
    return findIndex(newArr, target)
}

console.log(Find(10, [[1,2,3,12], [2,3,4,18], [3,4,5,19], [10,13,16,10]]))