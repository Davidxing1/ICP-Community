import { useQuery } from 'graphql-hooks'


// const Token_QUERY = `query MyQuery {
//   token {
//     id
//   }
// }`

const test = `query {
    askHistories (first: 5) {
        nodes {
            id
            tokenId
            collectionId
            value
        }
    }
    tokens (first: 5) {
        nodes {
            id
            tokenId
            collectionId
            currentAsk
        }
    }
}`

const Home = () =>{
    const { loading, error, data } = useQuery(test, {
    })
    console.log(data)
    return (
        <div>
            1
        </div>
    )
}

export default Home

