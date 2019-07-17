import React, { Component } from 'react';
import { View , Text} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

const App = () => {

    return(
        <Provider store={ createStore(Reducers) }>
            <View>
                <Header title="Redux App"/>
                <LibraryList/>
            </View>
        </Provider>
    );
}

export default App;