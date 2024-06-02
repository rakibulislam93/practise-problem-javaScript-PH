
var friends = ["rahim", "karim", "abdul","abdul", "sadsd", "heroAlom"];

let initialSize = 0 ;
let name = "";
for( friend of friends){
    
    let size = friend.length;
    if(size > initialSize){
        initialSize = size;
        name = friend
    }

}
console.log(name);