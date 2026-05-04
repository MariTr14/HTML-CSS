// Write JavaScript code here
const container = document.getElementById("container");
container.innerHTML = `<div class="cloud">
                <div class="cloudBubble1"></div>
                <div class="cloudBubble2"></div>
            </div>`.repeat(16);

const clouds = document.getElementsByClassName("cloud");
for (let i = 0; i < clouds.length; i++){
  const cloud = clouds[i];
  cloud.style.top = (Math.random()*100)+"%";
  cloud.style.left = (Math.random()*100)+"%";
  cloud.style.transform = `scale(${(Math.random() * 0.7) + 0.3})`;

  const intervalTimeInSeconds = (Math.random() * 20) + 6;
  cloud.style.transition = "left " + intervalTimeInSeconds + "s linear";

  const start = Math.random() > 0.5

  setTimeout(() =>{
    cloud.style.left = start ? '50%' : '-50%';
  }, [1000]);

  let x = start ? 1 : 0;
  setInterval(() => {
    if (x % 2 === 0){
      cloud.style.left = '50%';
    }
    else{
      cloud.style.left = '-50%';
    }
    x +=1;
  }, intervalTimeInSeconds * 1000);
}
