'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	if (array.length === 1 && array[0] === target) {
		return true
	}
	else if (array.length === 1 && array[0] !== target || !array.length) {
		return false;
	}

	if (array[middle] === target) {
		return true
	}
	else if (array[middle] < target) {
		return binarySearch(right, target);
	}
	else if (array[middle] >= target) {
		return binarySearch(left, target)
	} else {
		return false
	}
};

// binarySearch([1,3,4,5,10,15,20,22,23,98,1000], 100)

// binarySearch([1], 100)

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch