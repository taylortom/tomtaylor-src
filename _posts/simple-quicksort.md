[!META{"id":"simple-quicksort","title":"Python Challenge: Simple Quicksort","published":"2012-05-30","tags":["hacking"]}]

I've been meaning to do a bit of hacking in Python for a while now, but haven't really had the free time what with the mountain of uni work. Now I'm all done and nearly a graduate, I thought it'd be a good time to give Python a go.

In the attempt of killing two birds with one stone, I thought it'd be quite an interesting challenge to work through my <a href="http://blog.taylortom.co.uk/?p=834">big fat book of algorithms</a> and implement them in Python, because hey, you can never implement too many algorithms right?

I thought I'd start of gently, so the first one I tackled was the <a href="http://en.wikipedia.org/wiki/Quicksort#Simple_version">simple version Quicksort</a>:

```
def quicksort(toSort):
	if len(toSort) <= 1: return toSort

	pivotIndex = len(toSort)/2
	pivot = toSort[pivotIndex]
	toSort.pop(pivotIndex)

	# partition the list
	lower = []
	higher = []
	for i in range(len(toSort)):
		item = toSort[i]
		if item <= pivot: lower.append(item)
		else: higher.append(item)

	return (quicksort(lower) + [pivot] + quicksort(higher))

sorted = quicksort(list)
```

I'm pretty impressed with Python so far, albeit only having played around for a short time. I like the fact that curly brackets are out; the whitespace-sensitivity makes for much cleaner and easier-to-read code than I'm used to. I also think that the syntax in general encourages much leaner code; I remember my implementation of the same algorithm in Java was many more lines.

**Next stop**: in-place quicksort.
