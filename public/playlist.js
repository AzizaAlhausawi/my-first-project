
    let songsButtons = document.querySelectorAll(".section button");
    let songs = document.querySelectorAll(".song");

    songsButtons.forEach((button, index) =>{
        button.addEventListener('click', function(){
            if(songs[index].paused) {
                songs.forEach(song => song.pause())
                songs[index].play(); 
            }else {
                songs[index].pause();
            }
        });
    });
    
    
    


   //song start play
   
    
    


      
      
     