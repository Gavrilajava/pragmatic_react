import React from 'react'

const RecipeCard = ({recipe}) => {

  return(
    <div className = "RecipeCard" style = {{backgroundImage: `url(${recipe.picture})`}}>
      <h2>{recipe.name}</h2>
      <div className ="area">{recipe.area}</div>
      <div className ="category">{recipe.category}</div>
      {recipe.tags.map(tag => <div className="tag" key = {tag+recipe.id}>{tag}</div>)}
    </div>
  )
}

export default RecipeCard