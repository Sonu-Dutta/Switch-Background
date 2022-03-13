function changeBG(bg){
    document.body.style.background=bg;
    let txt=document.getElementsByClassName("text");
    if(bg=='linear-gradient(to bottom,#76b4bd , #58668b )'){
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