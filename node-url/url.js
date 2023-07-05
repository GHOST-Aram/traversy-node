import { parse } from 'node:url'

const parseUrl = (address) =>{
    const query = parse(address, true)

    return{
        host: query.host,
        pathname: query.pathname,
        searchStr:query.search
    }
}

const urlObject = parseUrl(
    'http://localhost:8080/default.htm?year=2017&month=february'
    )

console.log(urlObject)