[!META{"id":"insertion-sort","title":"Python Challenge: Insertion Sort","published":"2012-06-21","tags":["hacking"]}]

Insertion sort is a fairly simple and 'clean' (implementation-wise) sorting algorithm. It works in much the same way that we might sort an unordered list (a shuffled deck of cards, for example): each item in the list is taken in turn, and compared with the item that comes before it in the list. If the preceding item is larger, the items are swapped. The element (in it's new position) is then compared with the element before it, swapping the two if it's larger. This process is continued until the item is positioned in such a way that the preceding element is smaller in value, or until the element is the first item in the queue. This process is repeated for all elements in the list.

The benefit to this algorithm is that each element is placed in its final resting position. It's also very quick when sorting small lists (some good quicksort implementations actually use insertion sort to sort lists below a certain length).

You can read more about insertion sort <a href="http://en.wikipedia.org/wiki/Insertion_sort">on Wikipedia</a>.
```
# sort the list
def insertionsort(list):

		for index in range(1, len(list)):
			item = list[index]

			holeIndex = index-1

			while holeIndex &gt;= 0 and list[holeIndex] &gt; item:
				list[holeIndex+1] = list[holeIndex]
				holeIndex -= 1

			list[holeIndex+1] = item
```
