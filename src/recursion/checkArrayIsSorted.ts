/***
 * Problem-2 Given an array, check whether the array is in sorted order with recursion.
 */

function checkArrayIsSorted<T>(n: number, arr: T[]): number {
    if(n===1)
        return 1;
    return (arr[n-1]<arr[n-2]?0: checkArrayIsSorted(n-1, arr));
}

function isArraySorted<T>(arr: T[]): void {

    if(checkArrayIsSorted(arr.length, arr)) {
        console.log('sorted')
    } else {
        console.log('not sorted')
    };
}
const a = [10,1,2,3,7,8,9]
isArraySorted(a);