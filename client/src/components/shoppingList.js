import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

//connect allows us to get state from redux into react component//
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemactions';
import PropTypes from 'prop-types';


class ShoppingList extends Component {
    
    componentDidMount() {
        this.props.getItems();
    }
    //passes id into function and calls deleteItem function//
    onDeleteClick = (id) => {
        this.props.deleteItem(id)
    }


    render() {
        
        const { items } = this.props.item;
        return(
            <Container>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({ _id, name })=>(
                            <CSSTransition key={_id} timeout={500} className="items">
                                {/* having fade on this makes items invisible on dom but the are there. requires css */} 
                                <ListGroupItem>
                                    <Button
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick={this.onDeleteClick.bind(this, _id)}>&times;</Button>
                                    {name}
                                </ListGroupItem>
                            </ CSSTransition>
                        ))}
                    </ TransitionGroup>
                </ ListGroup>
            </ Container>
        );
    }
}

//actions are brought in as props//
ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}
//item refers to reducer//
const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);