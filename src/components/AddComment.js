import React, { Component } from 'react';

class AddComment extends Component {

  render() {
    return (
      <div className="AddComment">
        <div className="card flex-grow-1 mt-4">
            <div className="card-body">
                <textarea placeholder="New comment..." className="form-control mb-2"></textarea>
                <input class="form-control mb-2" type="text" placeholder="author"/>
                <button type="button" class="btn btn-outline-primary">Primary</button>
            </div>
        </div>
      </div>
    );
  }
}

export default AddComment;