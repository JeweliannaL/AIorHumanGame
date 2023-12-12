'use strict';
let score = 0;

let domReady = (cb) => {
  document.readyState === 'interactive' || document.readyState === 'complete'
    ? cb()
    : document.addEventListener('DOMContentLoaded', cb);
};

domReady(); {
  document.body.style.visibility = 'visible';
}

var siteWidth = 1280;
var scale = screen.width /siteWidth;

document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+'');
const resizeOps = () => {
  document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
};

resizeOps();
window.addEventListener("resize", resizeOps);

var startbtn = document.getElementById('startbtn'); // was const
var AIbtn = document.getElementById('AIbtn');
var humanbtn = document.getElementById('humanbtn');
var picture1 = document.getElementById('picture1');
var picture2 = document.getElementById('picture2');
var picture3 = document.getElementById('picture3');
var picture4 = document.getElementById('picture4');

var picture5 = document.getElementById('picture5');
var picture6 = document.getElementById('picture6');
var picture7 = document.getElementById('picture7');
var picture8 = document.getElementById('picture8');
var picture9 = document.getElementById('picture9');
var picture10 = document.getElementById('picture10');

var funfact = document.getElementById('funfact');
var msg = document.getElementById('msg');
var source = document.getElementById('source');
var funfactbox = document.getElementById('funfactbox');

var wrong = document.getElementById('wrong');
var correctbox = document.getElementById('correctbox');
var wrongbox = document.getElementById('wrongbox');
var correct = document.getElementById('correct');


var infobox = document.getElementById('infobox');
var info = document.getElementById('info');
//var finalscore = document.getElementById("score").innerHTML = "Score: " + score + "/10";
var finalscore = document.getElementById("score");


var continuebtn = document.getElementById('continuebtn');

var picture1info = document.getElementById('picture1info');
var picture2info = document.getElementById('picture2info');
var picture3info = document.getElementById('picture3info');
var picture4info = document.getElementById('picture4info');
var picture5info = document.getElementById('picture5info');
var picture6info = document.getElementById('picture6info');
var picture7info = document.getElementById('picture7info');
var picture8info = document.getElementById('picture8info');
var picture9info = document.getElementById('picture9info');
var picture10info = document.getElementById('picture10info');



//var scoreprint = document.getElementById('score') = "Score: " + score;

AIbtn.style.visibility = 'hidden';


finalscore.style.visibility = 'hidden';

humanbtn.style.visibility = 'hidden';
picture1.style.visibility = 'hidden';
picture2.style.visibility = 'hidden';
picture3.style.visibility = 'hidden';
picture4.style.visibility = 'hidden';

picture5.style.visibility = 'hidden';
picture6.style.visibility = 'hidden';
picture7.style.visibility = 'hidden';
picture8.style.visibility = 'hidden';
picture9.style.visibility = 'hidden';
picture10.style.visibility = 'hidden';

picture1info.style.visibility = 'hidden';
picture2info.style.visibility = 'hidden';
picture3info.style.visibility = 'hidden';
picture4info.style.visibility = 'hidden';

picture5info.style.visibility = 'hidden';
picture6info.style.visibility = 'hidden';
picture7info.style.visibility = 'hidden';
picture8info.style.visibility = 'hidden';
picture9info.style.visibility = 'hidden';
picture10info.style.visibility = 'hidden';

continuebtn.style.visibility = 'hidden';
infobox.style.visibility = 'hidden';
info.style.visibility = 'hidden';

wrongbox.style.visibility = 'hidden';
wrong.style.visibility = 'hidden';
correct.style.visibility = 'hidden';
correctbox.style.visibility = 'hidden';

