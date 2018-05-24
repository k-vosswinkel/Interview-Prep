# Patterns
## Nested Loops
  * If you are looking for the content of multiple things in another, larger thing (specific, I know), you'll probably need a nested loop. Think needle and haystack or poss. divisors.
  * Be careful about which loop is on the outside and which loop is on the inside. While it may seem second nature, my brain is often wonky and flips things around.

## Linked Lists
You will need:
  * Node constructor or class
    * Value
    * Next
    * Previous (doubly-linked)
  * List constructor or class
    * Head
    * Tail (doubly-linked)

## Binary Search Trees
  * If you are searching anything sorted, BST is a great way to go; it's O log N :D

  * Traversing a BST recursively:
    * notes

  * Traversing a BST iteratively:
    * Eeeeek - while loops!
    * Set up a local variable for current node - this will allow you to evaluate the tree, node by node, without leaning on 'this' context or a passed-in node. //NOTE: make sure all of your comparators and re-assignments after that are using the variable. The root node is dead to you! DEAD!
    * Continue until the current node is undefined - make sure that you reassign the current node each time you loop, no matter what.
    * Do you have to visit each child? Navigate the tree in a smart way if possible.

  * Depth first searches always go smallest to largest (L to R or R to L depending on how you set up your tree). This means that the only thing that differs is when you return the value of the node itself.
    * Pre-Order: Node - L - R
    * In-Order: L - Node - R
    * Post-Order: L - R - Node

## Heaps
You will need:
  * An array for storage
  * Heap up (Bubble up) method
    * Push value onto the end of the array
    * Find the parent
    * Is the parent value bigger?
      * Yes: keep traversing
      * No: Insert value
  * Heap down (Sink down) method
    * Remove the value from the top
    * Take the bottom value and add it to the top


## A Note on Optimization
  * If you're asked to calculate *every* possible permutation of something, chances are, you're going to be stuck with O(n!) or O factorial. That's because for `n` possible characters, there are `n!` permutations.




