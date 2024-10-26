import React, { useState } from 'react'

function Navbar() {
    const [country,setCountry] = useState('');
    const [category,setCategory] = useState('');
    const [date,setDate] = useState(()=>{
        const today = new Date();
        return today.toISOString().split('T')[0];
    });
    return (
        <div className='w-100 h-14 bg-orange-500 flex justify-around items-center'>
            <div className="flex   space-x">
                <span>
                    <label>Start Date: </label>
                    <input type="date" 
                    value={date}
                    onChange={(e)=>setDate(e.target.value)}
                    className="border rounded " />
                </span>
                <span>
                    <label >End Date: </label>
                    <input type="date" className="border rounded " />
                </span>
            </div>
            <span className='font-extrabold'><h1>NEWS</h1></span>
            <div className='flex justify-center items-center'>
                <span className='flex justify-center items-center space-x-2'>
                    <h1>Country:</h1>
                    <select 
                        size={1}
                        value={country} 
                        onChange={(e) => setCountry(e.target.value)} 
                        className="border border-gray-300 outline-none rounded w-full no-scrollbar ">
                        <option value="ar">Argentina</option>
                        <option value="au">Australia</option>
                        <option value="at">Austria</option>
                        <option value="be">Belgium</option>
                        <option value="br">Brazil</option>
                        <option value="ca">Canada</option>
                        <option value="cn">China</option>
                        <option value="fr">France</option>
                        <option value="de">Germany</option>
                        <option value="gr">Greece</option>
                        <option value="hk">Hong Kong</option>
                        <option value="in">India</option>
                        <option value="ie">Ireland</option>
                        <option value="il">Israel</option>
                        <option value="it">Italy</option>
                        <option value="jp">Japan</option>
                        <option value="mx">Mexico</option>
                        <option value="nl">Netherlands</option>
                        <option value="nz">New Zealand</option>
                        <option value="ng">Nigeria</option>
                        <option value="no">Norway</option>
                        <option value="ph">Philippines</option>
                        <option value="pt">Portugal</option>
                        <option value="ru">Russia</option>
                        <option value="sa">Saudi Arabia</option>
                        <option value="sg">Singapore</option>
                        <option value="za">South Africa</option>
                        <option value="kr">South Korea</option>
                        <option value="se">Sweden</option>
                        <option value="ch">Switzerland</option>
                        <option value="tw">Taiwan</option>
                        <option value="tr">Turkey</option>
                        <option value="ae">United Arab Emirates</option>
                        <option value="gb">United Kingdom</option>
                        <option value="us">United States</option>
                    </select>
                </span>
                <span className='flex justify-center items-center space-x-2'>
                    <h1>Category:</h1>
                    <select 
                        value={category}
                        className="border border-gray-300 outline-none rounded w-full no-scrollbar"
                        onChange={(e) => setCategory(e.target.value)}>
                        <option value="">All</option>
                        <option value="business">Business</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="general">General</option>
                        <option value="health">Health</option>
                        <option value="science">Science</option>
                        <option value="sports">Sports</option>
                        <option value="technology">Technology</option>
                    </select>
                </span>
                    
            </div>
        </div>
    )
}

export default Navbar
