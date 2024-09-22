import React from "react";
import axios from 'axios';

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
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    this.setState({movies, isLoading : false}) // 객체의 키와 대입할 변수의 이름이 같음으로 축약 ({movies : movies})
  }
  componentDidMount(){
    this.getMovies();
  }
  render(){
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading...' : 'We are ready.'}</div>;
  }
}
export default App;