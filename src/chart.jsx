import React,{useState,useEffect} from 'react'

const Resize =()=>{
    const [screenSize,setScreenSize] =useState({
        width:window.innerWidth,
        height:window.innerHeight,
        });
    const updateScreenSize =() =>{
        setScreenSize({
            width:window.innerWidth,
            height:window.innerHeight,
            });
    };
    useEffect(() => {
        window.addEventListener('resize',updateScreenSize);
        return () => {
            window.removeEventListener('resize',updateScreenSize);
            };
            }, []);
            return (
                <div>
                    <h1>Screen Size Example</h1>
                    <p>Resize the Window to see the screen size:</p>
                    <p style={{color:"red"}}>width:{screenSize.width}px</p>
                    <p style={{color:"red"}}>height:{screenSize.width}px</p>
                </div>
            );
        };        
export default Resize;