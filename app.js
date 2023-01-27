

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

function drawHeroStats() {
    health.value -= boss.damage
    let heroStatsTemplate = ''
    heroStatsTemplate += `
    <div class="row">
    <div class="col-10 py-3">
        <progress value="100" max="100"></progress>
    </div>
    <div class="col-10 py-3">
    <p class="pt-3">${hero.damage}</p>
    </div>
    `

    console.log(heroStatsTemplate);
    document.getElementById('hero-stats').innerHTML = heroStatsTemplate
}

function drawBoss() {
    let bosstemplate = ''
    bosstemplate += `
    <img class="boss-size" src="${boss.image}" alt="" onclick="attackBoss">
    `
    document.getElementById('boss').innerHTML = bosstemplate
}
drawBoss()

function drawBossStats() {

    document.getElementById('boss-stats')
}


function attackBoss() {
    drawHeroStats()

    boss.health -= hero.damage
}