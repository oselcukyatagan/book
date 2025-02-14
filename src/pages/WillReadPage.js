import React from 'react';
import Sidebar from "../components/Sidebar";
import axios from "axios";

function WillReadPage() {

    const [formData, setFormData] = React.useState({title : "", author : "", cover: "", description : ""});

    const handleChange = (e) =>{
        setFormData((prev) => ({...prev, [e.target.name] : e.target.value}))
    };

    const handleSubmit = async (e) => {

      e.preventDefault();

      try{
        await axios.post("http://localhost:8800/books", formData);
      }catch(err){
        console.log(err);
      }

        
        
        console.log("Form submitted:", formData);
      };


    return (
        <div>
        <Sidebar></Sidebar>

        <div className='book-info-form'>

       <form onSubmit={handleSubmit} className="">
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
      />
      <input
        type="text"
        name="author"
        value={formData.author}
        onChange={handleChange}
        placeholder="Author"
        className=""
        required
      />
       <input
        type="text"
        name="cover"
        value={formData.cover}
        onChange={handleChange}
        placeholder="Cover"
        className=""
      />
       <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className=""
      />
      <button type="submit" className="">
        Submit
      </button>
    </form>
    </div>
    </div>
    );
}

export default WillReadPage;