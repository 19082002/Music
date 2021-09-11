var music=document.getElementById("ad");
 var progress=document.getElementById("progress");
 var prpl=document.getElementById("prpl");
 var time1=document.getElementById("time1");
 var p2=document.getElementById("p2");
 var show=document.getElementById("show");
 var title= document.getElementById("title");
 var p1= document.getElementById("p1");
 

var musicname=[
  "Aadat","Aagaz","Aankh Uthi Mohabbat Ne","Aatishbaazi","Ae dil bata","Akh Lad Jaave",
  "Bandeyaa","Barish (hume tumse payar kitna album)","Bawara Mann","Be dardi Se Pyaar Ka","Bewafa tera masoom"," Bimar dil",
  "Chitthi",
  "Dhadkan","Dhal Jaun Main","Dil Beparwah","Dil Chahte Ho"," Dil jaaniye","Dil Lauta Do Mera",
  "Ek Mulaqat",
  "Fakeera ghar aaja",
  "Gazab Ka Hai Din","Genda phool","Ghumsum chandni ho","Govind bolo",
  " Hai pyaar kya","Hai Teri MeherBaani","Haiya Ho","Hanjugam","Holi Biraj Ma","Humnava Mere",
  "Ishq karo dil se","Ittefaq Se Raat Baaki",    "Jaane kya hai tumse waasta",
  "Kaabil Hoon","Kaash tu mila hota","Kinna sona","Kisi Se Pyar Ho Jaye","Kiston","Kuch Din",
  "Lo Safar","Lut gaye","Main balak tu mata","Main Jis Din Bhula Du","Main janta hoon","Matvaare","Meherbani (Remix)","Meri tum ho",
  "Nayan"," Pehla Nasha Once Again","Pehle pyaar ka pehla gham","Pyaar toh tha",
  "Sambhaal rakhiyaan"," Samandar","Sawarne Lage","Shri krishna govind hare murari",
  "Shayad","Socha Hai","Sun Sun Sun Barsaat Ki Dhun",
  "Ta chuma","Taaron Ke Shehar","Tanha Tanha Ghum Ke Dhunde Dil","Telusaa Telusaa","The Humma Song",
  "Toh aagaye hum","Tujhe bhoolna toh chaaha","Tujhe Kitna Chahein Aur","Tujhe paane ko","Tum Hi Aana","Tum Se",
  "Ummeed hai"," Wafa Na Raas Aayi","Ye dua","Zindagi Kuch Toh Bata",
]
//  var musicname=["HOITO TOMARI JONNE","JHORNA JOL CHORIE"]
 var i=-1;
 var j=0;
 var cc=document.getElementById("cc");
 var m2=document.getElementById("m2");
 cc.style.display="none";

 function back(){
    cc.style.display="none";
     m2.style.display="block";
 }
 function nextpage(){
  cc.style.display="block";
  m2.style.display="none";
  if(i==-1){
    strt();
  }
 }
//  var as6='1.mp3';
//  var alist=[as6];
 
 function nxt(){
  progress.style.width=0+"%";
  j=0;
  if(i==-1)
  {
    music.src="2.mp3";
    i=1;
  }else
      i++;
      if(i==74){
        music.src="1.mp3";
        i=0;
      }
      else
   music.src=(i+1)+".mp3";
   music.load();   
   strt();  
 }
 function prev(){
  progress.style.width=0+"%";
  j=0;
     i--;
     if(i==-1){
     music.src="74.mp3";
     i=73;
     }
     if(i==-2){
      music.src="74.mp3";
      i=73;
     }
     else
     music.src=(i+1)+".mp3";
     music.load();
     strt();
 }
 function press(no){
   j=0;
  progress.style.width=0+"%";
  m2.style.display="none";
  cc.style.display="block";
  i=no-1;
  music.src=no+".mp3"
  music.load();
  strt(); 
}

 function strt(){
   if(i==-1){
   music.src="1.mp3";
  i=0;}
    if(j%2==0){
     music.play();
document.getElementById('b2').innerHTML="&#x23f8"
document.getElementById('fb2').innerHTML="&#x23f8"
 document.getElementById('b2').style.backgroundColor="black"
document.getElementById('b2').style.color="burlywood"
document.getElementById('b2').style.fontSize="0.9cm"
// document.getElementById('fb2').style.backgroundColor="black"
document.getElementById('fb2').style.color="rgb(192, 9, 137)"
document.getElementById('fb2').style.fontSize="0.6cm"
document.getElementById('b2').style.alignItems="center";
document.getElementById('b2').style.justifyContent="center";
document.getElementById('b2').style.width="50px"
document.getElementById('b2').style.marginTop="-3%"
document.getElementById('b2').style.height="45px"

   }
     else{
      music.pause();
      document.getElementById('b2').innerHTML="&#9654"
      document.getElementById('fb2').innerHTML="&#9654"
      document.getElementById('b2').style.backgroundColor="black"
document.getElementById('b2').style.color="blue"
document.getElementById('b2').style.fontSize="1cm"
//document.getElementById('fb2').style.backgroundColor="black"
document.getElementById('fb2').style.color="blue"
document.getElementById('fb2').style.fontSize="0.8cm"
     }
   tt();
   j++;
 }
 function tt(){
     p1.innerHTML="&#119137 "+musicname[i]; 
     title.innerText=musicname[i]; 
 }
 music.ontimeupdate=function(e){
     progress.style.width=(music.currentTime*100/music.duration)+"%";
     if(music.currentTime==music.duration)
     nxt();
     var x=Math.floor(music.currentTime);
     var hr=Math.floor(x/3600);
     var min=Math.floor((x-(hr*3600))/60);
     var sec=Math.floor(x-(hr*3600)-(min*60));
     var q=music.duration;
     
     if(min<10)
     min="0"+min;
     if(sec<10)
     sec="0"+sec;
      var p=min+':'+sec;
     k(p);
     var y=Math.floor(music.duration);
     var hr1=Math.floor(y/3600);
     var min1=Math.floor((y-(hr1*3600))/60);
     var sec1=Math.floor(y-(hr1*3600)-(min1*60));
     
     if(min1<10)
     min1="0"+min1;
     if(sec1<10)
     sec1="0"+sec1;
      var q=min1+':'+sec1;
     dur(q);
    }
    function dur(q){
        time1.innerText=q;
    }
    function k(p){
        // console.log(music.duration);
        p2.innerText=p;
       
    }
 prpl.onclick=function(e){
 music.currentTime=((e.offsetX/prpl.offsetWidth)*music.duration);
 }
