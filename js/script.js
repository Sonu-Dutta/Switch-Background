function changeBG(bg){
    document.body.style.background=bg;
    let txt=document.getElementsByClassName("text");
    if(bg=='url(/media/b3.jpeg)'){
        for(let elem of txt){
            elem.style.color="darkblue";
        }
    }
    else{
        for(let elem of txt){
            elem.style.color="black";
        }
    }
}