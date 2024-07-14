function mincost(arr)
{ 
//write your code here
// return the min cost
  let sum =0;
	arr.sort((a,b)=>a-b)
	while(arr.length>1){
		let x=arr[0]+arr[1]
		sum=sum+x
		arr.shift()
		arr.shift()
		arr.unshift(x)
		arr.sort((a,b)=>a-b)
	}
	return sum
}

module.exports=mincost;
