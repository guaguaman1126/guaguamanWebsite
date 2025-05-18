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
        if (!display) {
            // 切換 active 類
            item.classList.toggle('active');
            display = true;
        } else {
            // 切換 active 類
            item.classList.toggle('active', false);
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

    if(eggCount == 4){
        alert("你找到了一定數量的彩蛋，解鎖優惠代碼8888");
        let eggSectionP = document.getElementById("eggSectionP");
        eggSectionP.innerHTML += "<br>您已解鎖優惠代碼 8888";

    }
}
//顯示彩蛋計數器
let eggSectionState = false;
function showEggSection() {
    if (!eggSectionState) {
        let eggSectionEgg = document.getElementById("eggSectionEgg");
        let eggSectionA = document.getElementById("eggSectionA");
        let eggSectionH2 = document.getElementById("eggSectionH2");
        let eggSectionP = document.getElementById("eggSectionP");
        eggSectionA.innerHTML = "彩蛋計數器";
        eggSectionEgg.innerHTML = "彩蛋"
        eggSectionH2.innerHTML = "計數器";
        eggSectionP.innerHTML = "你解鎖了隱藏區域:彩蛋計數器! 這裡有好多個彩蛋等者你去尋找，找完有獎勵喔!!";
        eggSectionState = true;
    }
}



