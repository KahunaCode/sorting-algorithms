function bs(aa){
    var swap;
    do {
        swap = false;
        for (var i=0; i < aa.length-1; i++) {
            if (aa[i] > aa[i+1]) {
                var tt = aa[i];
                aa[i] = aa[i+1];
                aa[i+1] = tt;
                swap = true;
            }
        }
    } while (swap);
    return aa;
}