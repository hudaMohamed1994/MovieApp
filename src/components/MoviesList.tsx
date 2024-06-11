import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Movie} from './models/ListModel';

export type Props = {
  movies: Movie[];
};

const Item = ({data}: {data: Movie}) => (
  <View
    style={styles.movieCard}>
    <Text style={{fontSize: 24}}>{data.title}</Text>
  </View>
);

const MoviesList: React.FC<Props> = ({movies}) => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={movies}
        renderItem={({item}) => <Item data={item} />}
        keyExtractor={(item: Movie) => item.title}
      />
    </View>)
};

export default MoviesList;

const styles = StyleSheet.create({
 movieCard: {
    backgroundColor: '#b9abab',
    borderRadius: 10,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  }
});
