import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const categories = ['ALL', 'Hair', 'Makeup', 'Nail art'];

const data = [
  {
    id: '1',
    title: 'Hair transform',
    thumbnail: require('../assets/4.jpg'),
    video: require('../assets/reels.mp4'),
    likes: '15k',
  },
  {
    id: '2',
    title: 'Bridal makeup',
    thumbnail: require('../assets/1.jpg'),
    video: require('../assets/reels.mp4'),
    likes: '5k',
  },
  {
    id: '3',
    title: 'Nail transformation',
    thumbnail: require('../assets/2.jpg'),
    video: require('../assets/reels.mp4'),
    likes: '12k',
  },
  {
    id: '4',
    title: 'Hair Color Transformation',
    thumbnail: require('../assets/3.jpg'),
    video: require('../assets/reels.mp4'),
    likes: '13k',
  },
  {
    id: '5',
    title: 'Hair Color Transformation',
    thumbnail: require('../assets/glow.jpg'),
    video: require('../assets/reels.mp4'),
    likes: '13k',
  },
  {
    id: '6',
    title: 'Hair Color Transformation',
    thumbnail: require('../assets/hairspa.jpg'),
    video: require('../assets/reels.mp4'),
    likes: '13k',
  },
  
];

export default function ExploreScreen() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const navigation = useNavigation();

  const renderCategory = (item) => (
    <TouchableOpacity
      key={item}
      style={[styles.categoryButton, selectedCategory === item && styles.categoryButtonActive]}
      onPress={() => setSelectedCategory(item)}
    >
      <Text
        style={[styles.categoryText, selectedCategory === item && styles.categoryTextActive]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('ReelDetail', { reel: item })}
    >
      <Image source={item.thumbnail} style={styles.image} />
      <View style={styles.likeContainer}>
        <Ionicons name="heart" size={14} color="#fff" />
        <Text style={styles.likeText}>{item.likes}</Text>
      </View>
      <Text style={styles.title} numberOfLines={1}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={20} color="#000" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Explore</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={18} color="#888" style={{ marginLeft: 8 }} />
        <TextInput
          placeholder="Search by service & product"
          placeholderTextColor="#888"
          style={styles.searchInput}
        />
      </View>

      {/* Category Tabs */}
      <View style={styles.categoryContainer}>
        {categories.map(renderCategory)}
      </View>

      {/* Grid List */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<Text style={styles.thankYou}>Thank You</Text>}
        contentContainerStyle={{ paddingBottom: 30 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    paddingTop: 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#fff',
    marginBottom: 10,
    position: 'relative',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 10,
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    height: 40,
    marginBottom: 12,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 8,
    fontSize: 14,
    color: '#000',
  },
  categoryContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  categoryButton: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    backgroundColor: '#f8f5f7',
    borderRadius: 6,
    marginRight: 8,
  },
  categoryButtonActive: {
    backgroundColor: '#c2185b',
  },
  categoryText: {
    color: '#c2185b',
    fontSize: 13,
  },
  categoryTextActive: {
    color: '#fff',
    fontWeight: '500',
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    flex: 1,
    marginHorizontal: 5,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  likeContainer: {
    position: 'absolute',
    right: 8,
    top: 8,
    backgroundColor: 'rgba(255, 0, 128, 0.7)',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  likeText: {
    color: '#fff',
    fontSize: 12,
    marginLeft: 3,
  },
  title: {
    marginTop: 6,
    marginBottom: 5,
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    paddingHorizontal: 5,
  },
  thankYou: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: '#c2185b',
    marginTop: 15,
  },
});
