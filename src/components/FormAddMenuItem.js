import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import * as API from './services/api';
import CategorySelector from './CategorySelector';

const INITIAL_STATE = {
  name: '',
  description: '',
  image: '',
  imagePreviewUrl: '',
  alt: '',
  price: '',
  categories: [],
  selectedOption: '',
};

export default class FormAddMenuItem extends Component {
  state = { itemAdded: false, ...INITIAL_STATE };

  componentDidMount = () => {
    API.getCategories().then(data => this.setState({ categories: [...data] }));
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCategoryChange = selectedOption => {
    this.setState({ selectedOption });
  };

  handleSubmitForm = e => {
    e.preventDefault();

    const { name, description, image, price, alt, selectedOption } = this.state;

    const newItem = {
      name,
      description,
      image,
      alt,
      price,
      category: selectedOption,
    };

    API.addItemMenu(newItem);

    this.reset();
    this.setState({ itemAdded: true });
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
    API.getCategories().then(data => this.setState({ categories: [...data] }));
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
      itemAdded,
      name,
      description,
      image,
      price,
      imagePreviewUrl,
      alt,
      categories,
      selectedOption,
    } = this.state;

    return (
      <div className="form-add-item">
        <h2>Добавить рецепт</h2>
        <form className="form-container" onSubmit={this.handleSubmitForm}>
          <div className="form-container__item">
            <label htmlFor="name" value="name">
              Название
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={this.handleChange}
              />
            </label>
          </div>
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
            <h4>Выберите категорию</h4>
            <CategorySelector
              options={categories}
              value={selectedOption}
              onChange={this.handleCategoryChange}
            />
          </div>
          <div className="form-container__item">
            <label htmlFor="price" value="price">
              Цена
              <input
                type="text"
                name="price"
                value={price}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <input type="submit" className="submit-btn" />
            {itemAdded && <Redirect to="/menu" />}
          </div>
        </form>
      </div>
    );
  }
}
