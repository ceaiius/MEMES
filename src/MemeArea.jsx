import React, { useState } from "react";
import CreateButton from "./CreateButton";
import memes from "./Memes";
import Header from "./Header"
function MemeArea(){

    
    const [image, setImage] = useState("https://clipart-best.com/img/trollface/trollface-clip-art-7.png");
    const [title, setTitle] = useState("Generate a Random Meme")
    function handleClick(){
        
        const randomImage = Math.floor(Math.random() * 21);
        console.log(randomImage);
        setImage(memes[randomImage].src);
        setTitle(memes[randomImage].title)
    }

    return(
        <div className="memeArea">
            <Header title={title}/>
            <img src={image} height={500} />

            <CreateButton click={handleClick}/>
        </div>
    )
}

export default MemeArea;