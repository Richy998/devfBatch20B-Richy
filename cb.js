let returns;
let pokelist = []
let bgc
var powers = []
  // - agregar un spinner de carga
 //- agregar lazy loading para las imagenes. Te puede servir la web api de intersection observer
class Pokemon{
  constructor (name, id, order, img, powers){
     this.name = name;
     this.id = id;
     this.order = order;
     this.src = img;
     this.powers = powers;
}
}

function getData(url, callback, search) {
      let url2 = url+search;
  let xhttp = new XMLHttpRequest();
  xhttp.open("GET", url2, true);
  xhttp.onreadystatechange = () => {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
         callback(JSON.parse(xhttp.responseText), null);

      } else {
        callback(null, "Algo salio mal intente mas tarde");
      }
    }
    
  };
  xhttp.send();
}

let name;
function run(){
  let ic = false;
  let cd = document.getElementById("CD")
  $(cd).empty()
  const url = "https://pokeapi.co/api/v2/pokemon/";
  let logs = (data,error)=>{
    if(!error){
      returns = Object.getOwnPropertyNames(data)
      
      powers=[]
      
      for(let i = 2; i--;){
        let obje = data.moves[i]
        let objt = obje.move.name
       // let pows = Object.getOwnPropertyNames(obje)
        
        powers.push(objt) 

      }
      var name = data.name; var id = data.id; var order = data.order; var src = data.sprites.front_default; var typep = data.types[0].type.name
      var pt = new Pokemon(name, id, order, src, powers, typep)  
  switch(typep){
    case"bug":
    bgc = "rgb(168, 244, 4)";
    break;
    case"water":
    bgc = "rgb(2, 140, 232)"
    break;
    case"psychic":
    bgc = "rgb(178, 2, 232)"
    break;
    case"normal":
    bgc = "rgb(172, 171, 173)"
    break;
    case"grass":
    bgc = "green"
    break;
    case"fighting":
    bgc = "rgb(244, 104, 4)"
    break;
    case"dark":
    bgc = ""
    break;
    case"electric":
    bgc = "rgb(198, 195, 24)"
      break;
    case"poison":
    bgc = "rgb(85, 52, 55)"
    break;
    case"steel":
    bgc = "rgb(89, 88, 88)"
    break;
    case"dragon":
    bgc = "rgb(190, 6, 6)"
    break;
    case"ghost":
     bgc = "rgb(226, 226, 226)"
    break;
    case"rock":
     bgc = "rgb(83, 77, 77)"
    break;
    case"ice":
     bgc = "rgb(158, 226, 244)"
    break;
    case"fire":
     bgc = "rgb(255, 119, 0)"
    break;
    case"fairy":
     bgc = "rgb(196, 13, 224)"
    break;
    case"flying":
     bgc = "rgb(107, 146, 202)"
    break;
      }

}



  let cont = document.createElement("div"); cont.classList.add("col-4", "pokecard-cont");
  let row = document.createElement("div");row.classList.add("row","card", "pt-3")
  let name_hp = document.createElement("div");name_hp.classList.add("name_hp");
  name_hp.innerHTML = `<h3>${name}    </h3>`
  let card_bg = document.createElement("div");card_bg.classList.add("card_bg"); 
  card_bg.style.backgroundColor = bgc;
  card_bg.style.backgroundImage = `url("${src}")`;
  let attacks = document.createElement("div"); attacks.classList.add("atacks")
  attacks.innerHTML = `<h5 style = "display: inline-block">MS: ${powers[0]}</h5> <h5 style = "display: inline-block">SS: ${powers[1]}</h5>`
  let evs = document.createElement("div"); evs.classList.add("evolutions")
  evs.innerText = `Type: ${typep} Weight: ${data.weight} `
  let mib = document.createElement("button")
  mib.classList.add("mib")
  mib.innerHTML = 'i'
  let mi = document.createElement("div")
  mi.classList.add("mil")
  mib.addEventListener("click",()=>{
    
    let stats = data.stats;
    for(let s = stats.length; s--;){
      var i_s = stats[s].base_stat;
      var n_s = stats[s].stat.name;
      var span = document.createElement("span")
      span.innerHTML = ` <em style = "text-decoration: underline; color: white; ">${n_s}:</em> <b style = "color: white">${i_s}</b> <br>`
      mi.append(span)
    }
    console.log(ic)
    if(!ic){
      cont.append(mi)
      console.log("appended")
      ic = true;
    }else{
      ic = false;
      $(mi).empty();

      cont.removeChild(mi);
    }  
  })
  cont.append(mib)
  cont.append(row)
      card_bg.append(attacks)
      row.append(name_hp, card_bg,evs)
      cd.append(cont)
    }
    
   
    let number = document.getElementById("number").value
    for(let i = 1; i <= number; i++ ){
      
        getData(url, logs, i)
    }
}

