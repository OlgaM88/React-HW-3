import React, { Component } from 'react';

const INITIAL_STATE = {
  address: '',
  rating: '',
  price: '',
};
export default class FormToAddItem extends Component {
  state = { ...INITIAL_STATE };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmitForm = e => {
    e.preventDefault();

    const { address, rating, price } = this.state;

    const newItem = {
      data: Date.now(),
      address,
      rating,
      price,
    };
    const { addItem } = this.props;
    addItem(newItem);

    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { address, rating, price } = this.state;
    const { menu } = this.props;

    return (
      <div className="form">
        <h2>Add items</h2>
        <form
          className="form-container"
          onSubmit={this.handleSubmitForm}
          items={menu}
        >
          <div className="form-container__item">
            <label htmlFor="address" value="address">
              Address
              <input
                type="text"
                name="address"
                id="address"
                value={address}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="form-container__item">
            <label htmlFor="rating" value="rating">
              Rating
              <input
                type="number"
                name="rating"
                value={rating}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="form-container__item">
            <label htmlFor="price" value="price">
              Price
              <input
                type="text"
                name="price"
                value={price}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
