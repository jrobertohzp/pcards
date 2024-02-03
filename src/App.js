import './App.css';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <h1>This is what our students say about the Kodemia Bootcamp:</h1>
        <Testimonial
          name='Berlioz Bonfamille'
          city='Paris'
          image='berlioz'
          job='Software Engineer'
          company='Dell'
          testimonial='I was a bit skeptical at first, but after the first week I was already building my own projects. I am now a full-time software engineer at Dell.'
        />
        <Testimonial
          name='Marie Bonfamille'
          city='Paris'
          image='marie'
          job='Web Developer'
          company='Google'
          testimonial='I had some experience with web development, but I was stuck. I joined the bootcamp and now I am a web developer at Google.'
        />
        <Testimonial
          name='Toulouse Bonfamille'
          city='Paris'
          image='toulouse'
          job='Data Scientist'
          company='IBM'
          testimonial='I had a background in mathematics and I wanted to learn how to apply it to the real world. Now I am a data scientist at IBM.'
        />
      </div>
    </div>
  );
}

export default App;
