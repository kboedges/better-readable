import React, { Component } from 'react';
import { connect } from 'react-redux';

class SelectCategory extends Component {
  render() {
    const { categories } = this.props;
    
    return (
      <div className="SelectCategory">
        <select>
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
  categories
})

export default connect(mapStateToProps)(SelectCategory);
