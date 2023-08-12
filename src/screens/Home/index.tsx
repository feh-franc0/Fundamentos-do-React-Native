import { Text, TextInput, View, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { styles } from "./styles";

import { Participant } from "../../Components/Participant";

export function Home() {
  const participants = ['Rodrigo', 'Vini', 'Diego', 'Biro', 'Duda', 'Tati', 'Franco', 'Lara', 'Caio', 'Gigi']
  
  function handleParticipantAdd() {
    console.log("clicou no btn add")
  }

  function handleParticipantRemove(name: string) {
    console.log(`clicou em remover participante: ${name}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do Evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022.
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input} 
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          keyboardType="default"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      {/* Renderiza apenas os elementos mostrados em tela, usado quando há listas grandes */}
      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Participant 
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove("Fernando")}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participante a sua lista de presença;
          </Text>
        )}
      />

      {/* Usado para listas de Menu (listas pequenas que precisam sempre estar renderizados) */}
      {/* <ScrollView showsVerticalScrollIndicator={false}>
      {
        participants.map(participant => (
          <Participant 
            key={participant}
            name={participant}
            onRemove={() => handleParticipantRemove("Fernando")}
          />
        ))
      }
      </ScrollView> */}
    </View>
  )
}