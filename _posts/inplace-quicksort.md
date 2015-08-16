[!META{"id":"inplace-quicksort","title":"Python Challenge: In-place Quicksort","published":"2012-06-1","tags":["hacking"]}]

Continuing with the Python challenge, the next step was to implement the <a href="http://en.wikipedia.org/wiki/Quicksort#In-place_version">in-place version of quicksort</a>. Slightly more complex than the simple quicksort, this version uses less space by sorting the list in place. It keeps the same time complexity (*O(n log n)* average case)

```
# swaps the two elements in the passed list
def swap(list, index1, index2):
	index1Val = list[index1]
	index2Val = list[index2]
	list[index1] = index2Val
	list[index2] = index1Val

# partitions and sorts the list at the specified points
def partition(list, left, right, pivotIndex):
	pivotVal = list[pivotIndex]
	swap(list, pivotIndex, right)
	storeIndex = left

	for index in range(left, right):
		if list[index] < pivotVal:
			swap(list, index, storeIndex)
			storeIndex = storeIndex + 1

	swap(list, storeIndex, right)
	return storeIndex

# sort the list
def quicksort(list, left, right):
	if left < right:

		# get a pivot index
		pivotIndex = Random.getRandomInt(len(listToSort))
		while pivotIndex < left or pivotIndex > right:
			pivotIndex = Random.getRandomInt(len(listToSort))

		pivotNewIndex = partition(list, left, right, pivotIndex)

		# Recursively sort elements on each side
		quicksort(list, left, pivotNewIndex - 1)
		quicksort(list, pivotNewIndex + 1, right)
```
