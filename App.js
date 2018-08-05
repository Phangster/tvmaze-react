class Movie extends React.Component{
    render(){
        return(       
            <div className='box'>
                <img src={this.props.img} 
                    onClick={()=> this.props.addFavourites(this.props.id)}
                />
                <p>{this.props.name}</p>
            </div>
        )
    }
}

class Search extends React.Component{
    searchUpdate(){
        const val = this.current_value.value
        this.props.filterUpdate(val) 
        // console.log(val)
        // console.log(this.refs) // is a special word
        // console.log('Filtered Text ', this.props.filterText)
    }
    render(){
        return(
            <nav>
                <div className="nav-wrapper">
                <form>
                    <div className="input-field">
                        <input id="search"
                         type="text"
                         ref={(value) => this.current_value = value}
                         placeholder='Search Movies'
                         onChange={this.searchUpdate.bind(this)}/>
                    </div>
                </form>
                </div>
            </nav>
        )
    }
}

class Favourite extends React.Component{

    addUpdate(){
        const id= this.id
        this.props.favourites(id)
    }

    render(){
        // console.log(this.props.movies)
        // console.log(this.props.favourites)
        const movieList = this.props.favourites.map(id => {
            const { name, image } = results[id].show //Shows the favourite movie when the state of movie has a value
            // console.log(favMoviesName)
            
            return(
                <div className='box'>
                    <img src={image.medium} />
                    <p>{name}</p>
                </div>
            )
        })

        return(
        <div className='favourite'>
            <h4>Favourite Movies</h4>
            <ul>{movieList}</ul>
        </div>
        )
    }
}

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            filterText: '',
            favourites: []
        }
    }

    filterUpdate(value){
        this.setState({
            filterText: value
        })
    }

    addFavourites(id){
        const newList = this.state.favourites.concat([id])
        this.setState({favourites: newList})
    }

    render(){
        console.log(this.state.favourites)
        const filterText = this.state.filterText
        // console.log('filterText from App.js', this.state.filterText) //able to access the child from parent
        const movies = results
        .filter(movie => {
            // remove movies that does not match current filter text
            return movie.show.name.toLowerCase().indexOf(filterText.toLowerCase()) >=0
        })
        
        .map((movie, id) => {
            return(
                <Movie
                    id={id}
                    key={id}
                    name={movie.show.name} 
                    img={movie.show.image.medium}
                    addFavourites={this.addFavourites.bind(this)}
                />
            )
        })

        return(
            <ul>
                <div className='container'>
                    <h1 className='header'>TV Maze React</h1>
                    <Search 
                        filterText={this.state.filterText}
                        filterUpdate={this.filterUpdate.bind(this)}
                    />
                    
                    <Favourite 
                        favourites={this.state.favourites}
                    />

                    <h4>All Movies Available</h4>
                    {movies}
                </div>
            </ul>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);