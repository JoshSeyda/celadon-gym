// Created a class of Trainer
class Trainer {
    constructor() {
            this.pokemon = [];
        }
        //Gets pokemon based on its name along with stats
    getPokemon(name) {
            // console.log(this.pokemon)
            let found = this.pokemon.find(function(element) {
                if (element.name == name) {
                    return true;
                }
            });
            // console.log(found)
            return found;
        }
        //Returns pokemon with its abilities and stats
    allPokemon() {
        return this.pokemon
    }

    addPokemon(newPokemon) {
        this.pokemon.push(newPokemon);
    }
}

// My Trainer name is Batman
let batman = new Trainer(); // class

// Class Pokemon holds information
class Pokemon {
    constructor(name, hp, attack, defense, abilities1, abilities2, frontImage, backImage) {
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.abilities1 = abilities1;
        this.abilities2 = abilities2;
        this.frontImage = frontImage;
        this.backImage = backImage;
    }
}

function createPokemon(pokemon) {
    console.log('ajax');
    $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${pokemon}/`,
        type: "GET",
        dataType: "JSON",
        success: function(data) {
            console.log('test');
            //link datapoints to variables
            let name = data.name,
                title = data.name,
                pic = data.sprites.front_default,
                xP = data.base_experience,
                stat = {},
                abil = [],
                hp = data.stats[5].stat.name,
                hpLvl = data.stats[5].base_stat,
                attck = data.stats[4].stat.name,
                attckLvl = data.stats[4].base_stat,
                dfns = data.stats[3].stat.name,
                dfnsLVL = data.stats[3].base_stat,
                spd = data.stats[0].stat.name,
                spdLvl = data.stats[0].base_stat;

            //set the stat object
            stat.hp = hpLvl;
            stat.attck = attckLvl;
            stat.dfns = dfnsLVL;
            stat.spd = spdLvl;

            //set the ability array
            for (i = 0; i < data.abilities.length; i++) {
                let ability = data.abilities[i].ability.name;
                abil.push(`${ability}`);
            }

            // move pokemon object to trainer
            title = new Pokemon(name, pic, stat, abil);
            pokemonTrainer.pokemon.push(title);
            pokemonTrainer.get(title);
            counter++;
            let futureRef = ["#one!", "#two!", "#three!", "#four!", "#five!", "#six!", "#seven!", "#eight!", "#nine!", "#ten!", "#eleven!", "#twelve!"];

            //waits for ajax to finish, then manipulate DOM
            if (counter === 3) {
                pokemonTrainer.all();
                console.log(pokemonTrainer);
                let render = function() {
                    for (let i = 0; i < pokemonTrainer.pokemon.length; i++) {
                        let reference;
                        if (i === 0) {
                            reference = futureRef[i];
                        } else if (i === 1) {
                            reference = futureRef[i];
                        } else if (i === 2) {
                            reference = futureRef[i];
                        } else {};
                        let card = `<div class="carousel-item z-depth-5" href="${reference}"><div class="card large">
						<div class="card-image waves-effect waves-block waves-light">
						  <img class="activator" src="${pokemonTrainer.pokemon[i].pic}">
						</div>
						<div class="card-content">
						  <span class="card-title activator grey-text text-darken-4">${pokemonTrainer.pokemon[i].name}<i class="material-icons right small">insert_chart</i></span>
						</div>
						<div class="card-reveal">
						  <span class="card-title grey-text text-darken-4">${pokemonTrainer.pokemon[i].name}<i class="material-icons right">close</i></span>
						 	<p>Stats</p> 
						  <p>${pokemonTrainer.pokemon[i].statsRender()}</p>
						  <p>Abilities</p>
						  <p>${pokemonTrainer.pokemon[i].abilitiesRender()}</p>
						</div>
					  </div>
					  </div>`;

                        $('.carousel').append(card);

                    }
                }
                render();
                $('.carousel').carousel();
            }
            if (counter > 3) {
                let index = pokemonTrainer.pokemon.length - 1;
                console.log(index);
                console.log(futureRef[index]);
                let render = function() {
                    let card = `<div class="carousel-item z-depth-5" href="${futureRef[index]}"><div class="card large">
                        <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src="${pokemonTrainer.pokemon[index].pic}">
                        </div>
                        <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">${pokemonTrainer.pokemon[index].name}<i class="material-icons right small">insert_chart</i></span>
                        </div>
                        <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">${pokemonTrainer.pokemon[index].name}<i class="material-icons right">close</i></span>
                            <p>Stats</p> 
                        <p>${pokemonTrainer.pokemon[index].statsRender()}</p>
                        <p>Abilities</p>
                        <p>${pokemonTrainer.pokemon[index].abilitiesRender()}</p>
                        </div>
                        </div>
                        </div>`;

                    $('.carousel').append(card);
                }
                render();
                $('.carousel').carousel({
                    numVisible: pokemonTrainer.pokemon.length
                });
                let elem = $('.carousel');
                let instance = M.Carousel.getInstance(elem);
                instance.set(index);
            }
        },
        error: function(error) {
            console.log(error);
        }
    })
}
createPokemon('nidoking');
createPokemon('haunter');
createPokemon('mewtwo');