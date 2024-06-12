import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Movie} from './models/ListModel';
import MovieCard from './MovieCard';

export type Props = {
  movies: Movie[];
  title: string;
};

const MoviesList: React.FC<Props> = ({movies , title}) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        data={movies}
        renderItem={({item}) => <MovieCard movie={item} />}
        keyExtractor={(item: Movie) => item.title}
      />
    </View>
  );
};

export default MoviesList;

const styles = StyleSheet.create({
  movieCard: {
    borderRadius: 10,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#b9abab',
  },
  titleStyle: {
    fontSize: 30,
    fontWeight: '600',
    color: '#0c0404',
    fontFamily: 'bold',
    margin: 16
  }
});
