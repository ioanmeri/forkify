import axios from 'axios';
import config from './config';

export default class Search {
	constructor(query){
		this.query = query;
	}

	async getResults(){

		try {
			const res = await axios(`https://www.food2fork.com/api/search?key=${config.forkKey}&q=${this.query}`);
			this.result = res.data.recipes;
			// console.log(this.result);
		} catch (error){
			alert(error);
		}

	}
}




