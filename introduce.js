// Scroll 
function scrollRight() {
    const gallery = document.getElementById('productGallery');
    const galleryWidth = gallery.clientWidth; // 獲取容器的總寬度
    gallery.scrollBy({
        top: 0,
        left: 0.99 * galleryWidth, // 捲動的實際距離
        behavior: 'smooth' // 平滑捲動
    });
}

function scrollLeft1() {
    const gallery = document.getElementById('productGallery');
    const galleryWidth = gallery.clientWidth; // 獲取容器的總寬度
    gallery.scrollBy({
        top: 0,
        left: -0.99 * galleryWidth, // 捲動的實際距離
        behavior: 'smooth' // 平滑捲動
    });
}

//手機上更換功能成點集顯示info

document.querySelectorAll('.product-item').forEach(item => {
    
    item.addEventListener('click', () => {
        let display = false;
        if(!display){
            // 切換 active 類
            item.classList.toggle('active');
            display = true;
        }else{
            // 切換 active 類
            item.classList.toggle('active',false);
            display = false;
        }
        
    });
});

// 統整的彩蛋解鎖函數
function unlockEgg() {
    updateEggCounter();
    showEggSection();
}

//增加彩蛋計數並宣告
let eggCount = 0;
let eggCounterdiv = document.getElementById('彩蛋計數器div');

function updateEggCounter() {
    eggCount++;  // 增加計數
    eggCounterdiv.innerHTML = "目前發現了" + eggCount + "個彩蛋!!";  // 更新顯示
    alert("恭喜你找到了一個彩蛋");
}
//顯示彩蛋計數器
let eggSectionState = false;
function showEggSection() {
    if (!eggSectionState) {
        let eggSectionA = document.getElementById("eggSectionA");
        let eggSectionH2 = document.getElementById("eggSectionH2");
        let eggSectionP = document.getElementById("eggSectionP");
        eggSectionA.innerHTML = "彩蛋計數器";
        eggSectionH2.innerHTML = "彩蛋計數器";
        eggSectionP.innerHTML = "你解鎖了隱藏區域:彩蛋計數器! 這裡有好多個彩蛋等者你去尋找，找完有獎勵喔!!";
        eggSectionState = true;
    }
}



//開頭問好
function enterName() {
    let nameButton= document.getElementById('nameButton');
    let name = prompt("親愛的賓客您好，怎麼稱呼呢!!");
    
    if (name !== null && name.trim() !== '') {
        alert("歡迎蒞臨呱呱人的小小天地，" + name + "！");
    } else {
        name = prompt("(放大音量)賓客您好!請問怎麼稱呼呢!!");
        if (name !== null && name.trim() !== '') {
            alert("歡迎蒞臨呱呱人的小小天地，" + name + "！");
        } else {
            name = prompt("??痾...這位賓客，請問要怎麼稱呼呢!???");
            if (name !== null && name.trim() !== '') {
                alert("歡迎蒞臨呱呱人的小小天地，" + name + "！");
                
            } else {
                //耳包彩蛋
                name="耳包君";
                unlockEgg();
                alert("算了....你就叫耳包君吧。");
                
            }
        }
    }
    nameButton.remove();
    appearingPlot(name);
    
}

function appearingPlot(name) {
    const text = "您好 " + name + "！我是呱呱人，這片仙境的管理人。非常高興能夠迎接貴賓來到我的 MYSTERY LAND！" + 
    "//" + "作為一名正在學習網頁設計的大學生，我希望透過這個充滿新奇與互動的小天地，展示我獨特的創意。在這裡，您將發現各種可以互動的小設計，期待大家能夠多方探索，享受這段奇妙的旅程。" + 
    "//" + 
"此外，這裡還有我設計的徽章商品，如果你買了，我會很開心。再次歡迎您的到來，祝您在這片仙境中度過愉快的時光！"; // 要顯示的文字
    const textContainer = document.getElementById('text');
    let index = 0;

    //如果是第一次彩蛋的話，彩蛋計數器顯示名子 
    if(eggSectionState == false){
        const eggCounterdiv = document.getElementById("eggSectionP");
        eggCounterdiv.innerHTML = "太守規矩的乖寶寶(例如 \""+name+"\")，是不能進入這個區域的喔，嘻嘻。";
    }

    // 每隔 50 毫秒顯示一個字
    const interval = setInterval(() => {
        if (index < text.length) {
            if(text[index]==="/"){
                textContainer.innerHTML += "<br>";
                textContainer.style.opacity = 1;
                index++;
            }else{
                textContainer.innerHTML += text[index]; // 添加字母
                textContainer.style.opacity = 1; // 逐漸顯示
                index++;
            }
            
        } else {
            clearInterval(interval); // 停止計時器
        }
    }, 50);
}



