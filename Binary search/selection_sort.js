//LEGACY VERSION (non ES2015 syntax)
function selectionSort(arr){
    for(var i = 0; i < arr.length; i++){
        var lowest = i;
        for(var j = i+1; j < arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        if(i !== lowest){
            //SWAP!
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
            console.log(arr)
        }
    }
    return arr;
}
selectionSort([12,3,21,2,-323,232]);

