import { useQuery } from 'graphql-hooks'


// const Token_QUERY = `query MyQuery {
//   token {
//     id
//   }
// }`

const test = `
    query transfer($id:Int!){
       transfer(id:$id){
        from
        to
        amount
      }
}`

export const Query_data = {
    id:"1107671--2"
}

export const allPostsQueryOptions = () => ({
    variables:Query_data,
    updateData:(prevResult, result) => ({
            ...result,
            transfer:prevResult? [...prevResult.allPosts, ...result.transfer]
                : result.transfer,
        }
    )
})

const Home = () =>{
    const { loading, error, data } = useQuery(test, allPostsQueryOptions())
    // console.log(data.from)
    // data.transfer.map(from,to,amount)
    // if (loading){
    //     console.log(data.transfer.length)
    // }
    // const { allPosts, allPostsMeta } = data
    // if (loading){
    //     console.log(data.transfer)
    // }
    if (!data) {
        return (
            <div>1</div>
        )
    }
    return (
        <div>
            {data.transfer.from}
        </div>
    )
}

export default Home

