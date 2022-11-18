// function changeRoute(){
//     let hashTag = window.location.hash;
//     let pageID = hashTag.replace("#","");
//     // console.log(hashTag + " " + pageID);
//     if(pageID != ""){
//     $.get(`pages/${pageID}/${pageID}.html`, function(data){
//         // console.log("data" + data);
//         $("#app").html(data);
//     })
//   }else{
//     $.get(`pages/home/home.html`, function(data){
//         // console.log("data" + data);
//         $("#app").html(data);
//     })
//   }
// } 

// function initURLListener(){
//     $(window).on("hashchange", changeRoute);
//     changeRoute();
// }

function initListener(){
    $(".bars").click(function(e){
        $(".bars").toggleClass("active");
        $(".links").toggleClass("active");
    });

    $(".links a").click(function(e){
        $(".bars").toggleClass("active");
        $(".links").removeClass("active");
    });
    
}
// var GEAR = [
//     {gearTitle: "Palante Pack V2",
//     gearImage: "pack.png",
//     gearBriefDescription: "At 16.8oz, the frameless v2 is the standard for comfortably carrying light, low volume gear. It's designed with the first bottom pocket as well as integrated shoulder strap pockets to carry what you need access to.",
//     gearDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ligula ut purus congue feugiat. Proin eget ultricies purus, nec sodales eros. Proin congue in libero in faucibus. Donec vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ligula ut purus congue feugiat. Proin eget ultricies purus, nec sodales eros. Proin congue in libero in faucibus. Donec vel. <br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ligula ut purus congue feugiat. Proin eget ultricies purus, nec sodales eros. Proin congue in libero in faucibus.Donec vel.",
//     gearPrice: "$240",
//     },
//     {gearTitle: "Borah Tarp",
//     gearImage: "tarp.png",
//     gearBriefDescription: "With a weight of 9.1oz, this 7'x9' tarp made from 20d Xenon Silpoly gives you flexibility in your setup, and allow for many different pitching options. Comes with 12 perimeter tie outs and bivy loops at ridge ends.",
//     gearDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ligula ut purus congue feugiat. Proin eget ultricies purus, nec sodales eros. Proin congue in libero in faucibus. Donec vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ligula ut purus congue feugiat. Proin eget ultricies purus, nec sodales eros. Proin congue in libero in faucibus. Donec vel. <br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ligula ut purus congue feugiat. Proin eget ultricies purus, nec sodales eros. Proin congue in libero in faucibus.Donec vel.",
//     gearPrice: "$102",
//     },
//     {gearTitle: "Sonic Stakes",
//     gearImage: "stakes.png",
//     gearBriefDescription: "These Sonic Stakes have a Y-Beam shape which gives them great holding power in a small package. The three-sided design also gives them good bend resistance for an ultralight stake. The price of aluminum beats titanium or carbon.",
//     gearDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ligula ut purus congue feugiat. Proin eget ultricies purus, nec sodales eros. Proin congue in libero in faucibus. Donec vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ligula ut purus congue feugiat. Proin eget ultricies purus, nec sodales eros. Proin congue in libero in faucibus. Donec vel. <br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ligula ut purus congue feugiat. Proin eget ultricies purus, nec sodales eros. Proin congue in libero in faucibus.Donec vel.",
//     gearPrice: "$2",
//     },
//     {gearTitle: "NeoAir Xtherm",
//     gearImage: "xtherm.png",
//     gearBriefDescription: "Crafted for mountaineering, winter camping and backpacking, the Therm-a-Rest NeoAir Xtherm sleeping pad delivers warmth and lightweight performance to make cold outdoor nights cozy and comfortable. ",
//     gearDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ligula ut purus congue feugiat. Proin eget ultricies purus, nec sodales eros. Proin congue in libero in faucibus. Donec vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ligula ut purus congue feugiat. Proin eget ultricies purus, nec sodales eros. Proin congue in libero in faucibus. Donec vel. <br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ligula ut purus congue feugiat. Proin eget ultricies purus, nec sodales eros. Proin congue in libero in faucibus.Donec vel.",
//     gearPrice: "$230",
//     },
//     {gearTitle: "Swiss Army Classic",
//     gearImage: "knife.png",
//     gearBriefDescription: "The lightweight, all-purpose Swiss Army Classic Knife includes scissors, blade, screwdriver, nail file, tweezers and a toothpick.",
//     gearDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ligula ut purus congue feugiat. Proin eget ultricies purus, nec sodales eros. Proin congue in libero in faucibus. Donec vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ligula ut purus congue feugiat. Proin eget ultricies purus, nec sodales eros. Proin congue in libero in faucibus. Donec vel. <br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ligula ut purus congue feugiat. Proin eget ultricies purus, nec sodales eros. Proin congue in libero in faucibus.Donec vel.",
//     gearPrice: "$22",
//     },
//     {gearTitle: "20° Down Quilt",
//     gearImage: "quilt.png",
//     gearBriefDescription: "The Enigma Sleeping Quilt is our lightest and most minimalist sleeping quilt. With a completely sewn-closed footbox, the Enigma is the perfect ultralight quilt for those who always get cold feet. Exceptionally warm and extraordinarily light.",
//     gearDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ligula ut purus congue feugiat. Proin eget ultricies purus, nec sodales eros. Proin congue in libero in faucibus. Donec vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ligula ut purus congue feugiat. Proin eget ultricies purus, nec sodales eros. Proin congue in libero in faucibus. Donec vel. <br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ligula ut purus congue feugiat. Proin eget ultricies purus, nec sodales eros. Proin congue in libero in faucibus.Donec vel.",
//     gearPrice: "$330",
//     },
//     {gearTitle: "Sawyer Squeeze",
//     gearImage: "sawyer.png",
//     gearBriefDescription: "The Sawyer Squeeze Water Filter has a field weight of only 3 oz., and it makes filtering water as simple as filling a pouch and squeezing water into your mouth. No pills, no pumps and no wait time.",
//     gearDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ligula ut purus congue feugiat. Proin eget ultricies purus, nec sodales eros. Proin congue in libero in faucibus. Donec vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ligula ut purus congue feugiat. Proin eget ultricies purus, nec sodales eros. Proin congue in libero in faucibus. Donec vel. <br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ligula ut purus congue feugiat. Proin eget ultricies purus, nec sodales eros. Proin congue in libero in faucibus.Donec vel.",
//     gearPrice: "$39",
//     },
//     {gearTitle: "Toaks 650ml Pot",
//     gearImage: "toaks.png",
//     gearBriefDescription: "With a capacity well worth its miniscule 2.1 oz. weight, the TOAKS Light Titanium 650ml pot boils 2.75 cups of water—great for solo ultralight backpackers. ",
//     gearDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ligula ut purus congue feugiat. Proin eget ultricies purus, nec sodales eros. Proin congue in libero in faucibus. Donec vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ligula ut purus congue feugiat. Proin eget ultricies purus, nec sodales eros. Proin congue in libero in faucibus. Donec vel. <br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ligula ut purus congue feugiat. Proin eget ultricies purus, nec sodales eros. Proin congue in libero in faucibus.Donec vel.",
//     gearPrice: "$37",
//     },
//     {gearTitle: "MSR PocketRocket",
//     gearImage: "stove.png",
//     gearBriefDescription: "The next-generation MSR PocketRocket 2 backpacking stove takes everything good about the celebrated original and makes it even better. It's lighter weight and smaller, and fits a wider range of pots.",
//     gearDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ligula ut purus congue feugiat. Proin eget ultricies purus, nec sodales eros. Proin congue in libero in faucibus. Donec vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ligula ut purus congue feugiat. Proin eget ultricies purus, nec sodales eros. Proin congue in libero in faucibus. Donec vel. <br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ligula ut purus congue feugiat. Proin eget ultricies purus, nec sodales eros. Proin congue in libero in faucibus.Donec vel.",
//     gearPrice: "$50",
//     },
//     {gearTitle: "Nitecore NU25",
//     gearImage: "nitecore.png",
//     gearBriefDescription: "Get ready for one of the most versatile and compact headlamps NITECORE offers. The NITECORE NU25 headlamp packages three outputs (white/high CRI and red) into an ultra lightweight body you can wear comfortably for hours on end.",
//     gearDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ligula ut purus congue feugiat. Proin eget ultricies purus, nec sodales eros. Proin congue in libero in faucibus. Donec vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ligula ut purus congue feugiat. Proin eget ultricies purus, nec sodales eros. Proin congue in libero in faucibus. Donec vel. <br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit ligula ut purus congue feugiat. Proin eget ultricies purus, nec sodales eros. Proin congue in libero in faucibus.Donec vel.",
//     gearPrice: "$37",
//     }
// ];

