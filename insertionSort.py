#insertionSort.py

def insertionSort(arr):
	for i in range(len(arr)):
		for j in range(len(arr)):
			if (arr[j] > arr[i]) and (arr[j] > -1):
				[arr[i], arr[j]] = [arr[j], arr[i]]
				j-= 1
	return arr

# Time complexity = O(n^2)
# Space complexity = O(1) 
