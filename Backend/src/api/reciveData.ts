import axios from 'axios';

const  api = async() => {
	const url : string= 'https://api.tvmaze.com/search/';
    const s : string = "girls"
		try {
            axios.get(url + `shows?q=${s}`)
                .then(function (response) {
                  return response.data;
                })
                .catch(function (error) {
                    console.log(error);
                })
                .then(function () {
                   console.log("Succsesful call !");
                });
		}
		catch (error){
			console.log(error);
		}
        
}
export default api;