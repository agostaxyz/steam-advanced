const currentUrl = window.location.href 
const appId = window.location.href.match(/\/app\/(\d+)\//)[1];

const steamlogo = "https://raw.githubusercontent.com/agostaxyz/steam-advanced/main/assets/steam.png";
const steamdblogo = "https://raw.githubusercontent.com/agostaxyz/steam-advanced/main/assets/steamdb.png";
const protondblogo = "https://raw.githubusercontent.com/agostaxyz/steam-advanced/main/assets/protondb.png";
const steamcelogo = "https://raw.githubusercontent.com/agostaxyz/steam-advanced/main/assets/steamce.png";

const category = document.querySelector("#category_block");
category.insertAdjacentHTML('beforebegin', '<div id="displayBlock"></div>');


function displayBlock() {
    document.getElementById('displayBlock').innerHTML = '<div class="block responsive_apppage_details_left steam_advanced_tab"><a href="steam://openurl/'+currentUrl+'"><img class="steam_advanced_icon" src="'+steamlogo+'" alt="open in steam"></a><a href="https://steamdb.info/app/'+appId+'/"><img class="steam_advanced_icon" src="'+steamdblogo+'" alt="open in SteamDB"></a><a href="https://www.protondb.com/app/'+appId+'"><img class="steam_advanced_icon" src="'+protondblogo+'" alt="open in ProtonDB"></a><a href="https://www.steamcardexchange.net/index.php?gamepage-appid-'+appId+'"><img class="steam_advanced_icon" src="'+steamcelogo+'" alt="open in Steam Card Exchange"></a></div>'

    var element = document.querySelector(".steam_advanced_tab");
    if (element) {
      element.style.display = "flex";
      element.style.justifyContent = "center";
      element.style.alignItems = "center";
    }
    
    var images = document.querySelectorAll(".steam_advanced_tab a img");
    for (var i = 0; i < images.length; i++) {
        images[i].style.width = "48px";
        images[i].style.margin = "0px 10px";
    }

};
 
displayBlock();