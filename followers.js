let followersCtr = document.querySelector(".xyi19xy")

const scrollToEnd = () => {
    followersCtr.scrollTop = followersCtr.scrollHeight;
}

async function loadAllFollowers() {
    let previousHeight = 0;
    let currentHeight = followersCtr.scrollHeight;

    while (previousHeight !== currentHeight) {
        previousHeight = currentHeight;
        scrollToEnd();
        await new Promise(resolve => setTimeout(resolve, 2000)); // Espera un poco para que se carguen los nuevos seguidores
        currentHeight = followersCtr.scrollHeight;
    }
    
    console.log("Todos los seguidores se han cargado.");
}

loadAllFollowers()


let followers = [...document.querySelectorAll("._ap3a")]

let fFollowers = followers.filter((follower) => follower.innerText != "Seguir")