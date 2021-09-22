import reciveData from './reciveData';
import filterData from './filterData';


const api = async(searchedShow:string) =>{
 
    const data =  await new reciveData(searchedShow);
    const resolvedData = await data.getShowData().then(function(result:any) { return result.data;}) 
    const reformedData = await new filterData(resolvedData);
    
    const finishedResults  = await reformedData.extractData();
    
    
    return finishedResults;
};

export default api;