

let hero = {
    name: "Naruto",
    damage: 10,
    health: 100,
    image: "assets/good-naruto.gif"
}


let boss = {
    name: "Sasuke",
    damage: 5,
    health: 100,
    image: "assets/sasuke.gif"
}




function drawHero() {
    let herotemplate = ''
    herotemplate += `
    <img class="hero-size" src="${hero.image}" alt="">
    `
    document.getElementById('hero').innerHTML = herotemplate
}
drawHero()

function drawBoss() {
    let bosstemplate = ''
    bosstemplate += `
    <img class="boss-size" src="${boss.image}" alt="">
    `
    document.getElementById('boss').innerHTML = bosstemplate
}
drawBoss()