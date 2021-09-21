import fetch from "node-fetch";

import axios from 'axios';

const  api = async() => {
	const url = 'https://api.tvmaze.com/search/';
    const s = "girls"
		try {
            axios.get(url + `shows?q=${s}`)
                .then(function (response) {
                  console.log(response.data);
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