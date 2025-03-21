//初期化処理
let messages = document.getElementsByClassName('message')
    haveDone = [];

//紹介のところのスクリプト
async function introAnime() {
  if(window.scrollY > 5 && !haveDone[0]) {
    haveDone[0] = true;

    //下準備
    let introImg = messages[0].children[0],
        introText = messages[0].children[1];
    function height() {return window.innerWidth * 0.4}
    function width() {return window.innerWidth * 0.4}

    //画像部分
    introImg.style.height = `${height()}px`;//画面サイズ(ピクセル) * 0.4(40%っていう意味)
    introImg.style.width = `${width()}px`;//上と同様
    introImg.style.transform = "rotate(-10deg)";
    introImg.style.position = "absolute";
    introImg.style.top = "25%";
    introImg.style.left = "0%";
    window.addEventListener('resize', () => {
      introImg.style.height = `${height()}px`;
      introImg.style.width = `${width()}px`;
    });
    async function func1() {
      for(var i = 0; i < 200; i++) {
        introImg.style.opacity = 0.005 * i;//0.005 : 1(100%) / 200(回)
        await sleep(5);
      }
    }

    //文章部分
    introText.style.position = "absolute";//relativeにすると動かないからjsでその度変更
    introText.style.top = `${height() / 2}px`;//🛏️これで行こう！おやすみ
    introText.style.right = "0%";
    window.addEventListener('resize', () => {
      introImg.style.height = `${height()}px`;//⭐️ここから
      introImg.style.width = `${width()}px`;
    });
    async function func2() {
      await sleep(500);
      for(var i = 0; i < 250; i++) {
        introText.style.transform = `rotate(${60 - 0.18 * i}deg)`;//45° / 250回
        introText.style.color = `rgba(255, 150, 150, ${0.004 * i})`;//0.004 : 1(100%) / 250回
        await sleep(1);
      }
    }

    func1();
    func2();
  }
}

//キャッチコピーのスクリプト
async function sloganAnime() {
    if(window.scrollY > 250 && !haveDone[1]) {
      haveDone[1] = true;
  
      //下準備
      let sloganImg = messages[1].children[0],
          sloganText = messages[1].children[1];
      function height() {return window.innerWidth * 0.4}
      function width() {return window.innerWidth * 0.4}

      //画像部分
      sloganImg.style.height = `${height()}px`;//画面サイズ(ピクセル) * 0.4(40%っていう意味)
      sloganImg.style.width = `${width()}px`;//上と同様
      sloganImg.style.transform = "rotate(20deg)";
      sloganImg.style.position = "absolute";
      sloganImg.style.top = "125%";
      sloganImg.style.right = "10%";
      window.addEventListener('resize', () => {
        sloganImg.style.height = `${height()}px`;
        sloganImg.style.width = `${width()}px`;
      });
      async function func1() {
        for(var i = 0; i < 200; i++) {
          sloganImg.style.opacity = 0.005 * i;//0.005 : 1(100%) / 200(回)
          await sleep(5);
        }
      }
  
      //文章部分
      sloganText.style.position = "absolute";
      sloganText.style.top = "135%";
      sloganText.style.left = "10%";
      async function func2() {
        await sleep(500);
        for(var i = 0; i < 250; i++) {
          sloganText.style.transform = `rotate(${30 - 0.18 * i}deg)`;//45° / 250回
          sloganText.style.color = `rgba(255, 150, 150, ${0.004 * i})`;//0.004 : 1(100%) / 250回
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