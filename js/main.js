'use strict'; {
  const btn = document.getElementById('btn');
  
  
  btn.addEventListener('click',() =>{
    // btn.textContent = 'hit!';
    // const results = ['大吉','吉','中吉','末吉','うんち']
    // const n = Math.floor(Math.random() * results.length);
    // btn.textContent = results[n];
    // btn.textContent = results[Math.floor(Math.random() * results.length)];
    const results = ['けー','みみょみ','さやんご','はちゃん'] ;
  
    
    btn.textContent = results.splice(Math.floor(Math.random() * results.length),1)[0] ;
    
  

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

});
}