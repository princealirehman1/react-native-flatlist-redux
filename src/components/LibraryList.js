import React, { Component } from 'react';
import { View , Text , FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {

    render(){

        // console.log(this.props.libraries)

        return(
            <View>
                <FlatList 
                 data={ this.props.libraries }
                 keyExtractor={ ( library ) => library.id }
                 renderItem={ ( library ) =>this.renderListItem(library) }
                  />
            </View>
        );
    }

    renderListItem=( library ) => {

        console.log("**** RenderList Item ***")
        console.log(library);

        return (

            <ListItem library={ library } />
        );

    }

    _keyExtractor = (library, index) => { 
    
        // console.log(library);
        return library.id;
     }

}

const mapStateToProps = (state) => {

    return { libraries : state.libraries };
};

export default connect(mapStateToProps)(LibraryList);