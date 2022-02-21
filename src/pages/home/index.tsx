import { useQuery } from 'graphql-hooks'



// const Token_QUERY = `query MyQuery {
//   token {
//     id
//   }
// }`

// const test = `
//     query transfer($id:Int!){
//        transfer(id:$id){
//         from
//         to
//         amount
//       }
// }`
//
// export const Query_data = {
//     id:"1107671--2"
// }

// export const allPostsQueryOptions = () => ({
//     variables:Query_data,
//     updateData:(prevResult, result) => ({
//             ...result,
//             transfer:prevResult? [...prevResult.allPosts, ...result.transfer]
//                 : result.transfer,
//         }
//     )
// })

//  tokenFungibleCreates(first:1){
//   nodes{
//     tokenId
//     account
//     symbol
//     decimals
//   }
// }

const test = `query {
  blockTs(first:101,orderBy:BLOCK_HEIGHT_ASC){
    nodes{
      id
      blockHeight
      timestamp
    }
  }
}`
const Home = () =>{
    const { loading, error, data } = useQuery(test, {
    })
    // const { loading, error, data } = useQuery(test, allPostsQueryOptions())
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

    // if(data.)
    console.log(data.blockTs.nodes.length)
    console.log(data.blockTs.nodes)
    return (
        <div>
            {data.blockTs.nodes.map((post, index) => (
                <li key={post.id}>
                    <div>
                        {/*<span>{index + 1}. </span>*/}
                        <div>{post.blockHeight}</div>
                        {/*<a href={post.url}>{post.title}</a>*/}
                    </div>
                </li>
            ))}
            {/*{data.tokenFungibleCreates.nodes}*/}
            {/*2*/}
            {/*{data.tokenFungibleCreates.nodes[0].account}*/}
        </div>
    )
}

export default Home

