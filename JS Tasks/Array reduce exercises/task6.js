var voters = [  
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
    let youngVotes = 0, youth = 0, midVotes = 1, mids = 1, oldVotes = 0, olds = 0;

    arr.reduce( (a, b) => {
        if(b.age > 18 && b.age <= 25){
            youth++;
            b.voted ? youngVotes++ : null;
        }
        else if(b.age >= 26 && b.age <= 35){
            mids++;
            b.voted ? midVotes++ : null;
        }
        else if(b.age >= 36 && b.age <= 55){
            olds++;
            b.voted ? oldVotes++ : null;
        }
        
    } )

    return { youngVotes: youngVotes,
        youth: youth,
        midVotes: midVotes,
        mids: mids,
        oldVotes: oldVotes,
        olds: olds 
      };
}

console.log(voterResults(voters)) // Returned value shown below:  
/*
{ youngVotes: 1,
  youth: 4,
  midVotes: 3,
  mids: 4,
  oldVotes: 3,
  olds: 4 
}
*/