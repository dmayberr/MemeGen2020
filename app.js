// const previewDiv = document.getElementById('previewDiv');
// const form = document.querySelector('form');
// const topTextInput = document.querySelector('input[name="topTextInput"]');
// const bottomTextInput = document.querySelector('input[name="bottomTextInput"]');
// const topText_btn = document.getElementById('topText_btn');
// const bottomText_btn = document.getElementById('bottomText_btn');
let previewDiv, form, topText_btn, topTextInput, bottomText_btn, bottomTextInput, imgInput;

// document.getElementById('img_btn').onclick = function (e) {
//     e.preventDefault();
//     const imgInput = document.querySelector('input[name="imgInput"]');
//     let newImg = new Image();
//     newImg.setAttribute('class', 'newImg');    
//     newImg.src = imgInput.value;  
//     previewDiv.appendChild(newImg); 
//     previewDiv.style.height = 0;     
// }

// document.getElementById('topText_btn').onclick = function (e) {
//     e.preventDefault();
//     let topImgText = document.createElement('div');
//     topImgText.setAttribute('class', 'top');
//     topImgText.innerText = topTextInput.value;
//     previewDiv.appendChild(topImgText);
// }

// document.getElementById('bottomText_btn').onclick = function (e) {
//     e.preventDefault();
//     let bottomImgText = document.createElement('div');
//     bottomImgText.setAttribute('class', 'bottom');
//     bottomImgText.innerText = bottomTextInput.value;
//     previewDiv.appendChild(bottomImgText);
// }

function init() {
    form = document.querySelector('form');
    previewDiv = document.getElementById('previewDiv');
    const topTextInput = document.querySelector('input[name="topTextInput"]');
    const bottomTextInput = document.querySelector('input[name="bottomTextInput"]');
    const topText_btn = document.getElementById('topText_btn');
    const bottomText_btn = document.getElementById('bottomText_btn');
    imgInput = document.querySelector('input[name="imgInput"]');

    form.addEventListener('submit', function(e){
        e.preventDefault();
        const target = e.target;   
        
        let reader = new FileReader();
        reader.onload = function(){
            let img = new Image;
            img.src = reader.result;
            reader.readAsDataURL();
            
            
        }
        
        


        

    });
}

function previewImage(img){      
    previewDiv.width = img.width;
    previewDiv.height = img.height;

    addImage.addEventListener('click', function(e){
      e.preventDefault();

      previewDiv.appendChild('img');
    });
    
    
   
    
}


init();
