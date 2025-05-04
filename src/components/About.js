import React, { Component } from 'react';
import './About.css';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      fullText: 'Frontend Developer',
      index: 0,
      isDeleting: false,
    };
  }

  componentDidMount() {
    this.typeWriterEffect();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  typeWriterEffect = () => {
    const { fullText, isDeleting, text } = this.state;

    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    this.setState({ text: updatedText });

    let speed = isDeleting ? 80 : 150;

    if (!isDeleting && updatedText === fullText) {
      speed = 1500; // Пауза после полной строки
      this.setState({ isDeleting: true });
    } else if (isDeleting && updatedText === '') {
      speed = 1000; // Пауза перед началом новой печати
      this.setState({ isDeleting: false });
    }

    this.timer = setTimeout(this.typeWriterEffect, speed);
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-md-4 text-center">
            <img
              src="./photo_2024-08-17 19.58.08-min.png"
              alt="Profile"
              className="img-fluid rounded-circle"
            />
          </div>
          <div className="col-md-8">
            <h1 className="text-primary">Ravil Boyukzada</h1>
            <h4 className="text-secondary">
              {this.state.text}
              <span className="blinking-cursor">|</span>
            </h4>
            <p className="mt-3">
              Я веб-разработчик с фокусом на создание интуитивных интерфейсов, адаптивной верстки и взаимодействия с пользователем.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
