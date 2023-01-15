import axios from 'axios'

const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID y864M4O9pbJa4BT_sZZ631jRY00Z-E9ucHF74Xhg7-c'
        },
        params: {
            query: 'cars'
        }
    })

    console.log(response)

    return response
}

export default searchImages