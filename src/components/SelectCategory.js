import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import setCategory from '../reducers/set-category';

class SelectCategory extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {value: 'showAllPosts'};
  // }

  // componentDidMount = () => {
  //   this.props.dispatch(setCategory('showAllPosts'))
  // }

  // handleChange = (event) => {
  //   this.setState({value: event.target.value}, () => this.props.dispatch(setCategory(this.state.value)));
  //  
  // }

  render() {
    const { categories } = this.props;
    
    return (
      <div className="SelectCategory">
        <select 
          // value={this.state.value} 
          // onChange={this.handleChange}
        >
          <option defaultValue value="showAllPosts">Select Category</option>
          {categories.map(category => (
            <option value={category.name} key={category.name}>{category.name}</option>
          ))}
        </select>
      </div>
    );
  }
}

const mapStateToProps = ({categories, selectedCategory}) => ({
  categories,
  selectedCategory
})

const mapDispatchToProps = dispatch => ({
  setCategory: (selectedCategory) => dispatch(setCategory(selectedCategory))
})

export default connect(mapStateToProps, mapDispatchToProps)(SelectCategory);
