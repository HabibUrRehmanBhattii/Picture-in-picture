const videoElement = document.getElementById("video");
const button = document.getElementById("button");  

// Prompt to select media stream, pass to videio elemtn, then play
async function selectMediaStream(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    }catch(error){
        //Catch error
        console.log("Whoops, error here:", error);
    }
};
 
button.addEventListener("click", async() => {
    //Disable Button 
    button.disable = true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disable = false;
});

// On load
selectMediaStream();


