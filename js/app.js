// dasboard-functionality
document.querySelectorAll('.side-bar-items a').forEach((link)=>{
    link.addEventListener('click',()=>{

        let clickedlink=link.getAttribute('href');
        for (var i=1;i<=4;i++){
            if (clickedlink!=`#content-item-${i}`){
                console.log(`#content-item-${i}`);
                document.querySelector(`#content-item-${i}`).classList.add('fadeout')
            }
            else{
                document.querySelector(clickedlink).classList.toggle('fadeout');
            }
        }
     

    });
});


// profile section

document.querySelector('#edit-info-btn').addEventListener('click',()=>{
    document.querySelectorAll('.form-item input').forEach((input)=>{
        input.removeAttribute('readonly');

    });
    document.querySelector('#profile-detail-submit').removeAttribute('style')
    document.querySelector('#profile-image-change').style.display='flex'

});
