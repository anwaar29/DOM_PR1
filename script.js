var img=document.createElement('img');
function handlebtn(){
      let z=document.getElementById('dropid').value;
     switch(true){ 
        case(z==1):
        img.src="https://www.bollywoodhungama.com/wp-content/uploads/2022/09/574f7b65-6f79-4245-bb17-6df622da1d3d.jpg";
        document.getElementById('cont').appendChild(img)
        break;
        case(z==2):
        img.src="https://media1.popsugar-assets.com/files/thumbor/tS6c3oXAC7--Nm9XFJWzNWxGgFI/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/07/01/076/n/46207611/tmp_YF8Suz_217bdaf4519e21ea_MCDAVEN_EC254.jpg";
        document.getElementById('cont').appendChild(img)
        break;
        case(z==3):
        img.src="https://c.ndtvimg.com/2022-04/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22.jpg";
        document.getElementById('cont').appendChild(img)
        break;
        case(z==4):
        img.src="https://www.anytimefitness.co.in/wp-content/uploads/2021/07/022A5999-1024x683-min-1.jpg";
        document.getElementById('cont').appendChild(img)
        break;
        case(z==5):
        img.src="https://images.everydayhealth.com/homepage/health-topics-2.jpg?sfvrsn=757370ae_2";
        document.getElementById('cont').appendChild(img);
        break;
        default:
           console.log("hyy")
     }

}

function handlebtn2(){
   let z=document.getElementById('heigth').value;
   img.setAttribute('height',`${z}`)
}
function handlebtn3(){
   let z=document.getElementById('width').value;
   img.setAttribute('width',`${z}`)
}
function handlebtn4(){
   let z=document.getElementById('radius').value;
   img.style.borderRadius=`${z}`
   
}
function handlebtn5(){
   let z=document.getElementById('reverse').value;
   let x=z.split('')
   // console.log(x.reverse());
   document.getElementById('str1').innerHTML=x.reverse().join('')   
}
