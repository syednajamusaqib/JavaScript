// Second largest element in array
let arr = [5,7,7,7,4,3,3]; // 6

let size = arr.length;
let largest = arr[0];
let seclargest = -1;
for(let i=1;i<size;i++){
	if(arr[i] > largest){
		seclargest = largest;
		largest = arr[i];
	}
	else if(arr[i] < largest && arr[i] > seclargest){
		seclargest = arr[i];
	}
}
console.log(seclargest);
