import Gallery from '../gallery/Gallery';

export default class Form {
  constructor(element) {
    this.element = element;
    this.gallery = new Gallery(document.querySelector('.bottom-container'));
    this.bottomContainer = document.querySelector('.bottom-container');

    this.onSubmit = this.onSubmit.bind(this);
    this.element.addEventListener('submit', this.onSubmit);
  }

  onSubmit(e) {
    e.preventDefault();

    const description = this.element.querySelector('.name').value;
    const url = this.element.querySelector('.url').value;

    const img = document.createElement('img');
    img.setAttribute('src', url);

    img.addEventListener('error', () => {
      console.log('you got it!');
      this.element.reset();
    });

    const imgObject = {
      url,
      description,
    };
    this.gallery.addToArray(imgObject);
    this.element.reset();
    this.gallery.render();
  }
}
