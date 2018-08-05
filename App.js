class Movie extends React.Component{
    render(){
        return(       
            <div className='box'>
                <img src={this.props.img} />
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

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            filterText: ''
        }
    }

    filterUpdate(value){
        this.setState({
            filterText: value
        })
    }

    render(){
        const filterText = this.state.filterText
        // console.log('filterText from App.js', this.state.filterText) //able to access the child from parent
        const movies = results
        .filter(movie => {
            // remove movies that does not match current filter text
            return movie.show.name.toLowerCase().indexOf(filterText.toLowerCase()) >=0
        })
        
        .map((movie, index) => {
            return(
                <Movie key={index} name={movie.show.name} img={movie.show.image.medium}/>
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