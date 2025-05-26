import React, { useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { AppContext } from '../context/AppContext';

export default function CompraScreen() {
  const { lista, dispensa, comprados, setComprados } = useContext(AppContext);

  const marcarComoComprado = (id) => {
    if (!comprados.includes(id)) {
      setComprados([...comprados, id]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Itens para comprar</Text>
      <FlatList
        data={lista.filter(item => !comprados.includes(item.id))}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          const nome = dispensa.find(d => d.id === item.id)?.nome || 'Sem nome';
          return (
            <View style={styles.card}>
              <Text style={styles.item}>{nome} - {item.quantidade}</Text>
              <Button title="Marcar como comprado" onPress={() => marcarComoComprado(item.id)} />
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#FAFAFA' },
  titulo: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  card: {
    backgroundColor: '#E0FFE0',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  item: { fontSize: 16 },
});
