


const showInfo = () => {
let y = 0;
const webButton = document.querySelector("#web-button");
 webButton.addEventListener("click", function (evt) {
window.location.href = "https://www.instagram.com/rohansahu2001?igsh=Mm85Mmd1cnhidDQ4";
});
const instaButton = document.querySelector("#insta-button");
const facebookButton = document.querySelector("#facebook-button");
const whatsappButton = document.querySelector("#whatsapp-button");
const gmailButton = document.querySelector("#gmail-button");

// webButton.setAttribute("visible", true);
  instaButton.setAttribute("visible", true);
setTimeout(() => {
  facebookButton.setAttribute("visible", true);
}, 0);
setTimeout(() => {
  whatsappButton.setAttribute("visible", true);
}, 0);
setTimeout(() => {
  gmailButton.setAttribute("visible", true);
}, 0);
setTimeout(()=>{
  booknowButton.setAttribute("visible", true)
}, 0);



let currentTab = "";
// webButton.addEventListener("click", function (evt) {
//   window.location.href = "https://deviautomotives.in";
// });
instaButton.addEventListener("click", function (evt) {
  window.location.href = "https://www.instagram.com/rohansahu2001?igsh=Mm85Mmd1cnhidDQ4";
});
facebookButton.addEventListener("click", function (evt) {
  window.location.href = "https://www.instagram.com/rohansahu2001?igsh=Mm85Mmd1cnhidDQ4";
});
whatsappButton.addEventListener("click", function (evt) {
  window.location.href = "https://wa.me/8435189172";
});
gmailButton.addEventListener("click", function (evt) {
  window.location.href =
    "9993161115rohan@gmail.com";
});




};

const showPortfolio = (done) => {
    
    const paintandquestPreviewButton = document.querySelector("#paintandquest-preview-button");
    
    const id = setInterval(() => {
        clearInterval(id);
            paintandquestPreviewButton.addEventListener('click', () => {
                paintandquestPreviewButton.setAttribute("visible", false);
                const testVideo = document.createElement("video");
                const canplayWebm = testVideo.canPlayType('video; codecs="vp8, vorbis"');
                if (canplayWebm == "") {
                    document.querySelector("#paintandquest-video-link").setAttribute("src", "#paintandquest-video-mp4");
                    document.querySelector("#paintandquest-video-mp4").play();
                } else {
                    document.querySelector("#paintandquest-video-link").setAttribute("src", "#paintandquest-video-webm");
                    document.querySelector("#paintandquest-video-webm").play();
                }
            });

    }, 10);
      if (done && typeof done === 'function') {
      done();
        }
}


AFRAME.registerComponent('mytarget', {
    init: function() {
        this.el.addEventListener('targetFound', event => {
            console.log("target found");
            showPortfolio(() => {
                setTimeout(() => {
                    showInfo();
                }, 0);
            });
        });
        this.el.addEventListener('targetLost', event => {
            console.log("target found");
        });
        //this.el.emit('targetFound');
    }
});