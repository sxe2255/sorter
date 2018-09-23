class Sorter {
  constructor() {
  this.array = [];
  this.comparator = function(a, b){return a-b;};
  // your implementation
  }

  add(element) {
   this.array.push(element); // your implementation
  }

  at(index) {
  return  this.array[index];// your implementation
  }

  get length() {
  return  this.array.length;// your implementation
  }

  toArray() {
  return this.array;  // your implementation
  }

  sort(indices) {
    var arraySort =[];
    var i;
  
        for (i = 0; i<=indices.length-1; i++)
        {
          arraySort.push(this.array[indices[i]]);
        }

        
        arraySort.sort(this.comparator);
               
        indices.sort(function(a, b){return a-b;} );
       
       
        for (i = 0; i<=indices.length-1; i++)
          {
          this.array[indices[i]] = arraySort[i];
          }
      }  
  

  setComparator(compareFunction) {
    this.comparator = compareFunction;
}
}
module.exports = Sorter;