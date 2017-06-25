function qs(arr){
    if (arr.length > 1){
        var pivot = arr[0];
        var left = [];
        var right = [];
        for (var i = 1; i < arr.length; i++){
            if (i < pivot){
                left.push(arr[i]);
            }
            else{
                right.push(arr[i]);
            }
        }
        return qs(left).concat(pivot, qs(right));

    }
    else {
        return arr;
    }
}