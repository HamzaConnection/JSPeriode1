// function Numbers(numbs) {//es5
//     var self = this;
//   this.nums = numbs;
//   this.fives = [];
//   this.nums.forEach(function (v) {
//     if (v % 5 === 0) { // this example does not work because the this inside the if statement belongs to the if statement, not the function itself. 
//      therefore this.fives is undefined inside the if statement
//     //   this.fives.push(v);
//       self.fives.push(v);

//     }
//   });
// }

function Numbers(numbs) {//es6    
    
        this.nums = numbs;
        this.fives = [];
        this.nums.forEach((v) => {
            if (v % 5 === 0) {
                this.fives.push(v); // By using es6 arrowfunction this refereces to the function 
                                    //compared to doing this.nums.forEach(function (v) where this refereces
                                    // to the if statement
            }
    
        });
    }


    var numbers = new Numbers([1, 3, 5, 10, 14, 20, 33, 50]);
    //console.log(numbers.fives);


    var counter = {
        count: 0,
        inc: () => this.count++ //this makes it worse...
      }
    var func = counter.inc; //Store "reference" to inc
    func();
    console.log(counter.count); //Still zero
    counter.inc(); 
    console.log(counter.count); //Still zero


/*
    var counter = {
        count: 0,
        inc: function () {
          this.count++;
        }
      }
    var func = counter.inc; //Store "reference" to inc
    func();
    console.log(counter.count); //Still zero
    counter.inc();
    console.log(counter.count); //Now one
    */
    
    