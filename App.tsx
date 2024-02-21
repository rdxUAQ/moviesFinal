import React, {useState} from 'react';
import {SafeAreaView, Text, Image, FlatList, StyleSheet, View} from 'react-native';





const App = () => {

  

  const moviesList = [
    {
      id: 1,
      name: 'Transformers: La Venganza de los Caídos',
      director: 'Michael Bay',
      url: 'https://es.web.img2.acsta.net/medias/nmedia/18/68/50/66/19123430.jpg',
      year: '2009',
      rate: '⭐⭐⭐⚫⚫',
    },

    {
      id: 2,
      name: 'Cars',
      director: 'Disney',
      url: 'https://m.media-amazon.com/images/M/MV5BMTg5NzY0MzA2MV5BMl5BanBnXkFtZTYwNDc3NTc2._V1_FMjpg_UX1000_.jpg',
      year: '2006',
      rate: '⭐⭐⭐⚫⚫',
    },

    {
      id: 3,
      name: 'Avengers',
      director: 'Marvel',
      url: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
      year: '2012',
      rate: '⭐⭐⭐⭐⚫',
    },
    
    {
      id: 4,
      name: 'El Laberinto del Fauno',
      director: 'Guillermo del Toro',
      url: 'https://pics.filmaffinity.com/El_laberinto_del_fauno-222302534-large.jpg',
      year: '2006',
      rate: '⭐⭐⭐⭐⭐',
    },
    {
      id: 5,
      name: 'Titanic',
      director: 'James Cameron',
      url: 'https://play-lh.googleusercontent.com/560-H8NVZRHk00g3RltRun4IGB-Ndl0I0iKy33D7EQ0cRRwH78-c46s90lZ1ho_F1so=w240-h480-rw',
      year: '1997',
      rate: '⭐⭐⭐⭐⚫',
    },

    {
      id: 6,
      name: 'The Shawshank Redemption',
      director: 'Frank Darabont',
      url: 'data:image/jpeg;base64,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',
      year: '1994',
      rate: '⭐⭐⭐⭐⚫',
    },
    {
      id: 7,
      name: 'Inception',
      director: 'Christopher Nolan',
      url: 'https://moviepostermexico.com/cdn/shop/products/inception_ver3_xxlg_1024x1024@2x.jpg?v=1574871222',
      year: '2010',
      rate: '⭐⭐⭐⭐⚫',
    },
    {
      id: 8,
      name: 'The Godfather',
      director: 'Francis Ford Coppola',
      url: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
      year: '1972',
      rate: '⭐⭐⭐⭐⭐',

    },
  ];

  const [movies, setMovies] = useState(moviesList);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome to Movies App! 🍿</Text>
      <FlatList
        style={styles.flatListContainer}
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
         <>
         <Text style={styles.textName}>{item.name}</Text>
          <Image
            style={styles.image}
            source={{
              uri: item.url,
            }}
          />
          <Text style={styles.textDirector}>Director: {item.director}</Text>
          <Text style={styles.textDirector}>Año: {item.year}</Text>
          <Text style={styles.textRate}>Rate: ⭐⭐⭐⭐ {item.rate}</Text></>

        )}
      />
    </SafeAreaView>
  );

  
  
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#34374C',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: '100%',
    width: '100%',
  },
  title: {
    
    backgroundColor: '#EE2B47',
    color:'#F6F6F6',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
    marginHorizontal: 0,
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 300,
    alignSelf: 'center', 
    marginTop: 15, 
    marginBottom: 15,
  },
  textDirector:{
    color:'#F6F6F6',
    fontSize: 16,
    textAlign: 'center',
  },
  textRate:{
    color:'#F6F6F6',
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
    
  },
  textName:{
    backgroundColor: '#EE2B47',
    marginBottom: 30,
    color:'#F6F6F6',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  flatListContainer:{
    backgroundColor: '#2C2E3E',
    flex: 1,
    marginTop: 30,
    marginBottom: 30, 
  }
});

export default App;