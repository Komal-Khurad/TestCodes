var input=[1,2,3,4,5];
var reqSum=6;
var result=[];
var minLength=input.length;
var combinations=Math.pow(2,input.length);

for(i=1;i<combinations;i++)
{
    tempArr=[];   //temp result to make sum of array
    
//     [0,0,0,0,1]
//     [1,2,3,4,5]
//     [1]
//     [0,1]
//     [1,1]
//     [0,0,1]
//     [1,0,1]
//     [0,1,1]
//     [1,1,1]

// 4=>100=>[1,0,0]

    binArr=i.toString(2).split("").reverse();
    var sum=0;

    for(j=0;j<binArr.length;j++)
    {
        if(binArr[j]==1){
            tempArr.push(input[j]);
            sum+=input[j];
        }
    }
    
    if(sum==reqSum && tempArr.length<minLength)
    {
        result=tempArr;
        minLength=tempArr.length;
    }
}

console.log(result);
