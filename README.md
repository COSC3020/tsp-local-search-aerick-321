# Traveling Salesperson Problem -- Local Search

This exercise is about the Traveling Salesperson Problem I mentioned in the
lecture on NP-hard problems -- given a set of cities, determine the length of
the shortest tour that visits all of them. We can get from any city to any other
city, i.e. the graph of cities is completely connected. We consider the version
of the Traveling Salesperson Problem that finds the shortest tour to visit $n$
cities, starting at a city and ending at the $n$ th city; it *does not* go
back to the start. The start city may be any of the cities. Remember that the
graph for a TSP is undirected, i.e. the cost is the same in either direction.

The 2-opt algorithm for solving the Traveling Salesperson Problem is a
randomized local search algorithm that, at each iteration, reverses part of the
route. It starts with a random route (this is the randomized part), and changes
part of the route in each step (this is the local search part, sprinkled with
more randomness). The pseudocode for one iteration is as follows:

```javascript
2optSwap(route, i, k)
  cities 1 to i-1 stay in the order they are
  cities i to k are reversed
  cities k + 1 to n stay in the order they are
```

For example, if I call the above function with route A--B--C--D--E--F, $i=2$,
$k=4$, the resulting route is A--B--E--D--C--F.

The algorithm starts with a random route; if the new route at the end of an
iteration decreases the total length, it is retained as the current incumbent.
The incumbent after the final iteration is returned as the solution.

Implement the 2-opt algorithm, which repeatedly runs the above steps. Your
implementation needs to fix two design parameters that I have left open. First,
you need to design a stopping criterion -- when would it make sense to stop and
return the shortest route found so far rather than trying another iteration?
Second, design a way to choose $i$ and $k$ -- note that they need to be
different in subsequent iterations, as one iteration would simply undo what
the previous one did otherwise. Start with the template I provided in `code.js`.
Describe in your code how you designed your stopping criterion and ways of
choosing $i$ and $k$ and why.

I chose to use convergence for the stopping criterion because I felt that it would be the most accurate without taking too much time and it would limit repeated routes if you just set it for a specific amount of itereations. I have it set to test for up to 100 iterations without improve to find the shortest route. I just have i and k being chosen randomly but making sure thay are not the same.

The function takes a distance matrix (the adjacency matrix for the graph where
the values in the cells are the distances between the corresponding cities) and
returns the length of the shortest tour (not the tour itself).

Test your new function; I've provided some basic testing code in `code.test.js`.

## Runtime Analysis

What is the worst-case asymptotic time complexity of your implementation? What
is the worst-case asymptotic memory complexity? Add your answer, including your
reasoning, to this markdown file.

Time complexity: The randomroute function has a complexity of O(n) because the shuffling is linear, the distance iterates through all the cities in the route which is also O(n), in optiswap the slice and reverse takes O(n) and the while loop at worst case will run 100 consecutive times so the total complexity in O(n+n+n+100(n)) which simplifies to just O(n).

Space complexity: For the randomroute the memory is O(n) because it creates an array to store the shuffled cities, the distance is O(1) because it uses a constant amount of memory since no new data structures are created, the optswap is also O(n) because it creates new arrays with the slice. There is not addtianl data structures created that would increase memory so the total memory complexity is O(n).

Had trouble starting so chat gpt gave me the outline 
Initialize random route,
Set incumbent route as the random route,
Repeat until stopping condition met:
    Select random i and k,
    Perform 2-opt swap,
    Calculate new route length,
    If new route is shorter:
        Update incumbent route,
Return length of shortest route “I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.”
