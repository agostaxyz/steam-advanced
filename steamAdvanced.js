document.body.style.border = "5px solid red";

const currentUrl = window.location.href 
const appId = window.location.href.match(/\/app\/(\d+)\//)[1];

const steamlogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/2048px-Steam_icon_logo.svg.png";
const steamdblogo = "https://steamdb.info/static/logos/512px.png";
const protondblogo = "https://cdn-1.webcatalog.io/catalog/protondb/protondb-icon-filled-256.png?v=1675595106939";

const category = document.querySelector("#category_block");
category.insertAdjacentHTML('beforebegin', '<div id="displayBlock"></div>');


function displayBlock() {
    document.getElementById('displayBlock').innerHTML = '<div class="block responsive_apppage_details_left steam_advanced_tab"><a href="steam://openurl/'+currentUrl+'"><img class="steam_advanced_icon" src="'+steamlogo+'" alt="open in steam"></a><a href="https://steamdb.info/app/'+appId+'/"><img class="steam_advanced_icon" src="'+steamdblogo+'" alt="open in SteamDB"></a><a href="https://www.protondb.com/app/'+appId+'"><img class="steam_advanced_icon" src="'+protondblogo+'" alt="open in ProtonDB"></a></div>'

    var element = document.querySelector(".steam_advanced_tab");
    if (element) {
      element.style.display = "flex";
      element.style.justifyContent = "center";
      element.style.alignItens = "center";
    }
    
    var images = document.querySelectorAll(".steam_advanced_tab a img");
    for (var i = 0; i < images.length; i++) {
        images[i].style.width = "64px";
        images[i].style.margin = "0px 10px";

    }

};
 
displayBlock();