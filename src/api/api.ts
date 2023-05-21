import axios from 'axios'

interface query {
    [key : string] : string
}

export class API {
    public name : string

    constructor (name: string) {
        this.name = name
    }

    async fetch<T> (query?: query) : Promise<T[]> {
        let data
        if (query) {
            let queryString = encodeQuery(query)
            data = await axios.get(`http://54.206.204.237/api/${this.name}?${query}`)
        } else {
            data = await axios.get(`http://54.206.204.237/api/${this.name}`)
        }
        return data.data
    }

}

const encodeQuery = (query: query) : String => {
    let ret = []
    let q : keyof typeof query
    for (q in query) {
      ret.push(encodeURIComponent(q) + '=' + encodeURIComponent(query[q]))
    }
    return ret.join('&')
  }