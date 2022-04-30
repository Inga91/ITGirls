let arr = ['js', 'css', 'html'];
console.log(arr[1]);

let numbers = [0, 1, false, 2, undefined, '', 3, null];
let result = numbers.filter(function(elem) {
	if (typeof(elem) === 'number' && elem!=0 ) {
		return true;
	} else {
		return false;
	}
});
console.log(result);

const arr2 = [[1,2], [1,2,3], [1,2,3,4]];
let index;

    index = arr2.findIndex((el) => { 
        return el.length > 3;
    });
/*
    for (i=1; i > 3; i++)
    {
        if (arr2[i].length > 3) {
            index = i;
            break;
        }
    }*/
console.log(index);

