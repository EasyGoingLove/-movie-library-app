import reciveData from './reciveData';
import filterData from './filterData';


const api = async() =>{
 
    const data = await reciveData();
    console.log(data,'sd');
    
    const reformedData = new filterData(data);

    reformedData.extractData();
   

};

export default api;