// function loadData(){
//     $.each(GEAR,function(index, gear){
//         $("#app").append(`
//     <div id="${index}" class="gearContainer">
//         <div class="browseImage">
//             <img src="images/${gear.gearImage}" alt="${gear.gearTitle}" />
//         </div>
//         <div class="browseContentContainer">
//             <div class="title">${gear.gearTitle}</div>
//             <div class="browseContent">
//                 ${gear.gearBriefDescription}
//             </div>
//             <div class="price">${gear.gearPrice}</div>
//         </div>
//   </div>`);
//     });
//     initObjectListeners();
// }

// function initObjectListeners(){
//     $(".gearContainer").click(function(e){
//         let gearIndex = e.currentTarget.id;
//         $("#app").html(`
//         <div class="gear">
//           <div class="browseImage">
//             <img src="images/${GEAR[gearIndex].gearImage}" alt="${GEAR[gearIndex].gearTitle}" />
//           </div>
//           <div class="browseContentContainer">
//             <div class="title">${GEAR[gearIndex].gearTitle}</div>
//             <div class="browseContent">
//             ${GEAR[gearIndex].gearDescription}
//             </div>
//             <div class="price">${GEAR[gearIndex].gearPrice}</div>
//             <div class="close">CLOSE</div>
//           </div>
//         </div>`);
//         addCloseListener();
//     });
// }

