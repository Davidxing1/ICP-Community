import { useQuery } from 'graphql-hooks'


const Token_QUERY = `query MyQuery {
  token {
    id
  }
}`

const Home = () =>{
    const { loading, error, data } = useQuery(Token_QUERY, {
    })
    console.log(data)
    return (
        <div>
            1
        </div>
    )
}

export default Home

