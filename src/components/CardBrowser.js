import React from 'react'
import RecipeCard from './RecipeCard'

export default class CardBrowser extends React.Component {

  constructor(){
    super()
    this.state = {
      recipes: [],
      filter: ""
    }
  }

  componentDidMount = () =>{
    fetch('http://localhost:3000/recipes')
      .then(resp => resp.json())
      .then(recipes => this.setState({recipes}))
  }

  handleChange = (e) => {
    this.setState({filter: e.target.value})
  }

  filterRecipes = () => {
    if (this.state.filter.length){
      return this.state.recipes.filter(r => `${r.name},${r.category},${r.tags.join(",")}`.includes(this.state.filter))
    }
    else{
      return this.state.recipes
    }
  }

  render(){
    return(
      <div className = "RecipeContainer">
        <input onChange = {this.handleChange}></input>
        {this.filterRecipes().map(recipe => <RecipeCard key = {recipe.id} recipe = {recipe}/>)}
      </div>
    )
  }

}