// MATERIALIZE ELEMENT INIT

(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function() {
    Materialize.updateTextFields();
});

// HELPER FUNCTIONS

String.prototype.supplant = function (o) {
    return this.replace(/{([^{}]*)}/g,
        function (a, b) {
            var r = o[b];
            return typeof r === 'string' || typeof r === 'number' ? r : a;
        }
    );
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// TEMP SCROLL FOR NAVBAR LINKS

$("#contact-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact-banner").offset().top
    }, 800);
});

// GET ARRAY OF RECIPE JSONS

var shrimp_recipe = {
                        "RecipeName": "Shrimp Scampi",
                        "Directions": "Put it in a pot\nstir, stir, stir!",
                        "Ingredients": "Shrimp\nPasta\nChives",
                        "imgURL": "scampi.jpg"
                     };

var cheese_recipe = {
                        "RecipeName": "Cheese and Crackers",
                        "Directions": "Open The Cracker Box\nSpread Cheese on Crackers",
                        "Ingredients": "Cheese\nCrackers",
                        "imgURL": "cheese.jpg"
                     };

var chicken_recipe = {
                        "RecipeName": "Herb Roasted Chicken",
                        "Directions": "Open The Fridge\nMicrowave chicken",
                        "Ingredients": "Chicken",
                        "imgURL": "chicken.jpg"
                     };

var creme_recipe = {
                        "RecipeName": "Creme Brule",
                        "Directions": "Open The Fridge\nMicrowave creme",
                        "Ingredients": "Egg Yolks\nCream\nSugar\nVanilla",
                        "imgURL": "creme.jpg"
                     };

var samples = [shrimp_recipe, chicken_recipe, cheese_recipe, creme_recipe];

var real_recipe_entry = {"TableName": "Recipes", "Item": {"RecipeName":"Cheese and Crackers", "Ingredients":"Cheese\nCrackers", "Directions":"Open The Cracker Box\nSpread Cheese on Crackers"}};
var real_recipe_item = real_recipe_entry["Item"]

var all_recipe_list = [];

for (i = 0; i < getRandomInt(10, 16); i++) {
    all_recipe_list.push(samples[getRandomInt(0, samples.length-1)]);
}

// BUILD CARD

function buildTable(ingredient_list) {

    var table_string = "<table><thead><tr><th data-field=\"Item\">Item</th></tr></thead><tbody>{trs}</tbody></table>";

    var all_trs = "";


    for (var ingredient in ingredient_list) {
        var tr_string = "<tr><td>{item_name}</td></tr>";

        all_trs += tr_string.supplant({item_name: ingredient_list[ingredient]});

    }

    return table_string.supplant({trs: all_trs});
}

function buildCard(recipe_obj) {

    recipe_obj["IngredientTable"] = buildTable(recipe_obj["Ingredients"].split("\n"));

    var card_string = "<div class=\"col s12 m4\"><div class=\"card small\"><div class=\"card-image waves-effect waves-block waves-light\"><img class=\"activator\" src=\"{imgURL}\"></div><div class=\"card-content\"><span class=\"card-title activator grey-text text-darken-4\">{RecipeName}<i class=\"material-icons right\">more_vert</i></span><p><a href=\"#\">Get full recipe!</a></p></div><div class=\"card-reveal\"><span class=\"card-title grey-text text-darken-4\">{RecipeName}<i class=\"material-icons right\">close</i></span><p>{IngredientTable}</p></div></div></div>";

    return card_string.supplant(recipe_obj);
}


function buildFullRecipeTable(recipe_list) {

    
    var FULL_TABLE_STR = "";

    var recipe_len = recipe_list.length;
    var spillover = recipe_len % 3;

    for (i = 0; i < recipe_len-spillover ; i += 3) { 

        var cards = buildCard(recipe_list[i]) + buildCard(recipe_list[i+1]) + buildCard(recipe_list[i+2]); 
        var row_string = "<div class=\"food row\">{CARDS_STRING}</div>";

        FULL_TABLE_STR += row_string.supplant({CARDS_STRING: cards});

    }

    if (spillover > 0) {

        cards = "";
        var k = 0;

        while (k < spillover) {
            cards += buildCard(recipe_list[recipe_len-spillover+k]);
            k += 1;
        }

        row_string = "<div class=\"food row\">{CARDS_STRING}</div>";
        FULL_TABLE_STR += row_string.supplant({CARDS_STRING: cards});
    }

    return FULL_TABLE_STR;

}

var FULL_RECIPE_TABLE = buildFullRecipeTable(all_recipe_list);

$("#recipe-section").append(FULL_RECIPE_TABLE);

// Search onclick

function filterRecipeOnSearch(recipe) {
    return recipe["RecipeName"].toLowerCase().includes($("#search").val());
}

$("#search").on("keyup change", function() {
    var search_recipe_list = [];
    var query = $("#search").val();

    if (query != "") {
        // filter on search
        search_recipe_list = all_recipe_list.filter(filterRecipeOnSearch);
        // redraw
        $(".food").remove();
        $("#recipe-section").append(buildFullRecipeTable(search_recipe_list));

    } else {
        // 
        $(".food").remove();
        $("#recipe-section").append(FULL_RECIPE_TABLE);
    }
});

// ALERTS

$("#add-recipe-link").click(function() {
    swal({   title: "Are you sure?",   
             text: "You will not be able to recover the drafted Recipe!",   
             type: "warning",   
             showCancelButton: true,   
             confirmButtonColor: "#DD6B55",   
             confirmButtonText: "Yes, go back to home!",   
             closeOnConfirm: false }, 
             function() {      
                window.location.replace("index.html"); 
             });
});



