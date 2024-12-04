function tsp_ls(distance_matrix) {
Initialize random route
Set incumbent route as the random route
Repeat until stopping condition met:
    Select random i and k
    //Perform 2-opt swap
   function optSwap(route, i, k) {
        let start = route.slice(0, i);
        let reversed = route.slice(i, k + 1).reverse();
        let end = route.slice(k + 1);
        return start.concat(reversed, end);
    }
    
    Calculate new route length
    If new route is shorter:
        Update incumbent route
        Return length of shortest route
    
    return -1;
}

