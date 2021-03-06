function monPanier() {
    ///////////////////////RECUPERATION DONNEES DANS LE LOCALSTORAGE////////////////////////////
    const panier= JSON.parse(localStorage.getItem("panier"))

            if ( panier.length>0) {     //fonction a effectuer, affichage si le panier contient des articles
                panierNonVide()
      
            for (let i = 0; i < panier.length; i++) {       //boucle d'iteration, sur chaque produit du panier
                insereRow(i)
                createImg(panier,i)
                nomArticle(panier,i)
                createPlacePrix(panier,i)
                total(panier,i)
                id(panier,i)
                calcule(panier,i)
                affichageQte(panier, i)

        ////////////////////////////ajout suppression quantité article au click/////////////////:
                let btnSupUn= document.getElementById("moin"+i)     //supression
                btnSupUn.addEventListener("click",()=>{
                   let panier= JSON.parse(localStorage.getItem("panier"))
                   panier[i].qte --
                   let Newpanier= panier.filter(element=>element.qte>0)
                  localStorage.setItem("panier",JSON.stringify(Newpanier))
                    window.location.reload()
                })
                let btnPlus= document.getElementById("plus"+i)      //ajout
                btnPlus.addEventListener("click",()=>{
                   let panier= JSON.parse(localStorage.getItem("panier"))
                   panier[i].qte ++
                  localStorage.setItem("panier",JSON.stringify(panier))
                    window.location.reload()
               
            })
        }
            } else {
                panierVide()        //fonction si panier vide ou absent
            }
    
    //////////////////calcule du total////////////////
            const reducer = (accumulator, currentValue) => accumulator + currentValue
            let prixTotale= prixTotalPanier.reduce(reducer)
            let affichageTotal = document.getElementById("total")
            affichageTotal.innerHTML =("Prix total:"+ prixTotale + "€")
            localStorage.setItem("total",JSON.stringify(prixTotale))  
            
}
/////////////////////////////remplissage products avec id///////////////////
const id=(panier, i)=>{
    let productsId = panier[i].id
    products.push(productsId)

}
//////////////calcule du sous total des produits selon la quantité///////////
const calcule = (panier, i)=>{
    let qteArticle= panier[i].qte
    let prixArticle= panier[i].prix/100;
   
    let sousTotal = qteArticle*prixArticle
   return sousTotal
    
    
}
/////////////AFFICHAGE DES DONNEES////////////////////////////////:
const affichageQte=(panier,i)=>{        //////affichage quantité, calcul sous total et affichage de celui ci
    let qte= document.getElementById("qte"+i)
    let ssTotal= document.getElementById("sousTotal"+i)
   
    let sousTotal= calcule(panier,i)
    let qteArticle= panier[i].qte

    qte.innerHTML+=qteArticle
    ssTotal.innerHTML+=(sousTotal+"€")

}
    
const total=(panier,i)=>{       ///////////calcule sous total et l'envoi dans le tableau prix total panier

    let sousTotal=calcule(panier,i)

    let prixArticleDansLePanier = sousTotal
    prixTotalPanier.push(prixArticleDansLePanier)
}

const panierVide=()=>{                                  //affichage panier vide
    let p = document.createElement("p")
    p.classList.add("h2", "text-center")
    p.innerHTML= "Votre panier est vide"
    let detailPanier = document.getElementById("detailPanier")
    detailPanier.appendChild(p)
   
}

const panierNonVide=()=>{                                  //affichage panier avec contenu
    let p = document.createElement("p")
    p.classList.add("h2", "text-center")
    p.innerHTML= "Contenu de votre panier"
    let detailPanier = document.getElementById("detailPanier")
    detailPanier.appendChild(p)

}

const createRowPanier=(i)=>{                    //creation ligne de panier

    let row=document.createElement("div")
    row.classList.add("row")
    row.id=("rowPanier"+i)

    return row
}

const createColImagePanier=(i)=>{                   //création col pour image

    let colImgPanier=document.createElement("div")
    colImgPanier.classList.add("col-3")
    colImgPanier.id=("colImg"+i)

    return colImgPanier
}

const createImgPanier=(i)=>{                        // creation balise img panier
    
    let imgPanier=document.createElement("img")
    imgPanier.classList.add("img-thumbnail","w-auto")
    imgPanier.id=("image"+i)

    return imgPanier
}

const createColProduit=(i)=>{                       //creation div contenant titre et prix

    let colProduit=document.createElement("div")
    colProduit.classList.add("col-4")
    colProduit.id=("colPrixTitre"+i)

    return colProduit
}

const createListe=(i)=>{                    // creer la liste contenant le prix unitaire et le nom de lappareil
    let liste= document.createElement("ul")
    liste.classList.add("list-unstyled")
    liste.id=("articlePrixNom"+i)

    return liste
}

const createTitre=(i)=>{                    //creation li titre

    let titreProduit=document.createElement("li")
    titreProduit.classList.add("h3")
    titreProduit.id=("titre"+i)

    return titreProduit
}

const createPrix=(i)=>{                     //creation li prix

    let prixProduit=document.createElement("li")
    prixProduit.classList.add("h4")
    prixProduit.id=("prix"+i)

    return prixProduit
}

const createColQte=(i)=>{           // creation div pour affichage de la quantité
    let colQte = document.createElement("div")
    colQte.classList.add("col-3","text-center")
    colQte.id=("colQte"+i)
    return colQte
}

