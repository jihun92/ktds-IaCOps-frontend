import axios from 'axios'

const axiosIns = axios.create({
// You can add your headers here
// ================================
baseURL: 'http://was.iacops.site:8080/api',
timeout: 500000,
headers: {'X-Custom-Header': 'foobar'}
})

export default axiosIns