//大頭貼彩蛋//
let icon = document.getElementById('地呱img');
let count = 0;
let targetCount = 10;
function iconEgg() {
    if(window.matchMedia("(aspect-ratio <= 1.5)").matches){
        targetCount = 3;
    }
    
    icon.addEventListener('click', function() {
        count++;
        if(count===targetCount){
            let Boom = new Audio("Boom.mp3");
            Boom.play();
            icon.classList.add('scale');
            setTimeout(() => {
                unlockEgg();
            }, 100);

        }else if(count>targetCount){
            let Boom = new Audio("Boom.mp3");
            Boom.play();
            icon.classList.add('scale');

        }else{
            let Ahh = new Audio("Ahh.mp3");
            Ahh.play();
            icon.classList.add('scale');
        }
        // 在動畫結束後移除效果
        setTimeout(() => {
            icon.classList.remove('scale');
        }, 300); // 500ms後移除效果
    });
    
}
iconEgg();// 初始化


// 拖曳物品彩蛋
const draggableItems = document.querySelectorAll('.draggableItems');

draggableItems.forEach(item => {
    item.addEventListener("dragstart", (event) => {
        // 設置被拖動項目的 ID
        event.dataTransfer.setData("text/plain", event.target.id);
    });
});

const dragZones = document.querySelectorAll(".dragZones");

dragZones.forEach(zone =>{zone.addEventListener("dragover", (event) => {
    event.preventDefault(); // 允許放下
    });
})

dragZones.forEach(zone =>{zone.addEventListener("drop", (event) => {
    event.preventDefault(); // 防止默認行為

    // 獲取被拖動項目的 ID
    const draggedItemId = event.dataTransfer.getData("text/plain");
    const draggedItem = document.getElementById(draggedItemId);

    //刪漢堡
    draggedItem.remove();
    
    // 改gif
    event.target.style.backgroundImage = 'url("catdance.gif")'; 
    event.target.style.backgroundSize = '150%';
    // 改台詞
    const infoDiv = document.getElementById("product-info-cat");
    const nameText = document.getElementById("貓彩蛋名稱區");
    infoDiv.innerHTML = "<p>I'm happy!!</p>";
    nameText.innerHTML = "開心的貓貓";
    const sound = new Audio('happycat.mp3');
    sound.play();

    

    setTimeout(()=>{
        unlockEgg();
    },100);

    

    // // 將被拖動的項目添加到拖放區域
    // event.target.appendChild(draggedItem);
   
    });
})

// 亂點漢堡彩蛋
let burgercount = 0
const burger = document.getElementById("item1")
burger.addEventListener("click", ()=>{
    burgercount++;
    if(burgercount == 10){
        alert("白癡喔你要把它點爛了，用拖曳的啦(手機請長按再滑動)");
    }
})

// 彩蛋彩蛋
const egg = document.getElementById("egg");
egg.addEventListener("click", ()=>{
    egg.remove();
    unlockEgg();
})


// 獲取元素
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close");
const sureBtn = document.getElementById("sure");

// 顯示彈出式廣告

// 關閉彈出式廣告
closeBtn.onclick = function() {
    popup.style.display = "none";
}

sureBtn.onclick = function() {
    popup.style.display = "none";
}

// 點擊彈出框以外的地方關閉彈出式廣告
window.onclick = function(event) {
    if (event.target === popup) {
        popup.style.display = "none";
    }
}


// 手機板function
function myFunction() {
    if (window.matchMedia("(aspect-ratio <= 1.5)").matches) {
        // 小螢幕特定行為
        console.log("小螢幕：執行小螢幕特定的功能");
        // 實現小螢幕的功能
    } else {
        // 大螢幕特定行為
        console.log("大螢幕：執行大螢幕特定的功能");
        // 實現大螢幕的功能
    }
}

// 當螢幕大小改變時重新執行函數
window.addEventListener('resize', myFunction);

// 初始執行
document.addEventListener('DOMContentLoaded', myFunction);

