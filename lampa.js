class Lampa{
    constructor(elem, index){
        this.elem=elem;
        this.allapot = false;
        this.setSzin();
        this.index = index;

        this.elem.on("click", ()=>{
            this.setAllapot();
            this.kattintasTrigger();
            console.log(this);
        }); 
        
    }
    setAllapot(){
        this.allapot = !this.allapot;
        this.setSzin();
    }

    setSzin(){
        if(this.allapot){
            this.elem.css("background-color", "yellow");
        }else{
            this.elem.css("background-color", "red");
        }
    }
    kattintasTrigger(){
        let esemeny = new CustomEvent("lampaKapcsol", {detail:this});
        /* console.log("esemény kiváltva"); */
        window.dispatchEvent(esemeny);
    }


    
    
}