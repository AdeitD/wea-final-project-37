
// binSearch: Conducts a binary search on the array of groceries groceryArr, and returns a grocery object
//            with a name that matches groceryName
function binSearch(groceryArr, groceryName) {
    const len = groceryArr.length;
    let start = 0;
    let end = len - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (groceryArr[mid].name < groceryName) {
            start = mid + 1;
        } else if (groceryArr[mid].name > groceryName) {
            end = mid - 1;
        } else {
            return groceryArr[mid];
        }
    }
    return null;
}

export default binSearch;
