const remoteURL = 'http://localhost:5002';
const aniapi = {
    species: ()=>{
        return fetch(`${remoteURL}/animals?_expand=type`)
        .then(e=>e.json())
    }
}

export default aniapi