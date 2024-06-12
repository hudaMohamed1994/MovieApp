import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Movie} from './models/ListModel';
import { IMAGE_BASE_URL } from '../api/apiCalls/Constants';

export type Props = {
    movie: Movie;
}

const MovieCard: React.FC<Props> =({movie}) => {
  const imageUrl = `${IMAGE_BASE_URL}${movie.poster_path}`;

  return (
    <View style={styles.card}>
      <Image resizeMode="cover" source={{uri: imageUrl}} style={styles.image} />
      <Text style={styles.title}>{movie.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#312f2f',
    elevation: 3, // For Android shadow
    shadowColor: '#ba5c5c', // For iOS shadow
    shadowOffset: {width: 0, height: 2}, // For iOS shadow
    shadowOpacity: 0.8, // For iOS shadow
    shadowRadius: 2, // For iOS shadow
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    padding: 10,
    fontSize: 16,
    color : '#FFFFFF',
  },
});

export default MovieCard;
