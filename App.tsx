import React, {useState, useEffect} from 'react';
import {StyleSheet, FlatList, Text, View} from 'react-native';

import {getListMovies, getListNowMovies} from './src/api/apiCalls/MoviesList';
import {Movie} from '../MovieApp/src/components/models/ListModel';
import MovieList from '../MovieApp/src/components/MoviesList';
function App() {
  const [moviesList, setMovies] = useState<Movie[]>([]);
  const [NowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([]);

  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchMoviesList = async () => {
      try {
        const response = await getListMovies();
        setMovies(response.data.results);
      } catch (error: any) {
        setError(error.message);
      }
    };
    const fetchNowPlayingMovies = async () => {
      try {
        const response = await getListNowMovies();
        console.log('getListNowMovies ...', response.data);
        setNowPlayingMovies(response.data.results);
      } catch (error: any) {
        setError(error.message);
        console.log('error ...', error.message);
      }
    };
    fetchNowPlayingMovies();
    fetchMoviesList();
  }, []);

  return (
    <View style={styles.container}>
      <MovieList title={ "Now Palying Movies"}  movies={moviesList} />
      <MovieList  title={ "Popular Movies"}  movies={NowPlayingMovies} />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  container: {
    flex: 1,
    backgroundColor : '#8f8d8d'
  },
});

export default App;
