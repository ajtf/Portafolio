document.getElementById("btnExcusas").addEventListener("click", function(){
    
    let sujeto=["My grandma", "My son", "The car", "The police"];
    let verbo=["eat", "crush", "burn", "destroy"];
    let predi=["my lunch", "my car", "all my papers", "all the evidence"];
    let complemento=["in the room", "at the park", "in the street", "in my face"];

    let sujIndex = Math.floor(Math.random() * sujeto.length);
    let verIndex = Math.floor(Math.random() * verbo.length);
    let preIndex = Math.floor(Math.random() * predi.length);
    let compleIndex = Math.floor(Math.random() * complemento.length);

    document.getElementById("excusa").innerHTML = sujeto[sujIndex]+' '+verbo[verIndex]+' '+predi[preIndex]+' '+complemento[compleIndex];
});

  