// function addCloseListener(){
//     $(".close").click(function(){
//         $("#app").html("");
//         loadData();
//     })
// }
var LISTS = [
    {name:"Fruits",
    items: [
        {
            name: "oranges",
            checked: false
        },
        {
            name: "apples",
            checked: false
        },
        {
            name: "strawberries",
            checked: false
        },
        {
            name: "blueberries",
            checked: false
        },
        {
            name: "pears",
            checked: false
        },
        {
            name: "bananas",
            checked: false
        },
        {
            name: "cherries",
            checked: false
        },
        {
            name: "watermelon",
            checked: false
        },
        {
            name: "peaches",
            checked: false
        },
        {
            name: "apricots",
            checked: false
        }
    ]},
    {name:"Vegetables",
    items: [
        {
            name: "carrots",
            checked: false
        },
        {
            name: "spinach",
            checked: false
        },
        {
            name: "potatoes",
            checked: false
        },
        {
            name: "turnips",
            checked: false
        },
        {
            name: "squash",
            checked: false
        },
        {
            name: "peppers",
            checked: false
        },
        {
            name: "onions",
            checked: false
        },
        {
            name: "celery",
            checked: false
        },
        {
            name: "peas",
            checked: false
        },
        {
            name: "beets",
            checked: false
        }
    ]},
    {name:"Grains",
    items: [
        {
            name: "barley",
            checked: false
        },
        {
            name: "rice",
            checked: false
        },
        {
            name: "buckwheat",
            checked: false
        },
        {
            name: "bulgar",
            checked: false
        },
        {
            name: "millet",
            checked: false
        },
        {
            name: "oatmeal",
            checked: false
        },
        {
            name: "pasta",
            checked: false
        },
        {
            name: "bread",
            checked: false
        },
        {
            name: "crackers",
            checked: false
        },
        {
            name: "popcorn",
            checked: false
        }
    ]},
    {name:"Proteins",
    items: [
        {
            name: "beef",
            checked: false
        },
        {
            name: "tofu",
            checked: false
        },
        {
            name: "chicken",
            checked: false
        },
        {
            name: "pork",
            checked: false
        },
        {
            name: "beans",
            checked: false
        },
        {
            name: "fish",
            checked: false
        },
        {
            name: "seitan",
            checked: false
        },
        {
            name: "goat",
            checked: false
        },
        {
            name: "turkey",
            checked: false
        },
        {
            name: "duck",
            checked: false
        }
    ]},
    {name:"Cereals",
    items: [
        {
            name: "cherrios",
            checked: false
        },
        {
            name: "fruit loops",
            checked: false
        },
        {
            name: "frosted flakes",
            checked: false
        },
        {
            name: "coco puffs",
            checked: false
        },
        {
            name: "corn flakes",
            checked: false
        },
        {
            name: "raisin bran",
            checked: false
        },
        {
            name: "lucky charms",
            checked: false
        },
        {
            name: "rice krispies",
            checked: false
        },
        {
            name: "cinnamon toast crunch ",
            checked: false
        },
        {
            name: "trix",
            checked: false
        }
    ]},
    {name:"Drinks",
    items: [
        {
            name: "milk",
            checked: false
        },
        {
            name: "orange juice",
            checked: false
        },
        {
            name: "water",
            checked: false
        },
        {
            name: "fruit punch",
            checked: false
        },
        {
            name: "coffee",
            checked: false
        },
        {
            name: "tea",
            checked: false
        },
        {
            name: "apple juice",
            checked: false
        },
        {
            name: "soy milk",
            checked: false
        },
        {
            name: "almond milk",
            checked: false
        },
        {
            name: "beet juice",
            checked: false
        }
    ]},
    {name:"Soups",
    items: [
        {
            name: "chicken noodle",
            checked: false
        },
        {
            name: "lentil",
            checked: false
        },
        {
            name: "curry",
            checked: false
        },
        {
            name: "vegetable",
            checked: false
        },
        {
            name: "chili",
            checked: false
        },
        {
            name: "lemon rice",
            checked: false
        },
        {
            name: "pozole",
            checked: false
        },
        {
            name: "cream of mushroom",
            checked: false
        },
        {
            name: "broccoli cheddar",
            checked: false
        },
        {
            name: "potato",
            checked: false
        }
    ]},
    {name:"Condiments",
    items: [
        {
            name: "ketchup",
            checked: false
        },
        {
            name: "mayo",
            checked: false
        },
        {
            name: "mustard",
            checked: false
        },
        {
            name: "ranch",
            checked: false
        },
        {
            name: "wasabi",
            checked: false
        },
        {
            name: "sriracha",
            checked: false
        },
        {
            name: "salsa",
            checked: false
        },
        {
            name: "hummus",
            checked: false
        },
        {
            name: "aioli",
            checked: false
        },
        {
            name: "honey mustard",
            checked: false
        }
    ]},
    {name:"Snacks",
    items: [
        {
            name: "chips",
            checked: false
        },
        {
            name: "trail mix",
            checked: false
        },
        {
            name: "pretzels",
            checked: false
        },
        {
            name: "crackers",
            checked: false
        },
        {
            name: "popcorn",
            checked: false
        },
        {
            name: "jerky",
            checked: false
        },
        {
            name: "cookies",
            checked: false
        },
        {
            name: "dried fruit",
            checked: false
        },
        {
            name: "peanuts",
            checked: false
        },
        {
            name: "almonds",
            checked: false
        }
    ]},
    {name:"Cooking Tools",
    items: [
        {
            name: "pot",
            checked: false
        },
        {
            name: "pan",
            checked: false
        },
        {
            name: "spatula",
            checked: false
        },
        {
            name: "spoons",
            checked: false
        },
        {
            name: "knives",
            checked: false
        },
        {
            name: "forks",
            checked: false
        },
        {
            name: "ladle",
            checked: false
        },
        {
            name: "oven mit",
            checked: false
        },
        {
            name: "temp gauge",
            checked: false
        },
        {
            name: "plates",
            checked: false
        }
    ]},
    
]

