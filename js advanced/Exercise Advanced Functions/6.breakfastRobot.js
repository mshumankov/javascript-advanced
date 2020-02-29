function solution() {


    let ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    return function (input) {
        let [command, ingredient, quantity] = input.split(' ');
        quantity = Number(quantity);

        if (command === 'restock') {
            restock(ingredient, quantity);
            console.log('Success');
        } else if (command === 'report') {
            console.log(`protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`);
        } else {
            prepare(ingredient, quantity);
        }

        function restock(ingredient, quantity) {
            ingredients[ingredient] += quantity;
        }

        function prepare(food, quantity) {
            if (food === 'apple') {
                if (ingredients.carbohydrate < quantity * 1) {
                    console.log(`Error: not enough carbohydrate in stock `);
                    return;
                }
                if (ingredients.flavour < quantity * 2) {
                    console.log(`Error: not enough flavour in stock `);
                    return;
                }

                ingredients.carbohydrate -= quantity * 1;
                ingredients.flavour -= quantity * 2;
                console.log('Success');

            } else if (food === 'lemonade') {
                if (ingredients.carbohydrate < quantity * 10) {
                    console.log(`Error: not enough carbohydrate in stock `);
                    return;
                }
                if (ingredients.flavour < quantity * 20) {
                    console.log(`Error: not enough flavour in stock `);
                    return;
                }

                ingredients.carbohydrate -= quantity * 10;
                ingredients.flavour -= quantity * 20;
                console.log('Success');
            } else if (food === 'burger') {
                if (ingredients.carbohydrate < quantity * 5) {
                    console.log(`Error: not enough carbohydrate in stock `);
                    return;
                }
                if (ingredients.fat < quantity * 7) {
                    console.log(`Error: not enough fat in stock `);
                    return;
                }
                if (ingredients.flavour < quantity * 3) {
                    console.log(`Error: not enough flavour in stock `);
                    return;
                }

                ingredients.carbohydrate -= quantity * 5;
                ingredients.fat -= quantity * 7;
                ingredients.flavour -= quantity * 3;
                console.log('Success');

            } else if (food === 'eggs') {
                if (ingredients.protein < quantity * 5) {
                    console.log(`Error: not enough protein in stock `);
                    return;
                }
                if (ingredients.fat < quantity * 1) {
                    console.log(`Error: not enough fat in stock `);
                    return;
                }
                if (ingredients.flavour < quantity * 1) {
                    console.log(`Error: not enough flavour in stock `);
                    return;
                }

                ingredients.protein -= quantity * 5;
                ingredients.fat -= quantity * 1;
                ingredients.flavour -= quantity * 1;
                console.log('Success');

            } else if (food === 'turkey') {
                if (ingredients.protein < quantity * 10) {
                    console.log(`Error: not enough protein in stock `);
                    return;
                }
                if (ingredients.carbohydrate < quantity * 10) {
                    console.log(`Error: not enough carbohydrate in stock `);
                    return;
                }
                if (ingredients.fat < quantity * 10) {
                    console.log(`Error: not enough fat in stock `);
                    return;
                }
                if (ingredients.flavour < quantity * 10) {
                    console.log(`Error: not enough flavour in stock `);
                    return;
                }

                ingredients.protein -= quantity * 10;
                ingredients.carbohydrate -= quantity * 10;
                ingredients.fat -= quantity * 10;
                ingredients.flavour -= quantity * 10;
                console.log('Success');
            }
        }
    }
}

let manager = solution();
manager("restock carbohydrate 10");
manager("restock flavour 10");
manager("prepare apple 1");
manager("restock fat 10");
manager("prepare burger 1");
manager("report");