class caixa {
    distino= document.body
    atributos=`display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    position:fixed;
    height: 100vh;
    position: fixed;
    background-color: rgb(0,0,0,0.7);`;
    div = document.createElement("div");
    
    mostrar(){
        this.div = document.createElement("div");
        this.div.setAttribute("style",this.atributos);
        this.distino.prepend(this.div);
        this.alerta =document.createElement("div");
        this.alerta.setAttribute("class","alerta");
        
        this.div.appendChild(this.alerta);
        this.alerta.innerHTML="<h1>Está funcionalidade ainda não esta activa<h1>";
        this.div.addEventListener("click",()=>{

            this.div.remove();
        })
    }

    
}




const galeria = document.querySelector("#ga");
galeria.addEventListener("click",()=>{
   let a = new caixa
   a.mostrar();
    //console.log(a.atributos);
})