const createListeSousTotal=(i)=>{           // creation liste pour sous total et quantité
    let listeSousTotal= document.createElement("ul")
    listeSousTotal.classList.add("list-unstyled")
    listeSousTotal.id=("qteSousTotal"+i)

    return listeSousTotal
}

const createQte=(i)=>{                     //creation li qte

    let qte=document.createElement("li")
    qte.classList.add("h4")
    qte.id=("qte"+i)

    return qte
}

const createSousTotal=(i)=>{                     //creation li soustotal

    let sousTotal=document.createElement("li")
    sousTotal.classList.add("h4")
    sousTotal.id=("sousTotal"+i)

    return sousTotal
}

const btnSup = (i)=>{           //creation du bouton +
    let btnSup= document.createElement("button")
    btnSup.classList.add("btn","btn-light")
    btnSup.id=("plus"+i)
    btnSup.textContent += "+"
    return btnSup
}

const btnMin = (i)=>{           //creation du bouton -
    let btnMin= document.createElement("button")
    btnMin.classList.add("btn","btn-light")
    btnMin.id=("moin"+i)
    btnMin.textContent += "-"
    return btnMin
}



const createLigneComplete =(i)=>{       //appel des fonction pour crée toute la ligne 

    let row = createRowPanier(i)
    let colImg = createColImagePanier(i)
    let imgPanier = createImgPanier(i)
    let colProduit = createColProduit(i)
    let liste = createListe(i)
    let titre = createTitre(i)
    let prix = createPrix(i)
    let colQte = createColQte(i)
    let listeQte= createListeSousTotal(i)
    let qte = createQte(i)
    let sousTotal = createSousTotal(i)
    let plus = btnSup(i)
    let moin = btnMin(i)

    colImg.appendChild(imgPanier)
    colProduit.appendChild(liste)
    liste.appendChild(titre)
    liste.appendChild(prix)
    colQte.appendChild(listeQte)
    listeQte.appendChild(qte)
    listeQte.appendChild(sousTotal)
    
    row.appendChild(colImg)
    row.appendChild(colProduit)
    row.appendChild(moin)
    row.appendChild(colQte)
    row.appendChild(plus)
   
    return row
}

const insereRow=(i)=>{                  //insertion de la ligne complete dans le code html
    let detailPanier = document.getElementById("detailPanier")
    let row = createLigneComplete(i)
    detailPanier.appendChild(row)

}

const createImg= (panier, i) =>{            //attribut l'url de l'image dans l'element #appareil +i correspondant
    let img= panier[i].img;
    let imgCamera = document.getElementById("image"+i);
    imgCamera.setAttribute("src",img);
}

const nomArticle= (panier,i) =>{             //attribut le nom de la camera dans l'element #titre +i correspondant
    let nom = panier[i].nom;  
    let titre = document.getElementById("titre"+i);
    titre.innerHTML += nom
}

const createPlacePrix= (panier,i) =>{              //affiche le prix  dans l'element #prix +i correspondant
    let prixArticle= panier[i].prix/100;
    let prix = document.getElementById("prix"+i);
    prix.textContent = prixArticle +"€ "
}

let toutSupprimer = document.getElementById("corbeil")          //tout supprimer du panier dans storage
toutSupprimer.addEventListener("click",(e)=>{
e.preventDefault
localStorage.clear()
alert("Votre panier est vide")
window.location.reload()
})

    let formOK = true

const valider=($event)=>{
    const panier= JSON.parse(localStorage.getItem("panier"))
    let contact={           //object contact
        lastName: $event.target[3].value,
        firstName: $event.target[2].value,
        city: $event.target[6].value,
        address: $event.target[5].value,
        email: $event.target[4].value
        }
        /////////////////////VERIFICATION DU FORMULAIRE///////////////////////////////////
    let regex = /^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$/      
    let texte= /^[a-zA-Z]+$/
   
    if (texte.test(contact.lastName)&& texte.test(contact.firstName)&& texte.test(contact.city)&& regex.test(contact.email)) {
        
        formOK=true
    
   
    }else{
        formOK=false
    }
    if (!formOK) {
        $event.preventDefault()
        alert("verifiez le formulaire")
        
       
        
        
    }
    if (panier.length==0) {
        $event.preventDefault()
        alert("votre panier est vide")
        
    }
    if (formOK && panier.length>0 ) {
      
    ////////////////////ENVOI AU SERVEUR///////////////////////////////////////
    
        console.log('cest ok');
       
      fetch("http://localhost:3000/api/cameras/order",{
        method:"POST",
        body: JSON.stringify({contact,products}) ,
        headers: {"Accept": "application/json","Content-type": "application/json"}

        
        })
    .then(function(res) {
      if(!res.ok){
          throw Error(res);
      }
           return res.json();      //convertie les données json
        
    })
    .then(function(value) {
        /////////////////////ENVOI AU LOCAL STORAGE//////////////////////////////////
        localStorage.setItem("recap",JSON.stringify(value))
        location.href="./confirmation.html"
    })
    .catch(function(err) {
        console.log("une erreure est survenue") 
        console.log(err)                     //afiche la reponse dans la console en cas d'erreur
    })
    
       
    }
  //fonction a executer lorque le formulaire sera validé
}

formulaire.addEventListener("submit", valider)












    
let products=[]

let prixTotalPanier=[]

monPanier()
