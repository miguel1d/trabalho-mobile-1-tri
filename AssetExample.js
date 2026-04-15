import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert
} from 'react-native';

export default function App() {
  const produtos = [
    { id: 1, nome: 'Camiseta', preco: 'R$ 50,00' },
    { id: 2, nome: 'Calça Jeans', preco: 'R$ 120,00' },
    { id: 3, nome: 'Tênis', preco: 'R$ 200,00' },
    { id: 4, nome: 'Boné', preco: 'R$ 40,00' },
    { id: 5, nome: 'Jaqueta', preco: 'R$ 180,00' },
    { id: 6, nome: 'Relógio', preco: 'R$ 300,00' },
    { id: 7, nome: 'Óculos', preco: 'R$ 150,00' },
  ];

  const comprar = (nome) => {
    Alert.alert('Compra realizada', `Você comprou: ${nome}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Loja Virtual</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {produtos.map((item) => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.preco}>{item.preco}</Text>

            <TouchableOpacity
              style={styles.botao}
              onPress={() => comprar(item.nome)}
            >
              <Text style={styles.botaoTexto}>Comprar</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#f2f2f2',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  scrollContainer: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 3,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  preco: {
    fontSize: 16,
    color: 'green',
    marginVertical: 5,
  },
  botao: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  botaoTexto: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});