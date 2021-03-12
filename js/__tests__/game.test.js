import sortHeroes from "../game.js";

test('3 different amounts', ()=>{
    const result = sortHeroes([
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
    ]);

    const expected = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10}
    ];

    expect(result).toEqual(expected);
})

test('1 different amount', ()=>{
    const result = sortHeroes([
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 100},
    ]);

    const expected = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 100},
        {name: 'мечник', health: 10}
    ];

    expect(result).toEqual(expected);
})

test('1 different amount in ither combination', ()=>{
    const result = sortHeroes([
        {name: 'мечник', health: 100},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 100},
    ]);

    const expected = [
        {name: 'мечник', health: 100},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 100},
    ];

    expect(result).toEqual(expected);
})

test('2 not full health heroes', ()=>{
    const result = sortHeroes([
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 10},
    ]);

    const expected = [
        {name: 'маг', health: 100},
        {name: 'мечник', health: 10},
        {name: 'лучник', health: 10}
    ];

    expect(result).toEqual(expected);
})


test('one dead hero', ()=>{
    const result = sortHeroes([
        {name: 'мечник', health: 0},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 10},
    ]);

    const expected = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 10},
        {name: 'мечник', health: 0}
    ];

    expect(result).toEqual(expected);
})

test('3 different amounts with toBe', ()=>{
    const result = sortHeroes([
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
    ]);

    const expected = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10}
    ];

    expect(result).not.toBe(!expected);
})

