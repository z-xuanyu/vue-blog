export default function ({ $axios, redirect }) {
    // 请求前
    $axios.onRequest(config => {
        console.log('Making request to ' + config.url)
    })
    $axios.setHeader('Authorization', 'token')
    $axios.onError(error => {
        const code = parseInt(error.response && error.response.status)
        if (code === 400) {
            redirect('/400')
        }
        if (code === 500) {
            redirect('/sorry')
        }
    })
}