import axios from '@/api/axios'

const token = "ef94e2f450c836e4b5898e920c2caa9799e0f348";


const getAddresses = (query) => {
    return axios.post('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address', { query: query },
        {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token " + token
            },
        })
}

export default {
    getAddresses
}