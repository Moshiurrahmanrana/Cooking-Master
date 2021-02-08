const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');

fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${myParam}`)
  .then((response) => response.json())
  .then((data) => {
    const meal = data.meals[0];
    const wrapper = document.getElementById('wrapper');

    const content = `<div class="container">
    <div class="row">
        
        </class>
         <div class="col-md-4">
         <div class="imgAbt">
            <img  width="300" height="320" src='${meal.strMealThumb}'>
            <h2 class="card-title">${meal.strCategory}</h2>
         </div>
         </div>
         
         <h4>ingredients</h4>
        <div class="col-md-8">
        <ul>
            <li>${meal.strIngredient1}</li>
            <li>${meal.strIngredient2}</li>
            <li>${meal.strIngredient3}</li>
            <li>${meal.strIngredient4}</li>
            <li>${meal.strIngredient5}</li>
            <li>${meal.strIngredient6}</li>
        </ul>
        </div>
    </div>
    </div>`

    wrapper.innerHTML = content;
  });
  