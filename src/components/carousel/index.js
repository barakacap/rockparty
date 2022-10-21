import React, { useEffect, useState } from "react";
import Timer from "../../misc/timer";
import "./index.scss";
import ArrowNext from "../../assets/images/arrow-next.png";
import ArrowBack from "../../assets/images/arrow-back.png";
import img1 from "../../assets/images/carousel/1.mp4";
import img2 from "../../assets/images/carousel/2.mp4";
import img3 from "../../assets/images/carousel/3.mp4";
// import img4 from "../../assets/images/carousel/4.png";


let projects = [
  // {
  //   src: "https://drive.google.com/uc?export=download&id=1z4RtgfwbEv8HtpywJB6WwNm_XGBkHI7y",
  // },
  // {
  //   src: "https://drive.google.com/uc?export=download&id=1tdkN4MeeGDmQKfhBCsRnQ-woaDTzGJxd",
    
  // },
  // {
  //   src: "https://drive.google.com/uc?export=download&id=1nTWRUrUC-5SfGcaRiXrWZKUAYez4EcAB",
  // },
  {
    src: img1,
    
  },
  {
    src: img2,
    
  },

  {
    src: img3,
    
  },
  //add here
  {
    src: img1,
    
  },
  //////////
  // {
  //   src: "https://drive.google.com/uc?export=download&id=1z4RtgfwbEv8HtpywJB6WwNm_XGBkHI7y",
  // },
];

function ProjectCarousel() {
  const [goto, setGoto] = useState(0);
  const [width, setWidth] = useState(0);
  const [progress, setProgress] = useState(1);
  const [timer, setTimer] = useState({});
  const [style, setStyle] = useState({});
  const [status, setStatus] = useState({ progress: 1, state: "original" });
  const [info, setInfo] = useState({
    title: projects[0].title,
    desc: projects[0].desc,
  });

  useEffect(() => {
    // var width = document.getElementsByClassName("ProjectCarousel-left")[0].offsetWidth +1;
    var width = document.getElementsByClassName("ProjectCarousel-left")[0].offsetWidth +2;

    var goto = width;
    setWidth(width);
    window.addEventListener("resize", () => {
      setStyle({
        width: `${
          document.getElementsByClassName("ProjectCarousel-left")[0]
            .offsetWidth + 1
        }px`,
      });
      document.getElementById("carousel-track").style.transition =
        "none 0s ease 0s";
      document.getElementById("carousel-track").style.left = "-1px";
      width =
        document.getElementsByClassName("ProjectCarousel-left")[0].offsetWidth +
        1;
      goto = 0;
      setWidth(width);
      setGoto(0);
      var location = 0;
      for (var i = 0; i < projects.length; i++) {
        location += width;
        projects[i].location = location;
      }
    });
    setStyle({
      width: `${
        document.getElementsByClassName("ProjectCarousel-left")[0].offsetWidth +
        1
      }px`,
    });

    // var location = 0;
    // for (var i = 0; i < projects.length; i++) {
    //   location += width;
    //   projects[i].location = location;
    // }
    // let proNum=1
    // if (status.state !== "original") {
    //   timer.stop();
    //   goto = status.goto;
    // }
    
    // let timer2 = new Timer(() => {
    //   proNum+=1
    //   if(proNum===10){
    //     proNum=1
    //   }
    //   document.getElementById("carousel-track").style.transition =
    //     "left 500ms ease-in-out";
    //   document.getElementById("carousel-track").style.left = `-${goto}px`;

    //   if (goto === width * projects.length) {
        
    //     goto = width;
    //     document.getElementById("carousel-track").style.transition =
    //       "none 0s ease 0s";
    //     document.getElementById("carousel-track").style.left = "0px";

    //     setTimeout(() => {
    //       document.getElementById("carousel-track").style.transition =
    //         "left 500ms ease-in-out";
    //       document.getElementById("carousel-track").style.left = `-${width}px`;
    //     }, [100]);

    //     goto += width;
    //     setGoto(goto);
    //   } else {
    //     goto += width;
    //     setGoto(goto);
    //   }
    //   setTimeout(() => {
    //     setProgress(proNum)
        
    //   }, [300]);
    // }, [1500]);

    // setTimer(timer2);
  }, [status]);

  const goBack = () => {
    let proNum=progress
    proNum-=1
    if(proNum===0){
      proNum=9
    }
    let pos = goto - width * 2;
    document.getElementById("carousel-track").style.transition =
      "left 500ms ease-in-out";
    document.getElementById("carousel-track").style.left = `-${pos}px`;

    if (goto <= width) {
      proNum=1
      pos = width * (projects.length - 1);
      document.getElementById("carousel-track").style.transition =
        "none 0s ease 0s";
      document.getElementById("carousel-track").style.left = `-${pos}px`;

      setTimeout(() => {
    
        document.getElementById("carousel-track").style.transition =
          "left 500ms ease-in-out";
        document.getElementById("carousel-track").style.left = `-${
          pos - width
        }px`;
      }, [100]);
      setGoto(pos);
      setStatus({ goto: pos, state: "New" });
    } else {
      pos += width;
      setGoto(pos);
      setStatus({ goto: pos, state: "New" });
    }

    setTimeout(() => {
      setProgress(proNum)
    }, [300]);
  };
  const goForward = () => {
    let proNum=progress;
    proNum+=1
    if(proNum===10){
      proNum=1
    }
    let pos = goto === 0 ? width : goto;
    document.getElementById("carousel-track").style.transition =
      "left 500ms ease-in-out";
    document.getElementById("carousel-track").style.left = `-${pos}px`;

    if (goto === width * projects.length) {
      proNum=1
      document.getElementById("carousel-track").style.transition =
        "none 0s ease 0s";
      document.getElementById("carousel-track").style.left = "0px";

      setTimeout(() => {
        document.getElementById("carousel-track").style.transition =
          "left 500ms ease-in-out";
        document.getElementById("carousel-track").style.left = `-${width}px`;
      }, [100]);
      pos = width * 2;
      setGoto(pos);
      setStatus({ goto: pos, state: "New" });
    } else {
      pos = pos + width;
      setGoto(pos);
      setStatus({ goto: pos, state: "New" });
    }

    setTimeout(() => {
   
      setProgress(proNum)
        
    }, [300]);
  };

  return (
    <div className="ProjectCarousel mt-4">
       {/* <div className="ProjectCarousel-inner "> */}
        <div className="ProjectCarousel-left">
          <div id="carousel-track">
            {projects.map((project) => {
              return (
                <div
                  style={style}
                  key={Math.random() + Math.random()}
                  className="carousel-img-holder"
                  id="carousel-img-holder"
                >
               
                  <video loop muted autoPlay playsInline>
                    <source src={project.src}/>
                  </video>
                </div>
              );
            })}
          </div>

          <img
            onClick={() => {
              goBack();
            }}
            className="ProjectCarousel-arrowBack"
            src={ArrowBack}
            alt=""
          ></img>
          <img
            onClick={() => {
              goForward();
            }}
            className="ProjectCarousel-arrowNext"
            src={ArrowNext}
            alt=""
          ></img>

        </div>
    
      {/* </div> */}
    </div>
  );
}

export default ProjectCarousel;
