import React, {useState, useEffect} from 'react';
import {StyleSheet, FlatList, Text, View} from 'react-native';

import {getListMovies} from './src/api/apiCalls/MoviesList';
import {Movie} from '../MovieApp/src/components/models/ListModel';
import MovieList from '../MovieApp/src/components/MoviesList'
function App() {
  const [moviesList, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchMoviesList = async () => {
      try {
        const response = await getListMovies();
        console.log('data ...', response.data);
        setMovies(response.data.results);
      } catch (error: any) {
        setError(error.message);
        console.log('error ...', error.message);
      }
    };

    fetchMoviesList();
  }, []);

  const Item = ({data}: {data: Movie}) => (
    <View
      style={{
        backgroundColor: '#231b1b00',
        borderRadius: 10,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      }}>
      <Text style={{fontSize: 24}}>{data.title}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      {error ? (
        <Text>Error: {error}</Text>
      ) : (
        <MovieList movies={moviesList}/>
      )}
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
  },
});

export default App;
