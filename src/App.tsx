import './App.css';
import HelloWorld from './HelloWorld';
import useUnsplash from './useUnsplash';

function App() {
  const { page } = useUnsplash({ pagination: 1 });

  return (
    <>
      <HelloWorld />
      {page && (
        <div className="img-grid">
          {page.map((photo) => {
            return (
              <img
                alt={photo.alt_description}
                key={photo.urls.small}
                src={photo.urls.small}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default App;
