import React, {useState,useEffect} from 'react';
import logo from './assets/preact.svg';
import './app.css';
import BlogForm from "./BlogForm";
import Edit from "./assets/edit_note_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";
import Delete from "./assets/delete_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";

function App() {
  const [state,setstate] = useState(false);
  const [blogs,setblogs] = useState([]);
  const [EditTitle,setTitle] = useState('');
  const [EditContent,setContent] = useState('');
  const [INDEX,SetIndex] = useState(null);

   useEffect(() => {
    const savedBlogs = JSON.parse(localStorage.getItem("blogs"));
    if (savedBlogs) setblogs(savedBlogs);
  }, []);

  // Save blogs whenever updated
  
  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  function Toggle(){
    setstate(!state);
  }
  function handleData(blog){
    setblogs(prevblogs=>[blog,...prevblogs]);
    setstate(false);
  }

  function handleDelete(index){
    let new_items = [];
    for(let i = 0 ; i < blogs.length ; i++){
      if(i != index){
        new_items.push(blogs[i]);
      }
    }
    setblogs(new_items);
  }
  
  function handleEdit(index){
    SetIndex(index);
    setTitle(blogs[index].tittle);
    setContent(blogs[index].content);
  }
  function handleEditdata(index,updateBlog){
    let new_items = [...blogs];
    new_items[index] = updateBlog;
    setblogs(new_items);
    SetIndex(null);
    setTitle('');
    setContent('');
  }
  return (
    <div className="Blog">
      <div className="Logo">
        <img src={logo} alt="Logo" />
        <span>Quick Blog</span>
      </div>

      <div className="Centre-div">
        <span className="DIV">Your Own </span>
        <span className="blogging-text">Blogging</span>
        <br />
        <span className="DIV">Platform</span>
        <p className="tagline">
          Start writing today — your story matters, and the world is waiting to hear it.<br />
          Share your thoughts, inspire others.
        </p>
      </div>
       <div className='btn'>
        <button onClick={Toggle}>
  {state ? "Close Form" : "Start Writing"}
</button>
      </div>
        {state&& (
          <BlogForm onPublish={handleData}/>
        )}
        <div className='blogs-list'>
  {blogs.length === 0 ? (
    <p>No blogs published yet.</p>
  ) : (
    blogs.map((blog, index) => (
      <div key={index} className="blog-post">
        {INDEX===index ? (
          <BlogForm 
            tittle={EditTitle}
            content={EditContent}
            onPublish={(updateBlog)=> handleEditdata(index,updateBlog)}
          />
        ):(
           <>
        <h2>{blog.tittle}</h2>
        <p>{blog.content}</p>
        <div className="blog-actions">
    <button className="edit-btn" >
      <img src={Edit} alt="Edit" onClick={()=>handleEdit(index)}/>
    </button>
    <button className="delete-btn" onClick={()=>handleDelete(index)}>
      <img src={Delete} alt="Delete" />
    </button>
  </div>
           </>
        )}
      </div>
    ))
  )}
</div>
    </div>
  );
}
export default App;
