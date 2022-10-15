import React, { useEffect } from 'react'
import './index.scss'

function index() {

    useEffect(() => {
        const html = document.documentElement;
        const canvas = document.getElementById("white-guitar-canvas");
        const context = canvas.getContext("2d");
        const app=document.getElementsByClassName('App')[0]

       
        const frameCount = 51;
        const currentFrame = index => (
            // `/guitar-animation/${index}.webp`
             `/guitar-animation-2/${index}.webp`

        )

        const preloadImages = () => {
            for (let i = 1; i < frameCount; i++) {
                const img = new Image();
                img.src = currentFrame(i);
            }
        };

        const img = new Image()
        img.src = currentFrame(1);
        


        img.onload = function () {
            if(window.innerWidth<=500){
                canvas.width=500
                canvas.height=500
                context.drawImage(img, 0, 0,canvas.width,canvas.height);
            }
            else{
                canvas.width=650
                canvas.height=650
                context.drawImage(img, 0, 0,canvas.width,canvas.height); 
            }
        }
    
        context.drawImage(img, 0, 0);
        const updateImage = index => {
            img.src = currentFrame(index);
            context.drawImage(img, 0, 0,canvas.width,canvas.height);
        }
        const aboutSectionTop=document.getElementsByClassName('about')[0].getBoundingClientRect().top

        // console.log(aboutSectionTop)
        app.addEventListener('scroll', () => {
            let currentTop=document.getElementsByClassName('about')[0]?.getBoundingClientRect().top
            // console.log(currentTop,aboutSectionTop*0.8)
            if(currentTop<aboutSectionTop*0.8){


                // console.log(document.getElementsByClassName('about')[0].getBoundingClientRect().top)

                // context.clearRect(0, 0, canvas.width, canvas.height)
                const scrollTop = app.scrollTop;
                // console.log(scrollTop)
                const maxScrollTop = app.scrollHeight - window.innerHeight;
                const scrollFraction =1 - (currentTop / (aboutSectionTop*0.8));
                // console.log(scrollFraction)
                const frameIndex = Math.min(
                    frameCount - 1,
                    Math.ceil(scrollFraction * frameCount)
                );
    
                requestAnimationFrame(() => updateImage(frameIndex + 1))
            }
        });

        window.addEventListener('resize',()=>{
            if(window.innerWidth<=500){
                canvas.width=500
                canvas.height=500
                context.clearRect(0, 0, canvas.width, canvas.height)
                context.drawImage(img, 0, 0,canvas.width,canvas.height);
            }
            else{
                canvas.width=650
                canvas.height=650
                context.clearRect(0, 0, canvas.width, canvas.height)
                context.drawImage(img, 0, 0,canvas.width,canvas.height); 
            }
        })


        preloadImages()

        
    })

    return (
        <div className='white-guitar-wrapper'>
            <div className='white-guitar-inner'>
                <canvas id='white-guitar-canvas'> </canvas>
            </div>
        </div>
    )
}

export default index