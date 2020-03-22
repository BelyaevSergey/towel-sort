module.exports = function towelSort (matrix){
    let arr;
    if (!matrix) {
        return [];
    }
    if(matrix.length>0) 
    {
        matrix.map(function(item,index){
            if((index+2)%2==0){
                item=item;
            }
            else {
                item.reverse();
            }
        })
       arr=matrix.flat(); 
       return arr;
    }

    
    else {
        return [];
    }
}

