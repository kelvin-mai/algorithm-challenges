const testCase1 = [3, 4, -1, 1]; // 2
const testCase2 = [1, 2, 0]; // 3

function firstMissing(arr: number[]): number {
	arr.sort();
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < 0) continue;

		if (arr[i] + 1 != arr[i + 1]) {
			return arr[i] + 1;
		}
	}
	return 0;
}

console.log(firstMissing(testCase1));
console.log(firstMissing(testCase2));
