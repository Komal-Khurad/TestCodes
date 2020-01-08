var input=[1,2,3,4,5];
var reqSum=6;
var result=[];
var minLength=input.length;
var combinations=Math.pow(2,input.length);

function recur(counter)
{
    if(counter>=combinations) return console.log(result);

    tempArr=[];   //temp result to make sum of array
    
    binArr=counter.toString(2).split("").reverse();
    var sum=0;

    binArr.map((element, index)=>{
        if(element==1){
            tempArr.push(input[index]);
            sum+=input[index];
        }
    })

    // for(j=0;j<binArr.length;j++)
    // {
    //     if(binArr[j]==1){
    //         tempArr.push(input[j]);
    //         sum+=input[j];
    //     }
    // }
    
    if(sum==reqSum && tempArr.length<minLength)
    {
        result=tempArr;
        minLength=tempArr.length;
    }

    recur(counter+1);
}

recur(1);
