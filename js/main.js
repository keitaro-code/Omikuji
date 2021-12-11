'use strict'; {
  const btn = document.getElementById('btn');
  
  
  btn.addEventListener('click',() =>{
    // btn.textContent = 'hit!';
    // const results = ['大吉','吉','中吉','末吉','うんち']
    // const n = Math.floor(Math.random() * results.length);
    // btn.textContent = results[n];
    // btn.textContent = results[Math.floor(Math.random() * results.length)];
    const n = Math.random();
    btn.textContent = n ;
    if(n < 0.3) {
      btn.textContent = 'けー';
    } else if (n < 0.6){
      btn.textContent = 'みみょみ';
    } else {
      btn.textContent = 'さやんご';
    }
  

  // switch(n) {
  //   case 0:
  //     btn.textContent = '大吉';
  //     break;
  //   case 1:
  //     btn.textContent = '吉';
  //     break;
  //   case 2:
  //     btn.textContent = '大凶';
  //     break;
  // }

})
}