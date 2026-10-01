import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

export default function App() {
  
  const [title, setTitle] = useState('');

  const [favorites, setFavorites] = useState([]);

  const addFavorite = () => {
    
    if (title.trim() === '') {
      return;
    }

    const newFavorite = {
      id: Date.now().toString(),
      title: title.trim(),
    };

    setFavorites([...favorites, newFavorite]);

    setTitle('');
  };

  const deleteFavorite = (id) => {
    setFavorites(favorites.filter((item) => item.id !== id));
  };

  const renderFavorite = ({ item }) => (
    <View style={styles.itemRow}>
      <Text style={styles.itemText}>{item.title}</Text>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteFavorite(item.id)}
      >
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Title / Header */}
      <Text style={styles.header}>My Favorite Movies & Books</Text>

      {/* Input row: TextInput + Add button */}
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Enter an item..."
          value={title}
          onChangeText={setTitle}
        />
        <TouchableOpacity style={styles.addButton} onPress={addFavorite}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      {/* FlatList shows all favorites, or an empty message if there are none */}
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id}
        renderItem={renderFavorite}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No favorites yet</Text>
        }
        contentContainerStyle={favorites.length === 0 && styles.emptyContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  inputRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#fff',
    fontSize: 16,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: '#3F51B5',
    borderRadius: 8,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  itemText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: '#e53935',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#888',
    marginTop: 40,
  },
  emptyContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});
