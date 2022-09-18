import React from "react";
import { Text, View, StyleSheet, Button } from 'react-native';

const Pagination = ({ gotoNextPage, gotoPrevPage }) => {
    return (
        <View>
            {gotoPrevPage ? <Button title="Previous" onPress={gotoPrevPage} /> : null}
            {gotoNextPage ? <Button title="Next" onPress={gotoNextPage} /> : null}

        </View>
    );
};

const styles = StyleSheet.create({});

export default Pagination;