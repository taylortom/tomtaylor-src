[!META{"id":"bubblesort","title":"Python Challenge: Bubblesort","published":"2012-06-12","tags":["hacking"]}]

Bubblesort was the lucky algorithm chosen for the Python Challenge: Part III. Pretty much useless in terms of it's practicality (due to it being so slow - it's average-case complexity is *O(n<sup>2</sup>)*), bubblesort is mainly used for educational purposes to illustrate list sorting.

It's pretty simple in how it works: the algorithm iterates through the list to be sorted and compares pairs of adjacent elements. The larger of the pair is always moved to the right, which results in the list being sorted in ascending order.
```
# swaps the two elements in the passed list
def swap(list, index1, index2):
	index1Val = list[index1]
	index2Val = list[index2]
	list[index1] = index2Val
	list[index2] = index1Val

# sort the list
def bubblesort(list):
	while True:
		swapped = False

		for index in range(len(list)):
			if index == 0: continue

			if list[index-1] > list[index]:
				swap(list, index-1, index)
				swapped = True

		if not swapped: break
```
