class Movie extends React.Component {
    render(){
        return(
        <div style={{'display': 'inline-block'}}>
            <img src={this.props.img} />
            <p>{this.props.name}</p>
        </div>
        );
    }
}

class Result extends React.Component {
    render(){
        const movies = results.map((result, index)=>(
            <Movie key={index} name={result.show.name} img={result.show.image.medium} />
        ));

        return (
            <div class='box'>
                <div>
                    {movies}
                </div>
            </div>
        );
    }
}

class Search extends React.Component {
    constructor(props){
        super(props);
        console.log("HOME constructor");
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);

    }

    state = {
        searchText: "",
        results: false
    }

    changeHandler(event){
        this.setState({searchText: event.target.value});
        console.log("change", event.target.value);

    }
    submitHandler(){
        console.log('Submitted')
        this.setState({
            searchText: "",
            results: true
        }) 
    }

    render(){
        let results;
        if(this.state.results){
            results = <Result />
        }else{
            results = <div></div>
        }
    return(
        <div>
            <input value={this.state.searchText} onChange={this.changeHandler}/>
            <button onClick={this.submitHandler}>Search</button>
            {results}
        </div>
        )
    }
}

class Home extends React.Component {
    render() {
        return(
          <div id="home">
            <h1 class='header'>TV Maze React</h1>
            <br />
             <Search />
          </div>
        )
    }
}


ReactDOM.render(
    <div className='container'>
        <Home />
    </div>,
    document.getElementById('root')
);