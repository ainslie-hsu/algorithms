function selectionSort(array) {
  for (var i = 0; i < array.length; i++) {
    var minValue = array[i];
    var minIndex = i;
    for (var j = i + 1; j < array.length; j++) {
      if (array[j] < minValue) {
        minValue = array[j];
        minIndex = j;
      }
    }
    if (minValue !== array[i]) {
      array[i] = array[i] + array[minIndex];
      array[minIndex] = array[i] - array[minIndex];
      array[i] = array[i] - array[minIndex];
    }
  }
  return array;
}