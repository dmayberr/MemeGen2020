const previewDiv = document.getElementById('previewDiv');
const form = document.querySelector('form');
const topTextInput = document.querySelector('input[name="topTextInput"]');
const bottomTextInput = document.querySelector('input[name="bottomTextInput"]');
const topText_btn = document.getElementById('topText_btn');
const bottomText_btn = document.getElementById('bottomText_btn');
const bottomTextSize = document.getElementById('bottom-text-size');
const topTextSize = document.getElementById('top-text-size');

bottomTextSize.addEventListener('input', function(){
    let bottom = document.querySelector('.bottom');
    bottom.style["font-size"] = this.value + "px";
});

topTextSize.addEventListener('input', function(){
    let top = document.querySelector('.top');
    top.style["font-size"] = this.value + "px";
});

document.getElementById('img_btn').onclick = function (e) {
    e.preventDefault();
    
    
    const imgInput = document.querySelector('input[name="imgInput"]').files[0];
    let newImg = new Image(); 
    const reader = new FileReader();
    reader.onload = function(e){
        newImg.src = e.target.result;
        previewDiv.appendChild(newImg);
        previewDiv.height = newImg.height;
    }
    reader.readAsDataURL(imgInput);
       
}

document.getElementById('topText_btn').onclick = function (e) {
    e.preventDefault();
    let topImgText = document.createElement('div');
    topImgText.setAttribute('class', 'top');
    topImgText.innerText = topTextInput.value;
    previewDiv.appendChild(topImgText);
}

document.getElementById('bottomText_btn').onclick = function (e) {
    e.preventDefault();
    let bottomImgText = document.createElement('div');
    bottomImgText.setAttribute('class', 'bottom');
    bottomImgText.innerText = bottomTextInput.value;
    previewDiv.appendChild(bottomImgText);
}



document.querySelector('form').onsubmit = function (e) {
    e.preventDefault();

    const meme = previewDiv.innerHTML;

    const newMeme = document.createElement('div');
    newMeme.setAttribute('class', 'previewContainer');
    newMeme.style.maxWidth = "600px";
    newMeme.style.maxHeight = "auto";
    newMeme.innerHTML = meme;

    const savedSection = document.querySelector('.savedSection');
    savedSection.append(newMeme);

    previewDiv.innerHTML = '';    
    form.reset();

}