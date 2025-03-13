//初期化処理
let messages = document.getElementsByClassName('message')
    haveDone = [];

//紹介のところのアニメーション
async function introAnime() {
  if(window.scrollY > 5 && !haveDone[0]) {
    haveDone[0] = true;

    //画像部分
    messages[0].children[0].style.transform = "rotate(-10deg)";
    messages[0].children[0].style.position = "absolute";
    messages[0].children[0].style.top = "25%";
    messages[0].children[0].style.left = "0%";
    async function func1() {
      for(var i = 0; i < 200; i++) {
        messages[0].children[0].style.opacity = 0.005 * i;//0.005 : 1(100%) / 200(回)
        await sleep(5);
      }
    }

    //文章部分
    messages[0].children[1].style.position = "absolute";
    messages[0].children[1].style.top = "50%";
    messages[0].children[1].style.right = "0%";
    async function func2() {
      await sleep(500);
      for(var i = 0; i < 250; i++) {
        messages[0].children[1].style.transform = `rotate(${60 - 0.18 * i}deg)`;//45° / 250回
        messages[0].children[1].style.color = `rgba(255, 150, 150, ${0.004 * i})`;//0.004 : 1(100%) / 250回
        await sleep(1);
      }
    }

    func1();
    func2();
  }
}

//キャッチコピーのアニメーション
async function sloganAnime() {
    if(window.scrollY > 250 && !haveDone[1]) {
      haveDone[1] = true;
  
      //画像部分
      messages[1].children[0].style.transform = "rotate(20deg)";
      messages[1].children[0].style.position = "absolute";
      messages[1].children[0].style.top = "125%";
      messages[1].children[0].style.right = "10%";
      async function func1() {
        for(var i = 0; i < 200; i++) {
          messages[1].children[0].style.opacity = 0.005 * i;//0.005 : 1(100%) / 200(回)
          await sleep(5);
        }
      }
  
      //文章部分
      messages[1].children[1].style.position = "absolute";
      messages[1].children[1].style.top = "135%";
      messages[1].children[1].style.left = "10%";
      async function func2() {
        await sleep(500);
        for(var i = 0; i < 250; i++) {
          messages[1].children[1].style.transform = `rotate(${30 - 0.18 * i}deg)`;//45° / 250回
          messages[1].children[1].style.color = `rgba(255, 150, 150, ${0.004 * i})`;//0.004 : 1(100%) / 250回
          await sleep(1);
        }
      }
  
      func1();
      func2();
    }
  }

window.addEventListener('scroll', () => {
  introAnime();
  sloganAnime();
});