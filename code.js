function tsp_ls(distance_matrix) {
//Initialize random route
   //Set incumbent route as the random route
   function randomRoute(cities) {
   
       let route = Array.from({ length: cities }, (_, index) => index);
       for (let i = route.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); // Random index
           [route[i], route[j]] = [route[j], route[i]]; // Swap elements
       }

       return route;
   }

   
//Repeat until stopping condition met:
   function randomik(n){
            let i = Math.floor(Math.random() * (n-1));
            let k = Math.floor(Math.random() *(n-i-1) + i+1);
            return [i, k]
        }
    for(let noimprove =0; noimprove < 100) {
    //Perform 2-opt swap
       function optSwap(route, i, k) {
            let start = route.slice(0, i);
            let reversed = route.slice(i, k + 1).reverse();
            let end = route.slice(k + 1);
            return start.concat(reversed, end);
        }
    
    //Calculate new route length
       
      let dist = distance_matrix[i][k];
      let newroute = dist;

     /*If new route is shorter:
        Update incumbent route
        Return length of shortest route*/
        if(newroute <= route1){
            newroute = route1;
            route= nowroute;
            noimprove = 0;
        }
        else{
            noimprove++;
        }
       return dist;
    }
    
    return route;
}

