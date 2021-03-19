/*Bir programcı objesi oluşturalım ; 
programcının özellikleri isim, yaş,mail bildiği diller ve adress,
birde work adında metodu olsun ;
(**obje süslü parantez ile tanımlanır)*/

let value;

const programmer ={
    name: "Özgün Deniz",
    age : 25 ,
    email : "ozgundenz@gmail.com",
    langs : ["JavaScript","Python", "Java"],
     
    adress : {
        city : "İstanbul",
        street : "Kadıköy", //obje içinde obje bu şekilde yazılabilir.
    },


     work : function() {
     console.log ("programmer is working..");}, 
     //work programcıya ait bir metoddur ve genellikle metodlar, fonksiyonlardan oluşur.
 }

 value =programmer ; //konsolda bize objemizi gösterir.

//Oluşturduğumuz objenin ozelliklerine ulaşmak istersek ;

value = programmer.email ; //bize objemizin email özelliğini veriyor.
value = programmer["email"];  //bir başka yazım şekli.
value = programmer.langs; //bildiği dillere ulaşırız.
value = programmer.adress ; // adress özelliğini,
value = programmer.adress.city ; //city değerini,
value = programmer.adress.street; //street değerini verir.

//work metodundaki function'ı kullanmak istersek ;
programmer.work(); //programmer is working yazdırıcak konsola.

//Objelerden oluşan Array ;

const programmers = [
    {name : "Özgün Deniz" , age : 25} ,
    {name : "İlayda" , age : 32},   //2 özelliği olan obje yazıyoruz. (isim ve yaş)
];

value = programmers[0]; // programmersin 0. indexi ilk obje olduğu için onu consola yazıcak.;
value = programmers[0].name ; // Özgün Deniz değeri






 console.log(value);