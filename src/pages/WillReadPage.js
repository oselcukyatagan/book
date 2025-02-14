import React from 'react';
import Sidebar from "../components/Sidebar";

function WillReadPage() {

    const [formData, setFormData] = React.useState({title : "", author : "", cover: "", description : ""});
    

    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name] : [e.target.value]})
    };

    const handleSubmit = (e) => {



        
        e.preventDefault();
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
        Login
      </button>
    </form>
    </div>
    </div>
    );
}

export default WillReadPage;