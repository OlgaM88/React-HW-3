import React, { Component } from 'react';

const INITIAL_STATE = {
  message: '',
  grade: '',
};

const optionsGrade = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

export default class AddComment extends Component {
  state = { ...INITIAL_STATE };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { message, grade } = this.state;
    return (
      <div className="comments">
        <h4> Comments and ratings to the recipe</h4>
        <form className="comments-save-form">
          <label htmlFor="grade">
            Choose a grade
            <select
              className="select-grade"
              name="grade"
              value={grade}
              onBlur={this.handleChange}
            >
              {optionsGrade.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <textarea
            className="message-field"
            rows="4"
            name="message"
            value={message}
            placeholder="Leave a comment..."
            onChange={this.handleChange}
          />

          <input type="submit" className="save-message-btn" value="Save" />
        </form>
      </div>
    );
  }
}
