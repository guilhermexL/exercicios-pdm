import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { AppContext } from '../context/AppContext';

export default function CompradosScreen() {
  const { comprados, lista, dispensa } = useContext(AppContext);

  const itensComprados = lista.filter(item => comprados.includes(item.id));

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Itens já comprados</Text>
      <FlatList
        data={itensComprados}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          const nome = dispensa.find(d => d.id === item.id)?.nome || 'Sem nome';
          return (
            <Text style={styles.item}>{nome} - {item.quantidade}</Text>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F8F9FB' },
  titulo: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  item: {
    backgroundColor: '#D9FDD3',
    padding: 10,
    borderRadius: 6,
    marginBottom: 5,
  },
});