function itemChecked(element,listIndex, itemIndex){
    $(element).parent().toggleClass("strike");
    let checkedValue = !LISTS[listIndex].items[itemIndex].checked;
    LISTS[listIndex].items[itemIndex].checked = checkedValue
    // console.log("checked ",LISTS);
}

function addItem(listIndex){
    let newItemName = $("#addItem").val();
    let newItemObj = {
        name: newItemName,
        checked: false,
    };
    LISTS[listIndex].items.push(newItemObj);
    loadListItems(listIndex);
}
// function addListItem(listIndex){
//     let newItemName = $("#addListItem").val();
//     let newItemObj = {
//         name: newItemName,
//     };
//     LISTS.push(newItemObj);
//     loadListItems(listIndex);
// }

function deleteItem(listIndex, index){
    LISTS[listIndex].items.splice(index,1);
    loadListItems(listIndex);
}

function loadListItems(listIndex){
    let listString = `<button onclick="loadLists()">BACK</button><ul>`
    $.each(LISTS[listIndex].items, function(index, item){
        listString += `<li id="${index}" class="${item.checked ? "strike" : ""}"><input ${item.checked ? (checked = "checked") : ""} type="checkbox" id="${index}" name="${item.name}" onclick="itemChecked(this,${listIndex}, ${index})">
        <span>${item.name}</span>
        <span class="delete" onclick="deleteItem(${listIndex}, ${index})">DELETE</span>
        </li>`;
     });
     listString += `</ul>
     <div class="addItemInput">
     <input id="addItem" type="text">
     <button onclick="addItem(${listIndex})">ADD ITEM</button>
     </div>`;
     $("#app").html(listString);
}

function loadLists(){
    let listString = "<ul>"
    $.each(LISTS,function(index, list){
       listString += `<li id="${index}" onclick="loadListItems(${index})">${list.name}
       <span class="right">Items: ${list.items.length}</span>
       </li>`;
    });
    listString += `</ul>`;
    $("#app").html(listString);
}

$(document).ready(function(){
    try{
        let app = firebase.app();
        initListener();
    }catch(error){
        console.log("error " + error);
    }
    
    // loadData();
});