import React, { useState } from 'react'
import Maindisplay from './components/Maindisplay';
import Navbar from './components/Navbar';
export default function News() {
  return(
    <div className='h-screen w-100 bg-green-400 d-flex flex-col '>
      <Navbar/>
      <Maindisplay/>
    </div>
  )
}

// const [country,setCountry] = useState();
//   const [category,setCategory] = useState();
//   const [news,setNews] = useState([])
//   const handleSubmit = (e) =>{
//     e.preventDefault();
//     try{
//       if(!country || !category) {
//         alert('please provide the data')
//       }
//       const res = axios.post('http://localhost:8080/news',{country,category})
//       console.log(res)
//     }
//     catch(err){
//       console.log(err)
//     }
//   }
//   return (
//     <div className='h-100 w-100 flex justify-center items bg-green-300'>
//       <form onSubmit={handleSubmit}>
//           <label>Country :</label>
//           <input type='text' onChange={(e)=>setCountry(e.target.value)}></input><br/><br/>
//           <label>Category :</label>
//           <input type='text' onChange={(e)=>setCategory(e.target.value)}></input>
//           <button type='submit'>Submit</button>
//       </form>
          
//     </div>
//  )
// }

// In the News API, the main categories you can use to filter news articles are:

// Business
// Entertainment
// General
// Health
// Science
// Sports
// Technology

// The News API supports a wide range of countries for filtering news articles. Here’s a list of some of the country codes you can use:

// 1. **Argentina** - `ar`
// 2. **Australia** - `au`
// 3. **Austria** - `at`
// 4. **Belgium** - `be`
// 5. **Brazil** - `br`
// 6. **Canada** - `ca`
// 7. **China** - `cn`
// 8. **France** - `fr`
// 9. **Germany** - `de`
// 10. **Greece** - `gr`
// 11. **Hong Kong** - `hk`
// 12. **India** - `in`
// 13. **Ireland** - `ie`
// 14. **Israel** - `il`
// 15. **Italy** - `it`
// 16. **Japan** - `jp`
// 17. **Mexico** - `mx`
// 18. **Netherlands** - `nl`
// 19. **New Zealand** - `nz`
// 20. **Nigeria** - `ng`
// 21. **Norway** - `no`
// 22. **Philippines** - `ph`
// 23. **Portugal** - `pt`
// 24. **Russia** - `ru`
// 25. **Saudi Arabia** - `sa`
// 26. **Singapore** - `sg`
// 27. **South Africa** - `za`
// 28. **South Korea** - `kr`
// 29. **Sweden** - `se`
// 30. **Switzerland** - `ch`
// 31. **Taiwan** - `tw`
// 32. **Turkey** - `tr`
// 33. **United Arab Emirates** - `ae`
// 34. **United Kingdom** - `gb`
// 35. **United States** - `us`

// You can use these country codes in your API requests to get news articles specific to each country.