function search_by(){
  let ic = false;
  let sv = document.getElementById("searchpokemon").value
  const newurl = "https://pokeapi.co/api/v2/pokemon/";

  let search = (data,error) =>{
    if(!error){
      returns = Object.getOwnPropertyNames(data)
      
      powers=[]
      
      for(let i = 2; i--;){
        let obje = data.moves[i]
        let objt = obje.move.name
       // let pows = Object.getOwnPropertyNames(obje)
        
        powers.push(objt) 

      }

      
      var name = data.name; var id = data.id; var order = data.order; var src = data.sprites.front_default; var typep = data.types[0].type.name
      var pt = new Pokemon(name, id, order, src, powers, typep)  
  if(data.order !== 0) {console.log(pt)}
  switch(typep){
    case"bug":
    bgc = "rgb(168, 244, 4)";
    break;
    case"water":
    bgc = "rgb(2, 140, 232)"
    break;
    case"psychic":
    bgc = "rgb(178, 2, 232)"
    break;
    case"normal":
    bgc = "rgb(172, 171, 173)"
    break;
    case"grass":
    bgc = "green"
    break;
    case"fighting":
    bgc = "rgb(244, 104, 4)"
    break;
    case"dark":
    bgc = ""
    break;
    case"electric":
    bgc = "rgb(198, 195, 24)"
      break;
    case"poison":
    bgc = "rgb(85, 52, 55)"
    break;
    case"steel":
    bgc = "rgb(89, 88, 88)"
    break;
    case"dragon":
    bgc = "rgb(190, 6, 6)"
    break;
    case"ghost":
     bgc = "rgb(226, 226, 226)"
    break;
    case"rock":
     bgc = "rgb(83, 77, 77)"
    break;
    case"ice":
     bgc = "rgb(158, 226, 244)"
    break;
    case"fire":
     bgc = "rgb(255, 119, 0)"
    break;
    case"fairy":
     bgc = "rgb(196, 13, 224)"
    break;
    case"flying":
     bgc = "rgb(107, 146, 202)"
    break;
      }

}
if(name){
    let cd = document.getElementById("cds")
  $(cd).empty();
  let cont = document.createElement("div"); cont.classList.add("col-12", "pokecard-cont");
  let row = document.createElement("div");row.classList.add("row","card")
  let name_hp = document.createElement("div");name_hp.classList.add("name_hp");
  name_hp.innerHTML = `<h3>${name}    </h3>`
  let card_bg = document.createElement("div");card_bg.classList.add("card_bg"); 
  card_bg.style.backgroundColor = bgc;
  card_bg.style.backgroundImage = `url("${src}")`;
  let attacks = document.createElement("div"); attacks.classList.add("atacks")
  attacks.innerHTML = `<h5 style = "display: inline-block">MS: ${powers[0]}</h5> <h5 style = "display: inline-block">SS: ${powers[1]}</h5>`
  let evs = document.createElement("div"); evs.classList.add("evolutions")
  evs.innerText = `Type: ${typep} Weight: ${data.weight} `
 
  //console.log(stats)

  let mib = document.createElement("button")
  mib.classList.add("mib","mibs")
  mib.innerHTML = 'i'

  mib.addEventListener("click",()=>{

    let mi = document.createElement("div")
    mi.classList.add("mil")
    let stats = data.stats;
    console.log(stats)
    for(let s = stats.length; s--;){
      var i_s = stats[s].base_stat;
      var n_s = stats[s].stat.name;
      var span = document.createElement("span")
      
      span.innerHTML = ` <em style = "text-decoration: underline; color: white; ">${n_s}:</em> <b style = "color: white">${i_s}</b> <br>`
      mi.append(span)
    }
    
    if(!ic){
      cont.append(mi)
      ic = true;
    }else{
   $(mi).remove();

    }

  })
  cont.append(mib)
  cont.append(row)
      card_bg.append(attacks)
      row.append(name_hp, card_bg,evs)
      cd.append(cont)
}


    
  }

  getData(newurl,search,sv)

}

