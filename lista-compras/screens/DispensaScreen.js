import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { AppContext } from '../context/AppContext';

export default function DispensaScreen() {
  const { dispensa, setDispensa } = useContext(AppContext);
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');

  const adicionarItem = () => {
    if (nome && quantidade) {
      setDispensa([...dispensa, { id: Date.now().toString(), nome, quantidade }]);
      setNome('');
      setQuantidade('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Adicionar à Dispensa</Text>

      <TextInput
        placeholder="Nome do item"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />

      <TextInput
        placeholder="Quantidade ideal"
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
        style={styles.input}
      />

      <Button title="Adicionar item" onPress={adicionarItem} />

      <Text style={styles.subtitulo}>Itens da Dispensa:</Text>
      <FlatList
        data={dispensa}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.nome} - {item.quantidade}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F0F4F8' },
  titulo: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  subtitulo: { fontSize: 16, marginTop: 20, marginBottom: 5 },
  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#CCC',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
  },
  item: {
    padding: 10,
    backgroundColor: '#E8F0FE',
    borderRadius: 6,
    marginBottom: 5,
  },
});
