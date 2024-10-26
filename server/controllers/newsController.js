const axios = require('axios');
const apiKey = process.env.NEWS_API_KEY;

const getnews = async (req,res)=>{
    try{
        const { country, category, startDate, endDate } = req.body;
        console.log(country)
        let apiUrl;
        
        if(startDate && endDate){
            apiUrl =`https://newsapi.org/v2/everything?q=${category}&from=${startDate}&to=${endDate}&sortBy=publishedAt&apiKey=${apiKey}`;
        }
        else{
            apiUrl = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;
        }

        const response = await axios.get(apiUrl);
        res.json(response.data.articles);
    }
    catch(err){
        console.log('Error Feteching From News_Api :', err);
        res.status(500).json({ message: 'Error fetching news' });
    }

}

module.exports = {getnews}