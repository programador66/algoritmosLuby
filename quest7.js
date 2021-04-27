const handleComparateArrays = (arr = [], arr2 = []) => {
    return arr.every((element, index) => {
        return element === arr2[index];
    })
}

const foo = handleComparateArrays([1, 2, 3, 4], [1, 2, 3, 4]);
console.log("-----")
console.log(foo);