export default function sortHeroes(heroes) {
    return heroes.sort((a, b)=>{
        if (a.health > b.health) return -1;
        if (a.health == b.health) return 0;
        if (a.health < b.health) return 1;
    })
};