$(function(){
    //szülőelem és a sablon elem meghatározása
    //A sablon elem klónozása és a szülőelemhez csatolása 
    const szuloElem=$("article");
    const sablonElem=$(".lampa");
    const lampaTomb = [];
    
    const meret=9;
    


    for (let index = 0; index < meret; index++) {
        const ujElem = sablonElem.clone().appendTo(szuloElem);   
        const lampa = new Lampa(ujElem, index);
        lampaTomb.push(lampa); 
    }
    console.log(lampaTomb);
    sablonElem.remove();

    $(window).on("lampaKapcsol", (esemeny)=>{
        let elemID = esemeny.detail.index;
        let meret = 3;
        if(elemID>meret-1){
            lampaTomb[elemID-meret].setAllapot();
        }
        if(elemID < meret * meret - meret){
            lampaTomb[elemID+meret].setAllapot();
        }
        if(elemID % meret !== 0){
            lampaTomb[elemID-1].setAllapot();
        }
        if(elemID % meret !== meret - 1){
            lampaTomb[elemID+1].setAllapot();
        }
        
        
    });
  });