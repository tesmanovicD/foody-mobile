import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 60000
})

const request = (method, url, data) => {
    return new Promise((resolve, reject) => {
        (() => {
            if (method === 'get') {
                return instance.request({
                    url, method, params: data, headers: {}
                })
            } else {
                return instance.request({
                    url, method, data, headers: {}
                })
            }
        })()
        .then(res => resolve(res.data))
        .catch(err => reject(err.response))
    })
}

export default {
    get: (endpoint, data) => request('get', endpoint, data),
    post: (endpoint, data) => request('post', endpoint, data),
    put: (endpoint, data) => request('put', endpoint, data),
    delete: (endpoint, data) => request('delete', endpoint, data)
}
