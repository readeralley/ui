import axios from 'axios';
import { Books, ISBN, random } from './src/lib/utils/OL.js';

(async () => {
	console.log(await axios.get('https://www.googleapis.com/books/v1/volumes/s1gVAAAAYAAJ'));
})();
