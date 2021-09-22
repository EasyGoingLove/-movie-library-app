import reciveData from './reciveData';
import filterData from './filterData';


const api = async(searchedShow:string) =>{
 
    const data =  await new reciveData(searchedShow);
    const resolvedData = await data.getShowData().then(function(result:any) { return result.data;}) 
    const reformedData = await new filterData(resolvedData);

    return reformedData.extractData();
};

export default api;