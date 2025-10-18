const playlist = [
            {
                img: "media/cover/ma meilleure ennemie.png",
                audio: "media/song/ma meilleure ennemie.mp3",
                p: "Ma Meilleure Ennemie",
                span: "Stromae,Pomme"
            },
            {
                img: "./media/cover/polytope.png",
                audio: "media/song/polytope.mp3",
                p: "Polytope",
                span: "Daichi Miura"
            },
            {
                img: "media/cover/to the wilder.png",
                audio: "media/song/to the wilder.mp3",
                p: "To The Wilder",
                span: "Woodkid"
            },
            {
                img: "media/cover/it's going down now.png",
                audio: "media/song/it's going down now.mp3",
                p: "It's Going Down Now",
                span: "Atlus Team"
            },
            {
                img: "media/cover/don't be so serious.png",
                audio: "media/song/don't be so serious.mp3",
                p: "Don't Be So Serious",
                span: "Low Roar"
            }
        ];
        var audio = document.querySelector("audio")
        var play = document.querySelector("#playMusic");
        var pause = document.querySelector("#pauseMusic");
        var previous = document.querySelector("#previousSong");
        var next = document.querySelector("#nextSong");
        var stop = document.querySelector("#stopMusic");
        var volume = document.querySelector("#songVoulme");
        var songImage = document.getElementById("songAlbum");
        var songAudio = document.getElementById("songSource");
        var musicName = document.getElementById("songName");
        var artistName = document.getElementById("artistName");
        var playTime = document.getElementById("currentPlay");
        var progress = document.getElementById("musicTracker");
        songSource.volume = 0.04;
        play.addEventListener("click", function () {
            audio.play();
        })
        pause.addEventListener("click", function () {
            audio.pause();
        })
        stop.addEventListener("click", function () {
            audio.currentTime = 0;
            audio.pause();
        })
        
        let count = 0;

        function showSong(index) {
            songImage.src = playlist[index].img;
            songAudio.src = playlist[index].audio;
            musicName.textContent = playlist[index].p;
            artistName.textContent = playlist[index].span;
        }

        next.addEventListener("click", function () {
            count = (count + 1);
            if (count > playlist.length - 1) {
                count = 0;
            }
            showSong(count);
            audio.play();
        });

        previous.addEventListener("click", function () {
            if (count <= 0) {
                count = (playlist.length - 1) + 1;
            }
            count = (count - 1)
            showSong(count);
            audio.play();
        });
        showSong(count);

        var musicTracker = document.getElementById("musicTracker");
        var volumeChange = document.getElementById("volumeChange");
        volumeChange.value = 5;

        audio.addEventListener("timeupdate", function () {
            musicTracker.value = (audio.currentTime / audio.duration) * 100;
            if (audio.currentTime == audio.duration) {
                count = (count + 1);
                audio.play();
            }
        });
        volume.addEventListener("click", function () {
            audio.muted = !audio.muted;
            if (audio.muted == true) {
                volume.className = "fa-solid fa-volume-xmark";
                volumeChange.value=0;
            }
            else {
                volume.className = "fa-solid fa-volume-high";
            }
        })

        musicTracker.addEventListener("change", function () {
            audio.currentTime = (musicTracker.value / 100) * audio.duration;

        });

        volumeChange.addEventListener("input", function () {
            audio.volume = volumeChange.value / 100;
        });
        audio.addEventListener("timeupdate", function () {
            var minutes = Math.floor(audio.currentTime / 60)
            var seconds = Math.floor(audio.currentTime % 60)
            current.innerText = `${minutes}:${seconds}`
            let totalMinutes = Math.floor(audio.duration / 60);
            let totalSeconds = Math.floor(audio.duration % 60);
            playTime.innerText = `${totalMinutes}:${totalSeconds}`;
        });
        const slider = document.querySelector("input[type=range]");
        slider.addEventListener("input", () => {
            let value = (slider.value - slider.min) / (slider.max - slider.min) * 100;
            slider.style.setProperty("--value", value + "%");
        });
        console.log(audio);