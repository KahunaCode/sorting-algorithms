function bbs(tosort){
    for (var i = 1; i < tosort.length; i++){
        for (var j = 0; j < tosort.length; j++){
            if (tosort[i] < tosort[j]) {
                var tt = tosort[i];
                tosort[i] = tosort[j];
                tosort[j] = tt;
            }
        }
    }
    return tosort
}