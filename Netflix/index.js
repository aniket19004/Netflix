

// data of movies
let data=[
    { name:"Avenger",
      Rating: 7.2,
      Description:"The Marvel Studio Movie Produce in 2013. The One of the Best Action Comedy Movies",
      link :"https://www.youtube.com/embed/gonAaBYuB-g?si=8ylT6l4UdElIdjBl", 
      img:"data:image/jpeg;base64,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"
    },

    {
      name:"Jailer",
      Rating: 7.9,
      Description:"Jailer is a 2023 Indian Tamil-language action comedy film directed by Nelson Dilipkumar and produced by Kalanithi Maran of Sun Pictures.",
      link :"https://www.youtube.com/embed/xenOE1Tma0A?si=Q6YE_tSo4G7A8bBv", 
      img:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRqK3_nPn_8UHFtyOFgDtrx1d_DfmngcZ3qbTLHZq7vbIrrllSx"

    },
    {
        name:"K.G.F: Chapter 2",
        Rating: 8.3,
        Description:"KGF: Chapter 2 is a 2022 Indian Kannada-language period action film written and directed by Prashanth Neel",
        link :"https://www.youtube.com/embed/_7b1647tH74?si=kzPiWDwNm-2MZlz5", 
        img:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR-GJWOluiuP4BTtHHg6Kk68cuueul3mwQOMwueqol3kBMrT8c7"
  
      },
      {
        name:"OMG 2",
        Rating: 8.1,
        Description:"OMG 2 (or Oh My God 2) is a 2023 Indian Hindi-language comedy-drama film about sex education in Indian schools, written and directed by Amit Ra",
        link :"https://www.youtube.com/embed/Y6ZKXqM7HNQ?si=3P-RyeW5pNAAg2fM", 
        img:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQvj-ZPFM9lN1DdAX1UHdFl43dcOUkN3ql7l_9GJvGCW1e8Cr9p"
  
      },
      {
        name:"Gadar 2",
        Rating: 5.8,
        Description:"Gadar 2 is a 2023 Indian Hindi-language period action drama film directed and produced by Anil Sharma and written by Shaktimaan Talwar",
        link :"https://www.youtube.com/embed/vhwr4vc_GY0?si=3VeEEXirQ-POuaNm", 
        img:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQMpcz8flcJfM9fXOQwqaXMgzrXYh4Wxagqn5Pfyj-3hN-nm2IO"
  
      },
      {
        name:"Dream Girl 2",
        Rating: 5.9,
        Description:"Dream Girl 2 is a 2023 Indian Hindi-language comedy-drama film directed by Raaj Shaandilyaa and produced",
        link :"https://www.youtube.com/embed/dlC1tNsr-n8?si=SiqameJAMRb-ABep", 
        img:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ65kj439OUSduCSVdkVwQBSRprZO2W1_txKfgPKi7KTJDDo1L2"
  
      },
      {
        name:"RRR",
        Rating: 7.8,
        Description:"RRR is an entirely fictitious story incorporating the lives of two real-life Indian revolutionaries",
        link :"https://www.youtube.com/embed/f_vbAtFSEc0?si=yOfujhO9TfKP5Rjn", 
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG6L2WmlrU5r2HzTKoXTJC5DFyU9vMbUJ79Cp5P7RB5QEEnXkH"
  
      },
      {
        name:"Vikram",
        Rating: 8.3,
        Description:"Vikram is a 2022 Indian Tamil-language action thriller film written and directed by Lokesh Kanagaraj.",
        link :"https://www.youtube.com/embed/L4LWIXngIG0?si=rDRocEWkjXAOwxCX", 
        img:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRcywLT8os8ZXJb7n3hmSzrSzpnLIDNgHeIufdEvCprHyuxThul"
  
      },
      {
        name:"Pushpa: The Rise",
        Rating: 7.6,
        Description:"Pushpa: The Rise is a 2021 Indian Telugu-language action drama film written and directed by Sukumar",
        link :"https://www.youtube.com/embed/pKctjlxbFDQ?si=bYIEiIshjFGD5xs5", 
        img:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTfBsJnWMSk716p9HN_K8eqgNMpoiq2koPWy8pSgHUmj4JbwAd4"
  
      },
      {
        name:"Bhediya",
        Rating: 6.8,
        Description:"Bhediya ( transl. Wolf) is a 2022 Indian Hindi-language comedy horror film directed by Amar Kaushik. Produced by Dinesh Vijan",
        link :"https://www.youtube.com/embed/d_BPlvbw_ok?si=rC6_UeMPxMiLAjB9", 
        img:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRbZdsEQAYlJptQn2YZTVn4uUUz1-lYAJQoV0_gpCROaWdOUrBP"
  
      },
      {
        name:"Stree",
        Rating: 7.5,
        Description:"It stars Shraddha Kapoor and Rajkummar Rao alongside Pankaj Tripathi, Aparshakti Khurana and Abhishek Banerjee",
        link :"https://www.youtube.com/embed/gzeaGcLLl_A?si=SVThpvxz1fjr_v69", 
        img:"https://contentserver.com.au/assets/653486_stree_v8.jpg"
  
      },

]

// function create element in HTML Page
function showndata(data){
    let value=""

    for(let i=0;i<data.length;i++){
   
        value=value+ `<div id="movie">       
        <div>
        
        <div>

        <iframe  src="${data[i].link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        
        </div>

        <div>
            <h1> ${data[i].name}</h1>
            <p>IMDB Rating: ${data[i].Rating}</p>
            <p>  ${(data[i].Description).substring(0,80)}</p>
        </div>
        
        </div>
        
        <img src="${data[i].img}" alt="">
        
        </div>`;


  }

    
  document.getElementById("movies").innerHTML=value;


}

showndata(data);



let input=document.getElementById("input");
let searchicon=document.getElementById("search-icon");

// function if movie not found 

function Notfound(element){
    document.getElementById("movies").innerHTML=`<h1> ${element} Movie  is not Found</h1>`;
}


// function for Search
function getsearch(){
   
    if(input.value !=""){

        let  result=data.filter(function(el){
            return el.name.toUpperCase()==input.value.toUpperCase();
        })


     if(result.length==0){
        Notfound(input.value);
     }else{
        showndata(result);
     }

        
        

    }else{
        showndata(data);
    }
}


//    function for keydown
    function move(){
        let keydowndata;

        if(input.value==""){
            showndata(data);
        }else{

            keydowndata=data.filter(function(el){
                return el.name.toUpperCase().includes(input.value.toUpperCase())
            })

            if(keydowndata.length ==0){

               Notfound(input.value)
            }else{
                showndata(keydowndata)

            }
           
           
        }

    }

   

    
      

      

       


     








 

