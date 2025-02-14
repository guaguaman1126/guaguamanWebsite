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

// 彩蛋計數器
let eggCount = 0;
let eggCounterdiv = document.getElementById('彩蛋計數器div');

eggCounterdiv.innerHTML = "目前發現了"+eggCount+"個彩蛋!!";// 初始顯示計數

function eggCounter() {
    eggCount++;  // 增加計數
    eggCounterdiv.innerHTML = "目前發現了"+eggCount+"個彩蛋!!";  // 更新顯示
}


//問好彩蛋
function enterName() {
    let nameButton= document.getElementById('nameButton');
    alert("你解鎖了一個彩蛋");
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
                //耳包彩蛋
            } else {
                name="耳包君";
                alert("你又解鎖了一個彩蛋");
                alert("算了....你就叫耳包君吧。");
                eggCounter();
            }
        }
    }
    nameButton.remove();
    eggCounter();
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
                alert("你解鎖了彩蛋");
            }, 100);
            eggCounter();
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


