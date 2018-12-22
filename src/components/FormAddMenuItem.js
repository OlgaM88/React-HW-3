import React, { Component } from 'react';

const INITIAL_STATE = {
  name: '',
  description: '',
  image: null,
  imagePreviewUrl: null,
  alt: '',
  price: '',
};
export default class FormToAddItem extends Component {
  state = { ...INITIAL_STATE };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmitForm = e => {
    e.preventDefault();

    const { name, description, image, price, alt } = this.state;

    const newItem = {
      name,
      description,
      image,
      alt,
      price,
    };
    const { addItem } = this.props;
    addItem(newItem);

    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  handleImageChange(e) {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        image: file,
        imagePreviewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  }

  render() {
    const {
      name,
      description,
      image,
      price,
      imagePreviewUrl,
      alt,
    } = this.state;
    const { categories, ingridients } = this.props;

    return (
      <div className="form-add-item">
        <h2>Добавить рецепт</h2>
        <form
          className="form-container"
          onSubmit={this.handleSubmitForm}
          category={categories}
          ingridients={ingridients}
        >
          <h2>{name}</h2>
          <div className="form-container__item">
            <label htmlFor="description" value="description">
              Описание
              <input
                type="text"
                name="description"
                id="description"
                value={description}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="form-container__item">
            <label htmlFor="image" value="image">
              Загрузить картинку
              {imagePreviewUrl ? (
                <img src={imagePreviewUrl} alt={alt} className="img-preview" />
              ) : (
                <div className="previewText">Пожалуйста выберите картинку</div>
              )}
              <input
                type="file"
                name="image"
                value={image}
                onChange={this.handleChange}
              />
              <a href="/" download>
                Загрузить
              </a>
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
