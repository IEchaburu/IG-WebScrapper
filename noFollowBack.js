async function noFollowBack() {
    let followers = '';
    let following = '';

    // THIS FUNCTION IS IN CHARGE OF FETCHING ALL THE FOLLOWERS
    async function loadAllFollowers() {
        // VARIABLE TO BE UPDATED REGULARLY, IT'S MODAL CONTAINING THE FOLLOWERS
        let followersCtr = document.querySelector("body > div.x1n2onr6.xzkaem6 > div:nth-child(2) > div > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div")

        if (!followersCtr) {
            console.error("No se pudo encontrar el contenedor de seguidores.");
            return;
        }

        const scrollToEnd = () => {
            followersCtr.scrollTop = followersCtr.scrollHeight;
        }

        // VARIABLE RESPONSIBLE FOR GETTING THE AMOUNT OF FOLLOWERS
        let followersNumber = document.querySelectorAll("span");
        let amountOfFollowers = followersNumber[6].innerHTML;
        
        if (isNaN(amountOfFollowers)) {
            console.error("No se pudo obtener la cantidad de seguidores.");
            return;
        }

        let followersObtained = 0;


        let myFollowers = '';

        // THE WHILE WILL ITERATE AS LONG AS THE AMOUNT OF FETCHED FOLLOWERS IS LOWER THAN THE TOTAL
        // AMOUNT OF FOLLOWERS
        while (followersObtained < amountOfFollowers) {

            scrollToEnd();
            await new Promise(resolve => setTimeout(resolve, 3000)); // Espera un poco para que se carguen los nuevos seguidores

            // THIS SELECTOR SELECTS THE FOLLOWERS, BUT
            // ALSO SELECTS THE FOLLOW BACK BUTTON, SO IT HAS TO BE FILTERED
            let collectedFollowers = [...document.querySelectorAll("._ap3a")];
            let fFollowers = collectedFollowers.filter((follower) => follower.innerText != "Seguir");
            myFollowers = fFollowers;

            followersObtained = fFollowers.length;
        }

        followers = myFollowers;
        
        console.log("Todos los seguidores se han cargado.", followers);

    }

    await loadAllFollowers()


    // FOLLOWING BUTTON, TO BE UPDATED REGULARLY
    let followingButton = document.querySelector("body > div.x1n2onr6.xzkaem6 > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > div > div > div > div.x6s0dn4.xrvj5dj.x1lp0lgv.xh8yej3 > div:nth-child(2) > span > span > span")

    if (!followingButton) {
        console.error("No se pudo encontrar el botón para abrir el modal de seguidos.");
        return;
    };

    followingButton.click()

    // THIS TIME OUT IS IN CASE FOLLOWERS TAKE LONG TO LOAD
    setTimeout(function() {
        
    }, 6000);



    // THIS FUNCTION IS IN CHARGE OF FETCHING ALL THE FOLLOWS
    async function loadAllFollows() {
        // VARIABLE TO BE UPDATED REGULARLY, IT'S MODAL CONTAINING THE FOLLOWS,
        // IT'S THE SAME AS FOLLOWERS
        let followersCtr = document.querySelector("body > div.x1n2onr6.xzkaem6 > div:nth-child(2) > div > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div")

        if (!followersCtr) {
            console.error("No se pudo encontrar el contenedor de seguidos.");
            return;
        }

        const scrollToEnd = () => {
            followersCtr.scrollTop = followersCtr.scrollHeight;
        }

        // VARIABLE RESPONSIBLE FOR GETTING THE AMOUNT OF FOLLOWS
        let followsNumber = document.querySelectorAll("span");
        let amountOfFollows = followsNumber[6].innerHTML;
        
        if (isNaN(amountOfFollows)) {
            console.error("No se pudo obtener la cantidad de seguidos.");
            return;
        }

        let followsObtained = 0;


        let myFollows = '';

        // THE WHILE WILL ITERATE AS LONG AS THE AMOUNT OF FETCHED FOLLOWS IS LOWER THAN THE TOTAL
        // AMOUNT OF FOLLOWS
        while (followsObtained < amountOfFollows) {

            scrollToEnd();
            await new Promise(resolve => setTimeout(resolve, 3000)); // Espera un poco para que se carguen los nuevos seguidos

            // THIS SELECTOR SELECTS THE FOLLOWS, BUT
            // ALSO SELECTS THE FOLLOWING BUTTON, SO IT HAS TO BE FILTERED
            let collectedFollows = [...document.querySelectorAll("._ap3a")];
            let fFollows = collectedFollows.filter((follow) => follow.innerText != "Siguiendo");
            myFollows = fFollows;

            followsObtained = fFollows.length;
        }

        following = myFollows;
        
        console.log("Todos los seguidos se han cargado.", following);

    }

    await loadAllFollows()


    
}

noFollowBack()