startbtn.addEventListener('click', () => {
  funfactbox.style.visibility = 'hidden';
  funfact.style.visibility = 'hidden';
  source.style.visibility = 'hidden';
  msg.style.visibility = 'hidden';
  startbtn.style.visibility = 'hidden';
  AIbtn.style.visibility = 'visible';
  humanbtn.style.visibility = 'visible';
  picture1.style.visibility = 'visible';

  // picture 1
  humanbtn.onclick = function () {
    score++;
    
    //right tab
    continuebtn.style.visibility = 'visible';
    picture1.style.visibility = 'hidden';
    AIbtn.style.visibility = 'hidden';
    humanbtn.style.visibility = 'hidden';

    correct.style.visibility = 'visible';
    correctbox.style.visibility = 'visible';
    picture1info.style.visibility = 'visible';
  }

  AIbtn.onclick = function () {
    // wrong tab
    continuebtn.style.visibility = 'visible';
    picture1.style.visibility = 'hidden';
    AIbtn.style.visibility = 'hidden';
    humanbtn.style.visibility = 'hidden';

    wrong.style.visibility = 'visible';
    wrongbox.style.visibility = 'visible';
    picture1info.style.visibility = 'visible';
  }
  //pictue 2

  continuebtn.addEventListener('click', () => {
    picture1info.style.visibility = 'hidden';
    continuebtn.style.visibility = 'hidden';
    AIbtn.style.visibility = 'visible';
    humanbtn.style.visibility = 'visible';
    picture2.style.visibility = 'visible';

    wrongbox.style.visibility = 'hidden';
wrong.style.visibility = 'hidden';
correct.style.visibility = 'hidden';
correctbox.style.visibility = 'hidden';

    humanbtn.onclick = function () {
      //wrong tab
      continuebtn.style.visibility = 'visible';
      picture2.style.visibility = 'hidden';
      AIbtn.style.visibility = 'hidden';
      humanbtn.style.visibility = 'hidden';

      wrongbox.style.visibility = 'visible';
      wrong.style.visibility = 'visible';
      picture2info.style.visibility = 'visible';
    }

    AIbtn.onclick = function () {
      // right tab
      score++;
      
      continuebtn.style.visibility = 'visible';
      picture2.style.visibility = 'hidden';
      AIbtn.style.visibility = 'hidden';
      humanbtn.style.visibility = 'hidden';

      correct.style.visibility = 'visible';
      correctbox.style.visibility = 'visible';
      picture2info.style.visibility = 'visible';
    }


    // picture 3
    continuebtn.addEventListener('click', () => {
      picture2info.style.visibility = 'hidden';
      continuebtn.style.visibility = 'hidden';
      AIbtn.style.visibility = 'visible';
      humanbtn.style.visibility = 'visible';
      picture3.style.visibility = 'visible';

      wrongbox.style.visibility = 'hidden';
wrong.style.visibility = 'hidden';
correct.style.visibility = 'hidden';
correctbox.style.visibility = 'hidden';

      humanbtn.onclick = function () {
        //wrong tab
        continuebtn.style.visibility = 'visible';
        picture3.style.visibility = 'hidden';
        picture2.style.visibility = 'hidden'; //
        AIbtn.style.visibility = 'hidden';
        humanbtn.style.visibility = 'hidden';
        wrongbox.style.visibility = 'visible';
        wrong.style.visibility = 'visible';
        picture3info.style.visibility = 'visible';
      }

      AIbtn.onclick = function () {
        // right tab
        score++;
        
        continuebtn.style.visibility = 'visible';
        picture3.style.visibility = 'hidden';
        picture2.style.visibility = 'hidden'; //
        AIbtn.style.visibility = 'hidden';
        humanbtn.style.visibility = 'hidden';

        correct.style.visibility = 'visible';
        correctbox.style.visibility = 'visible';
        picture3info.style.visibility = 'visible';
      }

      // picture 4
      continuebtn.addEventListener('click', () => {
        picture3info.style.visibility = 'hidden';
        continuebtn.style.visibility = 'hidden';
        AIbtn.style.visibility = 'visible';
        humanbtn.style.visibility = 'visible';
        picture4.style.visibility = 'visible';

        wrongbox.style.visibility = 'hidden';
wrong.style.visibility = 'hidden';
correct.style.visibility = 'hidden';
correctbox.style.visibility = 'hidden';

        humanbtn.onclick = function () {
          // right tab
          score++;
          
          continuebtn.style.visibility = 'visible';
          picture4.style.visibility = 'hidden';
          picture3.style.visibility = 'hidden';
          picture2.style.visibility = 'hidden';
          AIbtn.style.visibility = 'hidden';
          humanbtn.style.visibility = 'hidden';

          correct.style.visibility = 'visible';
          correctbox.style.visibility = 'visible';
          picture4info.style.visibility = 'visible';
        }

        AIbtn.onclick = function () {
          //wrong tab
          continuebtn.style.visibility = 'visible';
          picture4.style.visibility = 'hidden';
          picture3.style.visibility = 'hidden';
          picture2.style.visibility = 'hidden';
          AIbtn.style.visibility = 'hidden';
          humanbtn.style.visibility = 'hidden';
          wrongbox.style.visibility = 'visible';
          wrong.style.visibility = 'visible';
          picture4info.style.visibility = 'visible';
        }

        // picture 5
        continuebtn.addEventListener('click', () => {
          picture4info.style.visibility = 'hidden';
          continuebtn.style.visibility = 'hidden';
          AIbtn.style.visibility = 'visible';
          humanbtn.style.visibility = 'visible';
          picture5.style.visibility = 'visible';

          wrongbox.style.visibility = 'hidden';
wrong.style.visibility = 'hidden';
correct.style.visibility = 'hidden';
correctbox.style.visibility = 'hidden';

          humanbtn.onclick = function () {
            //wrong tab
            continuebtn.style.visibility = 'visible';
            picture5.style.visibility = 'hidden';
            picture4.style.visibility = 'hidden';
            picture3.style.visibility = 'hidden';
            picture2.style.visibility = 'hidden';
            AIbtn.style.visibility = 'hidden';
            humanbtn.style.visibility = 'hidden';
            wrongbox.style.visibility = 'visible';
            wrong.style.visibility = 'visible';
            picture5info.style.visibility = 'visible';
          }

          AIbtn.onclick = function () {
            // right tab
            score++;
            
            continuebtn.style.visibility = 'visible';
            picture5.style.visibility = 'hidden';
            picture4.style.visibility = 'hidden';
            picture3.style.visibility = 'hidden';
            picture2.style.visibility = 'hidden';
            AIbtn.style.visibility = 'hidden';
            humanbtn.style.visibility = 'hidden';

            correct.style.visibility = 'visible';
            correctbox.style.visibility = 'visible';
            picture5info.style.visibility = 'visible';
          }

          //

          // picture 6
          continuebtn.addEventListener('click', () => {
            picture5info.style.visibility = 'hidden';
            continuebtn.style.visibility = 'hidden';
            AIbtn.style.visibility = 'visible';
            humanbtn.style.visibility = 'visible';
            picture6.style.visibility = 'visible';

            wrongbox.style.visibility = 'hidden';
wrong.style.visibility = 'hidden';
correct.style.visibility = 'hidden';
correctbox.style.visibility = 'hidden';

            humanbtn.onclick = function () {
              //right tab
              score++;
              
              continuebtn.style.visibility = 'visible';
              picture6.style.visibility = 'hidden';
              picture5.style.visibility = 'hidden';
              picture4.style.visibility = 'hidden';
              picture3.style.visibility = 'hidden';
              picture2.style.visibility = 'hidden';
              AIbtn.style.visibility = 'hidden';
              humanbtn.style.visibility = 'hidden';

              correct.style.visibility = 'visible';
              correctbox.style.visibility = 'visible';
              picture6info.style.visibility = 'visible';
            }

            AIbtn.onclick = function () {
              // wrong tab
              continuebtn.style.visibility = 'visible';
              picture6.style.visibility = 'hidden';
              picture5.style.visibility = 'hidden';
              picture4.style.visibility = 'hidden';
              picture3.style.visibility = 'hidden';
              picture2.style.visibility = 'hidden';
              AIbtn.style.visibility = 'hidden';
              humanbtn.style.visibility = 'hidden';
              wrongbox.style.visibility = 'visible';
              wrong.style.visibility = 'visible';
              picture6info.style.visibility = 'visible';
            }



            // picture 7
            continuebtn.addEventListener('click', () => {
              picture6info.style.visibility = 'hidden';
              continuebtn.style.visibility = 'hidden';
              AIbtn.style.visibility = 'visible';
              humanbtn.style.visibility = 'visible';
              picture7.style.visibility = 'visible';

              wrongbox.style.visibility = 'hidden';
wrong.style.visibility = 'hidden';
correct.style.visibility = 'hidden';
correctbox.style.visibility = 'hidden';

              humanbtn.onclick = function () {
                //wrong tab
                continuebtn.style.visibility = 'visible';
                picture7.style.visibility = 'hidden';
                picture6.style.visibility = 'hidden';
                picture5.style.visibility = 'hidden';
                picture4.style.visibility = 'hidden';
                picture3.style.visibility = 'hidden';
                picture2.style.visibility = 'hidden';
                AIbtn.style.visibility = 'hidden';
                humanbtn.style.visibility = 'hidden';
                wrongbox.style.visibility = 'visible';
                wrong.style.visibility = 'visible';
                picture7info.style.visibility = 'visible';
              }

              AIbtn.onclick = function () {
                // right tab
                score++;
                
                continuebtn.style.visibility = 'visible';
                picture7.style.visibility = 'hidden';
                picture6.style.visibility = 'hidden';
                picture5.style.visibility = 'hidden';
                picture4.style.visibility = 'hidden';
                picture3.style.visibility = 'hidden';
                picture2.style.visibility = 'hidden';
                AIbtn.style.visibility = 'hidden';
                humanbtn.style.visibility = 'hidden';

                correct.style.visibility = 'visible';
                correctbox.style.visibility = 'visible';
                picture7info.style.visibility = 'visible';
              }

              // picture 8
              continuebtn.addEventListener('click', () => {
                picture7info.style.visibility = 'hidden';
                continuebtn.style.visibility = 'hidden';
                AIbtn.style.visibility = 'visible';
                humanbtn.style.visibility = 'visible';
                picture8.style.visibility = 'visible';

                wrongbox.style.visibility = 'hidden';
wrong.style.visibility = 'hidden';
correct.style.visibility = 'hidden';
correctbox.style.visibility = 'hidden';

                humanbtn.onclick = function () {
                  //wrong tab
                  continuebtn.style.visibility = 'visible';
                  picture8.style.visibility = 'hidden';
                  picture7.style.visibility = 'hidden';
                  picture6.style.visibility = 'hidden';
                  picture5.style.visibility = 'hidden';
                  picture4.style.visibility = 'hidden';
                  picture3.style.visibility = 'hidden';
                  picture2.style.visibility = 'hidden';
                  AIbtn.style.visibility = 'hidden';
                  humanbtn.style.visibility = 'hidden';
                  wrongbox.style.visibility = 'visible';
                  wrong.style.visibility = 'visible';
                  picture8info.style.visibility = 'visible';
                }

                AIbtn.onclick = function () {
                  // right tab
                  score++;
                  
                  continuebtn.style.visibility = 'visible';
                  picture8.style.visibility = 'hidden';
                  picture7.style.visibility = 'hidden';
                  picture6.style.visibility = 'hidden';
                  picture5.style.visibility = 'hidden';
                  picture4.style.visibility = 'hidden';
                  picture3.style.visibility = 'hidden';
                  picture2.style.visibility = 'hidden';
                  AIbtn.style.visibility = 'hidden';
                  humanbtn.style.visibility = 'hidden';

                  correct.style.visibility = 'visible';
                  correctbox.style.visibility = 'visible';
                  picture8info.style.visibility = 'visible';
                }

                // picture 9
                continuebtn.addEventListener('click', () => {
                  picture8info.style.visibility = 'hidden';
                  continuebtn.style.visibility = 'hidden';
                  AIbtn.style.visibility = 'visible';
                  humanbtn.style.visibility = 'visible';
                  picture9.style.visibility = 'visible';

                  wrongbox.style.visibility = 'hidden';
wrong.style.visibility = 'hidden';
correct.style.visibility = 'hidden';
correctbox.style.visibility = 'hidden';

                  humanbtn.onclick = function () {
                    // wrong tab
                    continuebtn.style.visibility = 'visible';
                    picture9.style.visibility = 'hidden';
                    picture8.style.visibility = 'hidden';
                    picture7.style.visibility = 'hidden';
                    picture6.style.visibility = 'hidden';
                    picture5.style.visibility = 'hidden';
                    picture4.style.visibility = 'hidden';
                    picture3.style.visibility = 'hidden';
                    picture2.style.visibility = 'hidden';
                    AIbtn.style.visibility = 'hidden';
                    humanbtn.style.visibility = 'hidden';
                    wrongbox.style.visibility = 'visible';
                    wrong.style.visibility = 'visible';
                    picture9info.style.visibility = 'visible';
                  }

                  AIbtn.onclick = function () {
                    //right tab
                    score++;
                    
                    continuebtn.style.visibility = 'visible';
                    picture9.style.visibility = 'hidden';
                    picture8.style.visibility = 'hidden';
                    picture7.style.visibility = 'hidden';
                    picture6.style.visibility = 'hidden';
                    picture5.style.visibility = 'hidden';
                    picture4.style.visibility = 'hidden';
                    picture3.style.visibility = 'hidden';
                    picture2.style.visibility = 'hidden';
                    AIbtn.style.visibility = 'hidden';
                    humanbtn.style.visibility = 'hidden';

                    correct.style.visibility = 'visible';
                    correctbox.style.visibility = 'visible';
                    picture9info.style.visibility = 'visible';
                  }

                  // picture 10
                  continuebtn.addEventListener('click', () => {
                    picture9info.style.visibility = 'hidden';

                    wrongbox.style.visibility = 'hidden';
                    wrong.style.visibility = 'hidden';
                    correct.style.visibility = 'hidden';
                    correctbox.style.visibility = 'hidden';

                    continuebtn.style.visibility = 'hidden';
                    AIbtn.style.visibility = 'visible';
                    humanbtn.style.visibility = 'visible';
                    picture10.style.visibility = 'visible';

      

                    humanbtn.onclick = function () {
                      //right tab
                      score++;
                      
                      continuebtn.style.visibility = 'visible';
                      picture10.style.visibility = 'hidden';
                      picture9.style.visibility = 'hidden';
                      picture8.style.visibility = 'hidden';
                      picture7.style.visibility = 'hidden';
                      picture6.style.visibility = 'hidden';
                      picture5.style.visibility = 'hidden';
                      picture4.style.visibility = 'hidden';
                      picture3.style.visibility = 'hidden';
                      picture2.style.visibility = 'hidden';
                      AIbtn.style.visibility = 'hidden';
                      humanbtn.style.visibility = 'hidden';

                      //infobox.style.visibility = 'visible';
                     // info.style.visibility = 'visible';
                      picture10info.style.visibility = 'visible';
                      correctbox.style.visibility = 'visible';
                      correct.style.visibility = 'visible';

                      
                    }

                 //

                    AIbtn.onclick = function () {
                      //wrong tab
                      continuebtn.style.visibility = 'visible';
                      picture10.style.visibility = 'hidden';
                      picture9.style.visibility = 'hidden';
                      picture8.style.visibility = 'hidden';
                      picture7.style.visibility = 'hidden';
                      picture6.style.visibility = 'hidden';
                      picture5.style.visibility = 'hidden';
                      picture4.style.visibility = 'hidden';
                      picture3.style.visibility = 'hidden';
                      picture2.style.visibility = 'hidden';
                      AIbtn.style.visibility = 'hidden';
                      humanbtn.style.visibility = 'hidden';

                      //infobox.style.visibility = 'visible';
                      //info.style.visibility = 'visible';
                      picture10info.style.visibility = 'visible';
                      wrongbox.style.visibility = 'visible';
                      wrong.style.visibility = 'visible';

                    // was here
                
                    }
                    continuebtn.addEventListener('click', () => {
                    infobox.style.visibility = 'visible';
                    info.style.visibility = 'visible';
                    
                    picture10.style.visibility = 'hidden';
                    picture10info.style.visibility = 'hidden';
                    wrong.style.visibility = 'hidden';
                    correct.style.visibility = 'hidden';
                    wrongbox.style.visibility = 'hidden';
                    correctbox.style.visibility = 'hidden';
                    picture10.style.visibility = 'hidden';
                    picture9.style.visibility = 'hidden';
                    picture8.style.visibility = 'hidden';
                    picture7.style.visibility = 'hidden';
                    picture6.style.visibility = 'hidden';
                    picture5.style.visibility = 'hidden';
                    picture4.style.visibility = 'hidden';
                    picture3.style.visibility = 'hidden';
                    picture2.style.visibility = 'hidden';
                    AIbtn.style.visibility = 'hidden';
                    humanbtn.style.visibility = 'hidden';
                    finalscore.style.visibility = 'visible';

                    document.getElementById('score').innerHTML = "Score: " + score + "/10"; id = "scoredisplay";;
                    

                    });

                  });
                });
              });
            });

          });
        });



      });

    });

  });



});











