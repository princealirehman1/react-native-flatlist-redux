import React, { Component } from 'react';
import { View , Text , TouchableWithoutFeedback , LayoutAnimation} from 'react-native';
import { Card, CardSection } from './common';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ListItem extends Component{

    componentDidUpdate(){

        LayoutAnimation.spring();
    }

    render(){

        // console.log(this.props);

        const { id , title , description } = this.props.library.item;

        console.log("*** Item Data ***\n"+id + "\n"  + title + "\n" + description);

        return(

            <TouchableWithoutFeedback onPress={()=>{ 
                this.props.selectLibrary(id);
                }}>

                <View>
                    <CardSection >
                    
                    <Text style={styles.titleStyle}> { title } </Text>

                    </CardSection>

                    { this.renderDescription() }

                </View>

            </TouchableWithoutFeedback>
        
        );

    }

    renderDescription = () => {

        console.log("*** Row Selected Item ***\n"+this.props.library.item.id);
        
        console.log("*** Props Selected Item ***\n"+this.props.selectedItem);

        return(

            this.props.library.item.id === this.props.selectedItem ? (
            
                <CardSection>
                    <Text style={{flex:1 , padding:15}}> { this.props.library.item.description } </Text>
                </CardSection>
            ): (
                <View>

                </View>
            )

        );
    }
    
}

const styles = {

    titleStyle : {
        fontSize: 18, padding: 15,
    }
}

const mapStateToProps = (state) => {

    return { selectedItem : state.selectedItem };
};

export default connect(mapStateToProps,actions)(ListItem);