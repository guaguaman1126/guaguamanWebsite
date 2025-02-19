//scroll// 
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
    alert("恭喜你解鎖了一個彩蛋");
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
    if (name) {
        alert("歡迎蒞臨呱呱人的小小天地，" + name + "！");
    } else {
        name = prompt("(放大音量)賓客您好!請問怎麼稱呼呢!!");
        if (name) {
            alert("歡迎蒞臨呱呱人的小小天地，" + name + "！");
        } else {
            name = prompt("??痾...這位賓客，請問要怎麼稱呼呢!???");
            if (name) {
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
    const text = "您好 " + name + "！我是呱呱人，這片仙境的持有者。非常高興能夠迎接貴賓來到我的 MYSTERY LAND！" + 
    "//" + "作為一名正在學習網站設計的大學生，我希望透過這個充滿新奇與互動的小天地，展示我獨特的創意。在這裡，您將發現各種可以互動的小設計，期待大家能夠多方探索，享受這段奇妙的旅程。" + 
    "//" + 
"此外，這裡還有我精心設計的徽章商品，讓每位訪客都能帶走一份獨特的紀念。再次歡迎您的到來，祝您在這片仙境中度過愉快的時光！"; // 要顯示的文字
    const textContainer = document.getElementById('text');
    let index = 0;

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
function iconEgg() {
    
    icon.addEventListener('click', function() {
        count++;
        if(count===10){
            let Boom = new Audio("Boom.mp3");
            Boom.play();
            icon.classList.add('scale');
            setTimeout(() => {
                unlockEgg();
            }, 100);

        }else if(count>10){
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
    const text = event.target.querySelector('h6');
    text.textContent = 'I\'m happy'; // 更改 <h6> 的文字
    playMusic()

    

    setTimeout(()=>{
        unlockEgg();
    },100);

    

    // // 將被拖動的項目添加到拖放區域
    // event.target.appendChild(draggedItem);
   
    });
})

//音效
function playMusic(){
const object = document.getElementById('zone1');
const sound = new Audio('happycat.mp3');
const maxDistance = 300; // 最大感應距離

// 開始播放音效
sound.loop = true;
sound.play();

// 計算距離並調整音量
document.addEventListener('mousemove', (event) => {
    const rect = object.getBoundingClientRect();
    const objectX = rect.x + rect.width / 2;
    const objectY = rect.y + rect.height / 2;

    const distance = Math.sqrt(Math.pow(event.clientX - objectX, 2) + Math.pow(event.clientY - objectY, 2));

    // 計算音量
    let volume = 1 - (distance / maxDistance);
    volume = Math.max(0, Math.min(1, volume)); // 確保音量在 0 到 1 之間

    sound.volume = volume; // 設置音量
});
}

