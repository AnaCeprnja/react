import './App.css';
//name and store variables before reutnr statement and use curly brackets 
function App() {
  const post = {
    title: "Dinosaurs are awesome",
    author: "Stealthy Stegosaurus",
    body: "Check out this body property!",
    comments: ["First!", "Great post", "Hire this author now!"]
  }

  return (
    <div className="App">
      <h2>{post.title}</h2>
      <p>by:{post.author}</p>
      <p>{post.body}</p>
      <h3>Comments:</h3>
      <p>{post.comments[0]}</p>
    </div>
  );
}

export default App;
