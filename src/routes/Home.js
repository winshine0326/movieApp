import React from "react";
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css'

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  }
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      }, //구조분해 할당
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating"); // 평점 내림차순 정렬
    this.setState({ movies, isLoading: false }) // 객체의 키와 대입할 변수의 이름이 같음으로 축약 ({movies : movies})
  }
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ):(
          <div className="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )
      }
      </section>
    )
  }
}
export default Home;