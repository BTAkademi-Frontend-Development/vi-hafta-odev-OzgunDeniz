let i = 0 ;
// while(i<10){
//     console.log(i); //bu bir Sonsuz Döngüdür, i'nin değeri hiç artmayacağı için
// }

while (i<10){
    console.log (i);
    i++; //i=i+1 , i+=1
}

let i = 10 ;

while (i>0){
    console.log(i);
    i--; // i=i+1 , i-=1
}

while(i>0){
    console.log(i);
    i-=2;
}

//Döngüler içinde kullanılan break ve continue;

let i = 0 ;
while (i<10){
    console.log(i);
    if (i == 5){
        break ;
    }; 
    i++;
}
// Döngü 5'e ulaşınca break döngüyü kırıp sonlanmasını sağlıyor.

while (i<10){   
    if( i == 3 || i == 5){
        continue;
    };
    console.log(i);
    i++; }
    
    /*Sonsuz Döngü : i arttırılmadan if bloğuna girdiği için i değeri  
3'e kadar yazdırılıp sonrasında sürekli continue ya takılıp başa dönecek*/


while (i<10){   
   if( i == 3 || i == 5){
        i++;
        continue;
    };
    console.log(i);
     }  //bu şekilde 3 ve 5 sayılarını atlayarak 9a kadar veriyor.


// For Döngüleri 

const langs = ["JavaScript","Java","Python"];

// //Array'ın değişkenleri üzerinde tek tek gezinmek istersek ;
let index = 0;   //0. indexten başlaması için,

while (index<langs.length){
    console.log(langs[index]);
    index++;
}

// //Bu yapının aynısını For döngüsü ile de kurabiliriz;

// /*for döngüsünün yapısı ; 3 kısımdan oluşur;
// for  (değişkenimizi tanımladığımız yer, döngü koşulu , arttırma işlemi)
// **arttırma işlemi , for döngüsü döngü block'unu bittikten sonra otomatik olarak arttırsın diye)*/

for (let index = 0 ; index<langs.length; index++){
    console.log (langs[index]);
};

// //ForEach Metodu : her bir eleman üzerinde tek tek gezinmek için ;
langs.forEach(function(lang){
    console.log(lang);
});

// //değişkenlerin yanlarına indexlerini de yazdırmak istersek ;
langs.forEach(function(lang,index){
    console.log(lang,index);
});

// //For in Döngüsü ; objedeki her bir property üzerinden gezinicek ;

const user = {
    name: "Özgün Deniz",
    age : 25 ,
};

for (let key in user){
    console.log(key);
}

//Sonuç olarak name ve age yazdı consola,
//bu propertylere karşılık gelecek değerleri de yazdırmak istersek ;
for (let key in user){
    console.log(key,user[key]);
}

//For of Döngüsü ;
//for of döngüsü string ile ;

const langs = ["JavaScript","Java","Python"];

for (let value of langs){
    console.log(value);
}

let string = "boo";
for (let value of string){
    console.log(value);
}
 //herbir harfi ayrı ayrı consola yazdırmamızı sağladı.

// //For of döngüsü numbers ile ; //numaraları tek tek yazdırıcak;
// const numbers =[1,2,3,4]

for (let value of numbers){
    console.log(value);
}
// //her bir number'a +5 ekletmek istersek ;

for (let value of numbers){
    value+=5;
    console.log(value);  
}
