import axios from 'axios'

const githubApi = 'https://api.github.com/users/authorjim'
// axios.get()
const gitGithubData = () => {
    return axios.get(githubApi).then((data)=>{
        return data
    })
}

export default gitGithubData