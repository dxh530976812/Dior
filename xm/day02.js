/*var n=10
while(true){
	var b=prompt('input num');
	console.log(b);
	if(b>n){
		alert('big');
		}else if(b<n){
			alert('small')
		}else{
                if(isNaN(b)){
					alert('input a number')
					}else{
					alert('right');
					break;	
						}
			}
}
*/	


/*var n=30;
while(n<=40){
	console.log(n)
		n++;
}
*/


/*var n=50;
while(n<=80){
	console.log(n)
		n+=5;
}
*/

/*var n=66;
while(n>=51){
	console.log(n)
		n-=3;
}
*/

/*var n=1;
while(n<=100){
	if(n%2===1){
		console.log(n);
	}
		n++;
}
*/

/*var b=0;
var n=1;
while(n<=100){
	b+=n;	
	n++;
}
console.log(b);
*/


/*var b=0;
var n=1;
while(n<=100){
	if(n%2===0){
		b+=n
	}
	n++;
}
console.log(b);
*/

/*var jc=1
var n=10
while(n>=1){
	jc*=n;
	n--;
}
console.log(jc);
*/


/*var num=0;
var n=1;
while(true){
	num+=n;
	if(n====100){
		break;
	}
	n++;
}
console.log(num)
*/


/*var n=1;
do{
console.log(n);
n++;
}while(n<=10);
*/

/*var n=30;
do{
	console.log(n);
	n++;
}while(n<=40);
*/

/*var n=50;
do{
	console.log(n);
	n--;
}while(n>=40);
*/

/*var n=1;
do{
	if(n%7===0){
	console.log(n)
		};
    n++;
}while(n<=100)*/


/*var b=0
var n=0;
do{
	if(n%3===0){
		b+=n
	}
		n++;
}while(n<=100){
	console.log(b);
}*/


/*var uswp='123456';
do{
	var b=prompt('input uswp');
	if(b===uswp){
		break;}
		}while(true);
*/		
		

/*var uswp='123456';	
do{
	var b=prompt('input uswp');
 }while(b!==uswp);
*/


/*for(var n=1;n<=10;n++){
	console.log(n);
}
*/


/*for(var n=80;n>=60;n-=5){
	console.log(n);
}*/


/*for(var n=1,b=0;n<=100;n++){
	if(n%2===1){
		b+=n;
	}
}
console.log(b);
*/


/*for(var n=1,b=1;n<=20;n++){
	if(n%3===0){
		b*=n
	}
}
console.log(b);*/


/*for(var age=2000;age<=2100;age++){
	if(age%4===0 && age%100!==0 || age%400===0){
		console.log(age)
	}
}*/


/*for(var n=1,str='';n<=5;n++){
	str+=n+'*5='+n*5+' ';
}
console.log(str);
*/


/*for(var n=1,b=20,c=0;n<=10,b>=2;n++,b-=2){
	c+=n/b;
}
console.log(c);
*/

/*for(var i=1;i<=10;i++){
	if(i===5){
		continue;
	}
	console.log(i)
}*/


/*for(var n=1,b=0;n<=100;n++){
	if(n%2===1){
		continue;
	}
	b+=n;
}
console.log(b);
*/


/*for(var n=1,b=0;n<=100;n++){
	if(n%3===0 || n%4===0){
		continue;
	}
	b+=n,//console.log(n);
}console.log(b);
*/

/*for(var n=1;n<=9;n++){
	for(var j=1,str='';j<=n;j++){
	str+=j+'*'+n+'='+n*j+' ';
}console.log(str);
}*/


/*for(var n=9;n>=1;n--){
	for(var j=9,str='';j>=n;j--){
	str+=j+'*'+n+'='+n*j+' ';
}console.log(str);
}*/


//打印倒着的九九乘法表
    //9*9=81...  1*9=9
/*for(var n=9;n>=1;n--){
	for(var m=n,str='';m>=1;m--){
		str+=m+'*'+n+'='+m*n+' ';
	}
    console.log(str);
}
*/


//打印本世纪（2000~2100）的前10个闰年
/*for(var age=2000,n=0;age<=2100;age++){
	if(age%4===0 && age%100!==0 || age%400===0){
		console.log(age)
		n++;
	}if(n===10){
	break;}
}*/ 


//计算1~100之间所有整数的和，当和大于4000的时候，提前结束循环，打印当前的和
/*for(var i=1,sum=0;i<=100;i++){
  sum+=i;
  //每加一个值，判断是否大于4000，如果是，结束循环
  if(sum>4000){
    break;
  }
}
console.log(sum,i);
*/






































