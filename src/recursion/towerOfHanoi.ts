/**
 * Problem-1 Discuss Towers of Hanoi puzzle.
Solution: The Towers of Hanoi is a mathematical puzzle. It consists of three rods (or pegs or
towers), and a number of disks of different sizes which can slide onto any rod. The puzzle starts
with the disks on one rod in ascending order of size, the smallest at the top, thus making a conical
shape. The objective of the puzzle is to move the entire stack to another rod, satisfying the
following rules:
• Only one disk may be moved at a time.
• Each move consists of taking the upper disk from one of the rods and sliding it onto
another rod, on top of the other disks that may already be present on that rod.
• No disk may be placed on top of a smaller disk.

Algorithm:
• Move the top n – 1 disks from Source to Auxiliary tower,
• Move the nth disk from Source to Destination tower,
• Move the n – 1 disks from Auxiliary tower to Destination tower.
• Transferring the top n – 1 disks from Source to Auxiliary tower can again be thought
of as a fresh problem and can be solved in the same manner. Once we solve Towers
of Hanoi with three disks, we can solve it with any number of disks with the above
algorithm.
 */

function towerOfHanoi(n: number, source: string, destination: string, auxillary: string): void {
    if(n===1) {
        console.log('Move disk 1 from rod' + source + ' to rod ' + destination);
        return
    }

    towerOfHanoi(n-1, source, auxillary, destination);
    console.log('Move disk ' + n + ' from rod ' + source + ' to rod ' + destination);
    towerOfHanoi(n-1, auxillary, destination, source);
}

// Example usage:
const numberOfDisks = 3;
towerOfHanoi(numberOfDisks, 'A', 'C', 'B'); // A, B and C are names of rods