
   
function produitSelect(){
   
    let params = new URLSearchParams(document.location.search.substring(1));
    let id = params.get("id")
    console.log(id);
   
    fetch("http://localhost:3000/api/cameras/"+id) //appel des données a l'api
    
    .then(function(res) {
        if (res.ok) {
            return res.json();
        }
    })
    .then(function(value) {
        console.log(value)
       
        
    let url= value.imageUrl;
    let nomCam= value.name;
    let prixProduit= value.price;
    let descriptionProduit= value.description;
    let lenseProduit= value.lenses;
    let idProduit= value._id;
    console.log(url, nomCam, prixProduit, descriptionProduit, lenseProduit,idProduit);

   produitImgSelect(value)
   produitNomSelect(value)
   produitPriceSelect(value)
   produitDescriptionSelect(value)
   produitLenseSelect(value)
  
    
                                            //execution des fonctions
    
    })
    
    .catch(function(err) {
        console.log("une erreure est survenue"); //reponse en cas d'erreur
        console.log(err);
    })}
    const produitImgSelect= (value) =>{            //affiche les images 
        let url= value.imageUrl;
        let imgCam = document.getElementById("appareil");
        imgCam.setAttribute("src",url);
    }
    
    const produitNomSelect= (value) =>{             //affiche le nom
        let nomCam= value.name;  
        let titre = document.getElementById("titre");
        titre.innerHTML += nomCam; 
    }
    
    const produitPriceSelect= (value) =>{              //affiche le prix
        let prixProduit= value.price;
        let prix = document.getElementById("prix");
        prix.innerHTML += prixProduit+"€";
    }
    
    const produitDescriptionSelect=(value)=>{            //affiche la description
        let descriptionProduit= value.description;
        let description = document.getElementById("description");
        description.innerHTML += descriptionProduit;
    }
    const produitLenseSelect= (value) =>{                      //affiche l'array des personnalisations
        let lenseProduit= value.lenses;
        let lenses =document.getElementById("persoProduit");
        lenses.innerHTML += "Modèles disponibles: "+lenseProduit;
    }

produitSelect()