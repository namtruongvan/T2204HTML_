// code js viet o day

// js có 3 kiểu gọi biến dữ liệu :
// 1 number
//2 string
//3 boolean ( true / false)
// kiểu dữ liệu tham số : array(mảng) - object(đối tượng)
var x; // cách gọi biến kiểu dữ liệu
x = 10;// gắn giá trị
x =" hello world"; //gắn giá trị
x = true ;// gắn giá trị
var y = 20;
y=y+5;
y=y+ "hello"; //(nối chuỗi) string ->  y =  25hello
y=y+10;// y = string -> y = 25hello10
y=y+"t2204m"; //string -> 25hello10t2204m
// ví dụ 10 + hello = 10hello
// hello + 10= hello10

if(x==true){
    y = y + " hello";
}else{
    y=y+" xin chao ";
}
for(var i = 0;i<10; i++){
console.log("i="+i);
}

var arr=[]; //cách khai báo mảng
arr[0] = 2;// các phần tử trong mảng k nhất thiết giống nhau có cùng 1 kiểu dữ liệu
arr[1] = 'hello' ;
arr[2] = true;
arr[3] = [1,2,3,4]; // bản thân cái này có thể là 1 mảng các cấp độ k cần quan trọng nữa

//
var ary=[];
for(var i = 0 ; i < 10;i++){
    ary[i] = 2*i+1; // liệt kê số lẻ
}
//muốn thêm số 21 vào cuối danh sách
//ary[10]=21 ;
ary.push(21); // cú pháp thêm số 21 vào cuối danh sách
ary.push(23);//cú pháp thêm số 23 vào cuối danh sách
ary.push(25);//cú pháp thêm số 25 vào cuối danh sách
for(var i =0 ; i <ary.length;i++){
    console.log(ary[i]); //console để hiển thị    các phần tử trong mảng ary
}
// cách gắn giá trị tổng 2 số : tinhtong(5,7);
function tinhtong(a,b){ //truyền vào 2 tham số a và b  , tinhtong là tên hàm ,
    console.log (a+b);// cách tính 1
    return a+b; // cách tính 2
}
function checkprime(n) { // cách kiểm tra số nguyên tố hay k ?
if(n<2) return false;
if(n==2 || n==3) return true;
for(var i =2 ; i<=n/2;i++){
    if(n%i==0) return false;
}
return true;
}
console.log(checkprime(9)) // cú pháp kiểm tra số 9 có phải số nguyên tố  k?

//một số hàm có sẵn  : 1 hàm alert(' cần truyền vào thông điệp và in thông điệp ra ')
//2 cofirm ( ' hàm xác nhận  giống hàm boolean trả về true or false')
// var kq = confirm('bạn chắc chắn muốn nộp bài ?') ;//ví dụ  ( boolean)
console.log(kq);
prompt (" vui lòng nhập tên của bạn : ")// tạo 1 ô nhập cho ng dùng nhập vào ( return string)
var str = prompt( " vui lòng nhập tên của bạn : ");// hàm trả về 1 chuỗi mà người dùng điền trong ô nhập ở trên
console.log(str);

// var arr=[];// nhap ten 5 nguoi hien thi ra man hinh
//
// for(var i = 0; i<2;i++){
//     arr[i]=prompt(" vui lòng nhập tên : ");
// //     console.log(arr[i]);}
// console.log(str);
// str= parseInt(str); //string -> number
// console.log(str+10);
//
// //
// setTimeout(function (){
//     alert(" demo time out");//  làm delay 5000 ms xong alert mới thực thi
// },5000);


//
// var t = 0 ;
// setInterval(function () {       // tác dụng 1s làm 1  hiệu lực vĩnh viễn
// console.log("t="+t);
//     t++;
// },1000);
//


var t = 0; // đồng hồ đếm đủ 5 lần thì dừng
var xyz = setInterval(function (){
    console.log("t="+t);
    t++;
    if(t>=5){
        clearInterval(xyz);
    }
    },1000);
