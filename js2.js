/*Primitive data type : sabit ve ilkel verilerdir, değiştirilmezler,
string
number
boolean
null
undefined  */


//Reference veri tipleri: aslında hepsi birer object'dir.
//Array ;
var numbers = [1,2,3,4,5]; //numbers bir referanstır ve biz numbers üzerinden 
//bu array değerlerine ulaşabiliriz.
//Objeler ;
var person = {
    name : "Özgün Deniz",
    age :25,
}
//Date Objeler;
var date = new Date();
//functionlar (fonksiyon objesi) ;
var merhaba = function(){
    console.log("Merhaba :)");
}
console.log(numbers);
console.log (date);
console.log(person);
console.log(merhaba);

//Primitive ve Reference veri tipleri arasındaki farklar ;
//Primitive veri tipleri, sadece o değişkenin değeri ancak,
//referans veri tipleri, referanslar üzerinden bellekte bir yeri gösteriyor ve sonrasında o değerleri alabiliyoruz.

//Primitive ;
var a = 10; // burda a sadece 10 değerini taşır yani herhangi bir referans değildir.,
var b = a ; // b değeri a değerini kopyalayarak 10 oluyor,
console.log (a , b); // sonuç 10 10 
var a = 20 ;
console.log (a , b );//sonuç 20 10 yani b değeri değişmedi 
//çünkü b önceden a nın değerin, kopyalamıştı, bellekteki yerini değil.

//Eğer referans veri tipi olsaydı ;

var a =[1,2,3]; //Arrayler referans veri tipleridir,
/* bu şekilde bir array oluşturduğumuz zaman aslında bellekte iki tane 
değişken oluşuyor , biri a referansı diğeri ise bu referansın gösterdiği değerler.
yani arrayın değişkenleri olan 1,2,3 sayıları. ve a bellekteki en başı gösteriyor.*/

var b = a ; //a'nın değeri direk kopyalanmıyor, a'nın referans ettiği bellekteki yeri gösteriyor
a.push (4); // a değerine 4 eklenince direk b de 4ü göstericek çünkü bu 4 a nın referans ettiği bellekteki kısıma eklenmiş oluyor.

//yani referanslar aslında bellekteki bir yeri gösteren veri tipleridir.













,






