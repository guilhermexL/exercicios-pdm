import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { AppContext } from '../context/AppContext';

export default function ListaScreen() {
  const { dispensa, lista, setLista } = useContext(AppContext);
  const [quantidade, setQuantidade] = useState('');

  const adicionarItem = (id) => {
    if (quantidade) {
      const jaExiste = lista.find(item => item.id === id);
      if (!jaExiste) {
        setLista([...lista, { id, quantidade }]);
      }
      setQuantidade('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Defina o que comprar:</Text>
      <FlatList
        data={dispensa}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.item}>{item.nome}</Text>
            <Text style={styles.subinfo}>Ideal: {item.quantidade}</Text>
            <TextInput
              placeholder="Quantidade para comprar"
              value={quantidade}
              onChangeText={setQuantidade}
              keyboardType="numeric"
              style={styles.input}
            />
            <Button title="Adicionar à lista" onPress={() => adicionarItem(item.id)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F7FAFC' },
  titulo: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  item: { fontSize: 16, fontWeight: 'bold' },
  subinfo: { fontSize: 14, color: '#555' },
  input: {
    backgroundColor: '#F0F4F8',
    borderWidth: 1,
    borderColor: '#CCC',
    padding: 8,
    marginVertical: 8,
    borderRadius: 6,
  },
});
