import React from "react";
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component {
  state = {
    isLoading : true,
    movies : [],
  }
  getMovies = async () => {
    const {
      data: {
        data : {movies},
      }, //구조분해 할당
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating"); // 평점 내림차순 정렬
    this.setState({movies, isLoading : false}) // 객체의 키와 대입할 변수의 이름이 같음으로 축약 ({movies : movies})
  }
  componentDidMount(){
    this.getMovies();
  }
  render(){
    const { isLoading, movies } = this.state;
    return <div>{isLoading ? 'Loading...' : movies.map((movie)=>{
      return <Movie
      key={movie.id}
      id={movie.id}
      year={movie.year}
      title={movie.title}
      summary={movie.summary}
      poster={movie.medium_cover_image}
      />;
    })}</div>;
  }
}
export default App;