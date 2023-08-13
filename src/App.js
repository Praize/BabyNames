import girlImg from './baby-girl.png';
import boyImg from './baby-boy.png';
import unisex from './unisex.jpg';
import './App.css';
import axios from "axios";
import { useState} from 'react';

function App() {

const [gender, setGender] = useState("neutral");
const [data, setData]     = useState("");

//fetch header (API keys)
const http = axios.create({
  headers: {
      
      'X-Api-Key': '4nhjF8hiGDoSm4XYvNsUfQ==VsXBUBYRL77O5c82'  },

});

//Fetch baby names
async function fetchNames(gender){
  await http.get('https://api.api-ninjas.com/v1/babynames?gender=' + gender)
  .then((response)=>{ 
    //console.log(response.data); 
    setData(response.data);

  })
  .catch((err)=>{
    console.log(err);
  });
}

fetchNames(gender);

//Condition formating form Baby Based on Select
 const RenderBabyContent  = () =>{
      if(gender == 'boy'){
        return <div className="picDiv">
                <div  style={{backgroundColor: 'blue', padding:'5rem', marginLeft:'3rem' , marginRight:'3rem' , borderRadius:'50%' , width:'7rem' , height:'7rem' , textAlign : 'center'}}>
                  <p style={{fontWeight:'bold'}}>{gender}</p>
                  <p style={{marginTop : '1rem' , fontSize:'25px'}}>{data[0]}</p>
                </div>
                
               </div>
      }
      else if(gender == 'girl'){
            return <div className="picDiv">
                    <div  style={{backgroundColor: 'pink', padding:'5rem', marginLeft:'3rem' , marginRight:'3rem' , borderRadius:'50%' , width:'7rem' , height:'7rem' , textAlign : 'center'}}>
                      <p style={{fontWeight:'bold'}}>{gender}</p>
                      <p style={{marginTop : '1rem' , fontSize:'25px'}}>{data[0]}</p>
                    </div>
                    
                   </div>
      }
      else{
        return <div className="picDiv">
                <div  style={{backgroundColor:'lightBlue', padding:'5rem', marginLeft:'3rem' , marginRight:'3rem' , borderRadius:'50%' , width:'7rem' , height:'7rem' , textAlign : 'center'}}>
                  <p style={{fontWeight:'bold'}}>{gender}</p>
                  <p style={{fontWeight:'bold' , marginTop : '1rem' , fontSize:'25px'}}>{data[0]}</p>
                </div>
                
               </div>
      }
      
 }


  return (<>
    <div className='container'>
      <div className='header'>
        <nav>
          <a className='logo' href="">Baby <span>Name</span></a>
          <input type='checkbox' id='check'/>
          <label htmlFor='check' className='navBtn' >
            <i className='fa fa-bars'></i>
          </label>
          <ul>
            <li><a className='active' href='#'>Baby Tops</a></li>
            <li><a href='#'>Baby Shoes</a></li>
            <li><a href='#'>Baby Toys</a></li>
            <li><a href='#'>About Us</a></li>
          </ul>
          <button className='button pinkBg'>Join Us</button>

        </nav>

      </div>
      <br/>
        <select   value={gender} name="gender" onChange={e => setGender(e.target.value)}>
            <option value="neutral">Please select gender</option>
            <option value="girl">Girl</option>
            <option value="boy">Boy</option>
        </select>
        <div className='Content' style={{display:'flex',justifyContent: 'center' ,alignItems:'center' , marginTop : '2rem' , padding:'0 5rem'}}>
          
          <RenderBabyContent/>

          {gender == 'boy' ?  (<img src={ boyImg  } style={{width:'14rem' }} alt='no image'/>) : '' }
          {gender == 'girl' ?  (<img src={ girlImg  } style={{width:'11rem' }} alt='no image'/>) : '' }
          {gender == 'neutral' ?  (<img src={ unisex  } style={{width:'18rem' }} alt='no image'/>) : '' }
          
        </div>


 
    </div>
  
  </>);
}

export default App;
