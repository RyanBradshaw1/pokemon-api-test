import React from "react";
import { Text, View, StyleSheet, FlatList } from 'react-native';

const PokemonList = ({ pokemon }) => {
    return (
        <View>
            <FlatList
                keyExtractor={item => item}
                data={pokemon}
                renderItem={({ item }) => {
                    return <Text>{item}</Text>
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default PokemonList;