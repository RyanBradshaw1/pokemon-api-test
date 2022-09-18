import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from 'react-native';
import PokemonList from "../components/PokemonList";
import Pagination from "../components/Pagination";
import axios from 'axios';

const HomeScreen = () => {
    const [pokemon, setPokemon] = useState([]);
    const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon');
    const [nextPageUrl, setNextPageUrl] = useState();
    const [prevPageUrl, setPrevPageUrl] = useState();
    const [loading, setLoading] = useState(true);

    const searchApi = async () => {
        setLoading(true)
        let cancel
        const response = await axios.get(currentPageUrl, {
            cancelToken: new axios.CancelToken(c => cancel = c)
        });
        setLoading(false)
        setPokemon(response.data.results.map(p => p.name));
        setNextPageUrl(response.data.next);
        setPrevPageUrl(response.data.previous);
        return () => cancel()
    };

    useEffect(() => {
        searchApi();
    }, [currentPageUrl])

    const gotoNextPage = () => {
        setCurrentPageUrl(nextPageUrl)
    };

    const gotoPrevPage = () => {
        setCurrentPageUrl(prevPageUrl)
    };

    if (loading) return <Text>Loading...</Text>

    return (
        <View>
            <PokemonList
                pokemon={pokemon}
            />
            <Pagination
                gotoNextPage={nextPageUrl ? gotoNextPage : null}
                gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default HomeScreen;