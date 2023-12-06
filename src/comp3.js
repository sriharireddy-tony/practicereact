import { useState } from "react";


function Comp3(){
    const [file, setFile] = useState(null);

    const handleChange = (event) => {
      setFile(event.target.files[0]);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
    //   const formData = new FormData();
    //   formData.append('file', file);

      let formData = new FormData(); 
       formData.append("file", file);
  
      fetch('http://localhost:3000/doc/upload', {
        method: 'POST',
        body: formData
      }).then((response) => {
        if (response.ok) {
          console.log('File uploaded successfully');
        } else {
          console.error('Error uploading file');
        }
      }).catch(err =>{
console.log(err)
      })
    };
  
    return (
      <form
   
  onSubmit={handleSubmit}>
  
        
  <input type="file" onChange={handleChange} />
        
  <button type="submit">Upload</button>

  </form>
    );
  };

export default Comp3;