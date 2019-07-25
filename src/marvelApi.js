/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import axios from 'axios';
import md5 from 'md5';

/**
 * Marvel API proxy
 */
class marvelApi {
    publicKey = 'cf5042819d1c44376946d3763d8e3fea';
    privateKey = 'de2a0e39eb00ed4038ea33058cd62df385bb4d27';
    ts = new Date().getTime();
    baseUrl = 'https://gateway.marvel.com/v1/public/';
    hash = md5(`${this.ts}${this.privateKey}${this.publicKey}`);

    getData(type, options) {
        if (type === 'comics') {
            return this.getComics(options);
        } else if (type === 'characters') {
            return this.getCharacters(options);
        }
    }

    getComics(options) {
        return this.doRequest(this.formatUrl('comics', options));
    }

    getCharacters(options) {
        return this.doRequest(this.formatUrl('characters', options));
    }

    formatUrl(endpoint, options = {}) {
        let params = [];
        Object.keys(options).forEach((key) => {
            params.push(`${key}=${options[key]}`);
        });
        if (params.length) {
            params = `&${params.join('&')}`;
        }

        return `${this.baseUrl}${endpoint}?ts=${this.ts}&apikey=${this.publicKey}&hash=${this.hash}${params}`;
    }

    doRequest(url){
        return new Promise((resolve, reject) => {
            axios.get(url)
                .then((response) => {
                    resolve(response.data.data);
                })
                .catch((data) => {
                    reject('Error calling api!', data);
                })
        });
    }
}

export default marvelApi;