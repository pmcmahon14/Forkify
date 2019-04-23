import axios from 'axios';

async function getResults(query) {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const key = 'd2b0f8d8b33b9d2b3391c5e998afa817';
    try {
        const res = await axios(`${proxy}https://food2fork.com/api/search?key=${key}&q=${query}`);
        const recipes = res.data.recipes;
        console.log(recipes);
    } catch (error) {
        alert(error);
    }

}
getResults('tomato pasta');