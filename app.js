const fileInput = document.querySelector('form input');
const downloadBtn = document.querySelector('form button');


downloadBtn.addEventListener('click', e => {
     e.preventDefault();
     fetchFile(fileInput.value);
});


function fetchFile(url){
    //fetching file and returning response as blob
    fetch(url).then(res => res.blob()).then(file => {
        //URL.createObjectURL creates a url of passed object
        let tempUrl = URL.createObjectURL(file);
        let aTag = document.createElement('a');
        aTag.href = tempUrl;
        aTag.download = url.replace(/^.*[\\\/]/, '');
        document.body.appendChild(aTag);
        aTag.click();//clicking <a> tag so the file download
        aTag.remove();// removing <a> tag once the file downloaded
    });
}