function textAnimation() {

  let subHead  =document.querySelector("#heading1 h1");
  let shArray = [ ...String(subHead.innerText)]

  let newText = "";
  for( ch of shArray){
      newText += `<span>${ch}</span>`
  }

  subHead.innerHTML = newText;
  
  gsap.from("#heading1 h1 span", {
        x:-20,
        duration:1,
        delay:0.5,
        stagger:0.1,
        opacity:0,
  })
}
textAnimation();
