const calculateFactorial= (num)=>{
    let arr=[1];
    let carry=0;
    let n=arr.length;
    for(let i=1;i<=num;i++){
        carry=0;
        n=arr.length;

        for(let j=0;j<n;j++){
            carry+=arr[j]*i;
            arr[j]=carry%10;
            carry=Math.floor(carry/10);
        }

        while(carry>0){
            arr.push(carry%10);
            carry=Math.floor(carry/10);
        }
    }

    n=arr.length;
    let ans="";
    for(let i=n-1;i>=0;i--){
        ans+=arr[i];
    }
    return ans;
}

