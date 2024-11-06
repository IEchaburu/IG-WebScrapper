async function noFollowBack() {
    let followers = '';
    let following = '';

    // FUNCTION TO FETCH ALL FOLLOWERS
    async function loadAllFollowers() {
        let followersCtr = document.querySelector("body > div.x1n2onr6.xzkaem6 > div:nth-child(2) > div > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div")

        if (!followersCtr) {
            console.error("No se pudo encontrar el contenedor de seguidores.");
            return;
        }

        const scrollToEnd = () => {
            followersCtr.scrollTop = followersCtr.scrollHeight;
        }

        let followersNumber = document.querySelectorAll("span");
        let amountOfFollowers = parseInt(followersNumber[5]?.innerHTML, 10);
        if (isNaN(amountOfFollowers)) {
            console.error("No se pudo obtener la cantidad de seguidores.");
            return;
        }

        let followersObtained = 0;
        let myFollowers = [];

        while (followersObtained < amountOfFollowers) {
            scrollToEnd();
            await new Promise(resolve => setTimeout(resolve, 3000));

            let collectedFollowers = [...document.querySelectorAll("._ap3a")];
            let fFollowers = collectedFollowers.filter((follower) => follower.innerText != "Seguir");
            myFollowers = fFollowers;

            followersObtained = fFollowers.length;

            console.log(`Seguidores obtenidos: ${followersObtained}/${amountOfFollowers}`);
        }

        followers = myFollowers;
        console.log("Todos los seguidores se han cargado.", followers);
    }

    await loadAllFollowers();

    // WAIT UNTIL FOLLOWING BUTTON IS CLICKED AND THE MODAL IS FULLY LOADED
    let followingButton = document.querySelector("body > div.x1n2onr6.xzkaem6 > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > div > div > div > div.x6s0dn4.xrvj5dj.x1lp0lgv.xh8yej3 > div:nth-child(2) > span > span > span");

    if (followingButton) {
        followingButton.click();

        // WAIT FOR THE MODAL TO OPEN
        await new Promise(resolve => setTimeout(resolve, 6000)); // Adjust if necessary
    } else {
        console.error("No se pudo encontrar el botón para abrir el modal de seguidos.");
        return;
    }

    // FUNCTION TO FETCH ALL FOLLOWS
    async function loadAllFollows() {
        let followersCtr = document.querySelector("body > div.x1n2onr6.xzkaem6 > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > div > div > div > div.x9f619.xjbqb8w.x78zum5.x168nmei.x13lgxp2.x5pf9jr.xo71vjh.x1sxyh0.xurb0ha.x1uhb9sk.x6ikm8r.x1rife3k.x1iyjqo2.x2lwn1j.xeuugli.xdt5ytf.xqjyukv.x1qjc9v5.x1oa3qoh.x1nhvcw1.x1l90r2v");

        if (!followersCtr) {
            console.error("No se pudo encontrar el contenedor de seguidos.");
            return;
        }

        const scrollToEnd = () => {
            followersCtr.scrollTop = followersCtr.scrollHeight;
        }

        let followsNumber = document.querySelectorAll("span");
        let amountOfFollows = parseInt(followsNumber[7]?.innerHTML, 10);
        if (isNaN(amountOfFollows)) {
            console.error("No se pudo obtener la cantidad de seguidos.");
            return;
        }

        let followsObtained = 0;
        let myFollows = [];

        while (followsObtained < amountOfFollows) {
            scrollToEnd();
            await new Promise(resolve => setTimeout(resolve, 3000));

            let collectedFollows = [...document.querySelectorAll("._ap3a")];
            let fFollows = collectedFollows.filter((follow) => follow.innerText != "Siguiendo");
            myFollows = fFollows;

            followsObtained = fFollows.length;

            console.log(`Seguidos obtenidos: ${followsObtained}/${amountOfFollows}`);
        }

        following = myFollows;
        console.log("Todos los seguidos se han cargado.", following);
    }

    await loadAllFollows();
}

noFollowBack();