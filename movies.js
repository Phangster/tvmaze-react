class Movies extends React.Component{
    render(){
        const movies = results.map((movie, index) => {
            return(
            <div className='box'>
                <img src={this.props.img} />
                <p>{this.props.name}</p>
            </div>
            )
        })
        return(
            <ul>
                <div className='container'> 
                    {movies}
                </div>
            </ul>
        )
    }
}

export default Movies;