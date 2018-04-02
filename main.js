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
            ashKetchum.roster.push(title);
            ashKetchum.get(title);
            counter++;
            let futureRef = ["#one!", "#two!", "#three!", "#four!", "#five!", "#six!", "#seven!", "#eight!", "#nine!", "#ten!", "#eleven!", "#twelve!"];

            //waits for ajax to finish, then manipulate DOM
            if (counter === 3) {
                ashKetchum.all();
                console.log(ashKetchum);
                let render = function() {
                    for (let i = 0; i < ashKetchum.roster.length; i++) {
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
						  <img class="activator" src="${ashKetchum.roster[i].pic}">
						</div>
						<div class="card-content">
						  <span class="card-title activator grey-text text-darken-4">${ashKetchum.roster[i].name}<i class="material-icons right small">insert_chart</i></span>
						</div>
						<div class="card-reveal">
						  <span class="card-title grey-text text-darken-4">${ashKetchum.roster[i].name}<i class="material-icons right">close</i></span>
						 	<p>Stats</p> 
						  <p>${ashKetchum.roster[i].statsRender()}</p>
						  <p>Abilities</p>
						  <p>${ashKetchum.roster[i].abilitiesRender()}</p>
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
                let index = ashKetchum.roster.length - 1;
                console.log(index);
                console.log(futureRef[index]);
                let render = function() {
                    let card = `<div class="carousel-item z-depth-5" href="${futureRef[index]}"><div class="card large">
                        <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src="${ashKetchum.roster[index].pic}">
                        </div>
                        <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">${ashKetchum.roster[index].name}<i class="material-icons right small">insert_chart</i></span>
                        </div>
                        <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">${ashKetchum.roster[index].name}<i class="material-icons right">close</i></span>
                            <p>Stats</p> 
                        <p>${ashKetchum.roster[index].statsRender()}</p>
                        <p>Abilities</p>
                        <p>${ashKetchum.roster[index].abilitiesRender()}</p>
                        </div>
                        </div>
                        </div>`;

                    $('.carousel').append(card);
                }
                render();
                $('.carousel').carousel({
                    numVisible: ashKetchum.roster.length
                });
                let elem = $('.carousel');
                let instance = M.Carousel.getInstance(elem);
                instance.set(index);
                if (counter == 5) {
                    let modal = ` <div id="modal2" class="modal"><div class="modal-content">
                    <img src="photos/FireRed_LeafGreen_Professor_Oak.png">
                    <p>You still have lots to do. </p>
                    <p>Go into every patch of grass you see and look for Pokémon!</p>
                </div>
                <div class="modal-footer">
                    <audio controls="controls" autoplay>
                            <source src="audio/palettetown.mp3">
                            Your browser does not support the <code>audio</code> element.
                            </audio>
                              <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
                          </div>
                      </div>`;
                    $('#modalContainer').append(modal);
                    $('#modal2').modal();
                    $('#modal2').modal('open');
                }
                if (counter == 7) {
                    let modal = ` <div id="modal3" class="modal"><div class="modal-content">
                    <img src="photos/FireRed_LeafGreen_Professor_Oak.png">
                    <p>Good, it's apparent that you're trying hard! </p>
                    <p>I've given one of my Aides an Itemfinder. Be sure to collect it!</p>
                </div>
                <div class="modal-footer">
                    <audio controls="controls" autoplay>
                            <source src="audio/pokemon-gym.mp3">
                            Your browser does not support the <code>audio</code> element.
                            </audio>
                              <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
                          </div>
                      </div> `;
                    $('#modalContainer').append(modal);
                    $('#modal3').modal();
                    $('#modal3').modal('open');
                }
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