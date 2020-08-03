class Movie
{
    constructor(name,studio,rating='PG')
    {
        this.name=name;
        this.studio=studio;
        this.rating=rating;
    }
    getPG(arr)
    {
        let rarr=[]
        for(let i=0;i<arr.length;i++)
        if(arr[i].rating==='PG')
        rarr.push(arr[i])
        return rarr
    }
   
    
}
var Movie1=new Movie('casino royale','Eon productions','PG13')
var Movie2=new Movie('transforers','WB')
var Movie3=new Movie('hulk','marvel','PG')

console.log(Movie1.getPG([Movie1,Movie2,Movie3]))



//......................................................................
/*
Output:
[ Movie { name: 'transforers', studio: 'WB', rating: 'PG' },
  Movie { name: 'hulk', studio: 'marvel', rating: 'PG' } ]
Execution Time:
0.068s
Memory Used:
8116kb
*/
 
 
