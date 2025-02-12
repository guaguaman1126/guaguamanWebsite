
function scrollRight() {
    const gallery = document.getElementById('productGallery');
    const vw = window.innerWidth * 0.01;
    gallery.scrollBy({
        top: 0,
        left: 91.5*vw, // 每次捲動的距離（300px * 3）
        behavior: 'smooth' // 平滑捲動
    });
}

function scrollLeft1() {
    const gallery = document.getElementById('productGallery');
    const vw = window.innerWidth * 0.01;
    gallery.scrollBy({
        top: 0,
        left: -91.5*vw, // 每次捲動的距離（300px * 3）
        behavior: 'smooth' // 平滑捲動
    });
}

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
                name="耳包君";
                alert("算了....你就叫耳包君吧。");
                alert("歡迎蒞臨呱呱人的小小天地，" + name + "！");
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

    // 每隔 100 毫秒顯示一個字
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
    }, 100);
}