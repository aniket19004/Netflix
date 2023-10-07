
// let userid="aniket";
// let password="Aniket19";

// if(userid=="aniket"){
//     if(password=="Aniket1"){
//         console.log("Login Successfully");
//     }else{
//         console.log("Wrong Password");
//     }
// }else{
//     console.log("Userid not Found");
// }

let n=100;
let totalcount=0;


for(let i=1;i<n;i++){
    let count=0;
    for(let j=1;j<=i;j++){
        if(i%j==0){
            count++;
        }
    }if(count==2){
        totalcount++;
        console.log(i);
    }

}
console.log(totalcount);