// <script>
//document.getElementById("score").innerHTML = "Score: " + score + "/10"; id = "scoredisplay";
//</script>
// relative
//html, body {
  //max-height: 100%;
  //overflow-y: hidden;
//}
//#22092C
//#FAEDCD
//<link rel="stylesheet" href="main.css" />
/*
@media only screen and (max-width: 767px) and (orientation: portrait){
  #startbtn {
    cursor: pointer;
    position: absolute;
    font-size: 4vw;
    top: 70vw;
    left: 43vw;
    height: 10vw;
    width: 19vw;
    border-radius: 15vw;
    color: var(--humanbtnFontColor);
    background-color: var(--buttons);
    border: .1vw solid #37302a;
    font-family: 'Times New Roman', Times, serif;
   
    
  }
  #msg {
    position: absolute;
    z-index: 1000;
    left: 58vw;
    top: 35vw;
    transform: translate(-50%, -50%);
    font-size: 9vw;
  font-family: 'Times New Roman', Times, serif;
  color: var(--text);
  }

  #funfact {
    font-family: 'Times New Roman', Times, serif;
    position: absolute;
    z-index: 1000;
    left: 50vw;
    top: 10.5vw;
    transform: translate(-50%, 0%);
    font-size: 1.75vw;
  }
  
  
  #name {
    position: absolute;
    z-index: 1000;
    left: 50vw;
    top: 0vw;
    transform: translate(-50%, 0%);
    font-size: 3vw;
    font-family: 'Times New Roman', Times, serif;
    font-weight: lighter;
  }
  
  #source {
    position: absolute;
    z-index: 1000;
    left: 60vw;
    top: 19vw;
    transform: translate(-50%, 0%);
    font-size: .85vw;
    font-family: 'Times New Roman', Times, serif;
  }
  
  #funfactbox {
    padding: 0;
    transform: translate(-50%, -50%);
    cursor: pointer;
  
    position: absolute;
  
    top: 16vw;
    left: 50vw;
    height: 10vw;
    width: 66vw;
    border-radius: 3vw;
    border: .1vw solid #37302a;
    color: var(--AIbtnFontColor);
    background-color: var(--AIbtnBg);
    
  
  }
  

}
*/