//開頭問好
function enterName() {
    let nameButton = document.getElementById('nameButton');
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
                name = "耳包君";
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
    if (eggSectionState == false) {
        const eggCounterdiv = document.getElementById("eggSectionP");
        eggCounterdiv.innerHTML = "太守規矩的乖寶寶(例如 \"" + name + "\")，是不能進入這個區域的喔，嘻嘻。";
    }

    // 每隔 50 毫秒顯示一個字
    const interval = setInterval(() => {
        if (index < text.length) {
            if (text[index] === "/") {
                textContainer.innerHTML += "<br>";
                textContainer.style.opacity = 1;
                index++;
            } else {
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
let targetCount = 3;
function iconEgg() {

    icon.addEventListener('click', function () {
        count++;
        if (count === targetCount) {
            let Boom = new Audio("Boom.mp3");
            Boom.play();
            icon.classList.add('scale');
            setTimeout(() => {
                unlockEgg();
            }, 100);

        } else if (count > targetCount) {
            let Boom = new Audio("Boom.mp3");
            Boom.play();
            icon.classList.add('scale');

        } else {
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

dragZones.forEach(zone => {
    zone.addEventListener("dragover", (event) => {
        event.preventDefault(); // 允許放下
    });
})

dragZones.forEach(zone => {
    zone.addEventListener("drop", (event) => {
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



        setTimeout(() => {
            unlockEgg();
        }, 100);



        // // 將被拖動的項目添加到拖放區域
        // event.target.appendChild(draggedItem);

    });
})

// 亂點漢堡彩蛋
let burgercount = 0
const burger = document.getElementById("item1")
burger.addEventListener("click", () => {
    burgercount++;
    if (burgercount == 10) {
        alert("白癡喔你要把它點爛了，用拖曳的啦(手機請長按再滑動)");
    }
})

// 圖片彩蛋彩蛋
const egg = document.getElementById("egg");
egg.addEventListener("click", () => {
    egg.remove();
    unlockEgg();
})

// 字彩蛋彩蛋
const eggSectionEgg = document.getElementById("eggSectionEgg");
let eggSectionEggCount = 0;

eggSectionEgg.addEventListener("click", () => {
    if (eggSectionEggCount === 0) {
        unlockEgg();
        eggSectionEgg.classList.add("egg-used"); // 加上特殊 class
        eggSectionEggCount++; // 不讓他重複觸發
    }
});



// 獲取元素
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("close");
const sureBtn = document.getElementById("sure");

// 顯示彈出式廣告

// 關閉彈出式廣告
closeBtn.onclick = function () {
    popup.style.display = "none";
}

sureBtn.onclick = function () {
    popup.style.display = "none";
}

// 點擊彈出框以外的地方關閉彈出式廣告
window.onclick = function (event) {
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

/// 抓顧客回饋下來
const feedbackContainer = document.getElementById("feedback-container");

fetch("https://script.google.com/macros/s/AKfycbz37dG7SnteIA9a_pEoTMmEgfgbSJISnA6WLm1eung9N__DAHF_hu-zbFudoZ5ZtmJWyg/exec")
  .then(res => res.json())
  .then(data => {
    const feedbacks = data.feedbacks; // ✅ 取出 feedbacks 陣列
    feedbacks.forEach(item => {
      if (item.顧客回饋) {
        const div = document.createElement("div");
        div.className = "feedback-item";
        div.innerHTML = `
          <p class="feedback-name">${item.暱稱}</p>
          <p class="feedback-text">${item.顧客回饋}</p>
          <img class="feedback-img" src="${convertOpenIdToDirectLink(item.商品照)}" alt="顧客商品照" onerror="this.src='Glogo.png'">
        `;
        feedbackContainer.insertBefore(div, feedbackContainer.firstChild);
      }
    });
  })
  .catch(err => console.error("留言載入失敗：", err));



//轉圖片網址變成顯示網址
function convertOpenIdToDirectLink(originalUrl) {
  // 原始邏輯：支援 id=XXX
  const match = originalUrl.match(/id=([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    const fileId = match[1];
    return `https://lh3.googleusercontent.com/d/${fileId}`;
  } 
  // 新增邏輯：支援 /file/d/XXX/
  else if (originalUrl.includes("/file/d/")) {
    const altMatch = originalUrl.match(/file\/d\/([a-zA-Z0-9_-]+)/);
    if (altMatch && altMatch[1]) {
      const fileId = altMatch[1];
      return `https://lh3.googleusercontent.com/d/${fileId}`;
    }
  }

  console.warn("❗ 無法擷取圖片 ID：", originalUrl);
  return undefined;
}


// 點擊 feedback-img 放大顯示，直接插到父元素後面

document.addEventListener('click', function (e) {
    if (e.target.classList.contains('feedback-img')) {
        const imgSrc = e.target.src; // 取得圖片來源
        const parent = e.target.parentElement; // 小圖的父元素

        // 檢查父元素是否已經有放大圖，如果有先移除
        const existingZoom = parent.querySelector('.feedback-zoomed-img');

        if (existingZoom) {
            existingZoom.remove();
            e.target.style.border = 'none';
        } else {

            // 建立放大版圖片元素
            const zoomImg = document.createElement('img');
            zoomImg.src = imgSrc;
            zoomImg.className = 'feedback-zoomed-img';

            // 插入到父元素之後
            parent.appendChild(zoomImg);

            // 給被點擊的小圖加上灰色邊框
            e.target.style.border = '2px solid gray';

        }


    }
});


//按鈕彈跳
const btn = document.getElementById('nameButton');
const container = btn.parentElement;

let posX = 100;
let posY = 100;

const speed = 2;
let angle = Math.random() * 2 * Math.PI; // 隨機角度 (0 到 2π)
let velocityX = speed * Math.cos(angle);
let velocityY = speed * Math.sin(angle);

btn.style.position = 'absolute'; // 確保能移動

function moveButton() {
  const btnWidth = btn.offsetWidth;
  const btnHeight = btn.offsetHeight;
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;

  posX += velocityX;
  posY += velocityY;

  // 撞牆反彈（保角度反射）
  if (posX + btnWidth >= containerWidth || posX <= 0) {
    velocityX = -velocityX;
    posX = Math.max(0, Math.min(posX, containerWidth - btnWidth));
  }

  if (posY + btnHeight >= containerHeight || posY <= 0) {
    velocityY = -velocityY;
    posY = Math.max(0, Math.min(posY, containerHeight - btnHeight));
  }

  btn.style.left = `${posX}px`;
  btn.style.top = `${posY}px`;

  requestAnimationFrame(moveButton);
}

moveButton();


// 資料庫抓圖片下來
const scriptURL = "https://script.google.com/macros/s/AKfycbz37dG7SnteIA9a_pEoTMmEgfgbSJISnA6WLm1eung9N__DAHF_hu-zbFudoZ5ZtmJWyg/exec";

fetch(scriptURL)
  .then(res => res.json())
  .then(data => {
    const gallery = document.getElementById("productGallery");

    data.products.forEach(item => {
      const div = document.createElement("div");
      div.className = "product-item";
      div.innerHTML = `
        <div class="product-up-section">
          <img src="${convertOpenIdToDirectLink(item.圖片)}" alt="${item.名稱}" oncontextmenu="return false">
          <div class="product-info">
            ${item.文案.split('\n').map(line => `<p>${line}</p>`).join('')}
          </div>
        </div>
        <div class="product-down-section">
          <h6>${item.名稱}</h6>
          <h5>TWD ${item.價格}</h5>
        </div>
      `;
      gallery.appendChild(div);
    });
  })
  .catch(err => console.error("載入產品資料失敗：", err));




