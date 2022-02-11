import {BigNumber, ethers} from "ethers";
import { MailIcon } from '@heroicons/react/solid'

function stringtobytes(string:string){
    const hex = ethers.utils.toUtf8Bytes(string);
    return ethers.utils.hexlify(hex);
}

const metamask = async () => {
    // @ts-ignore
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
        // @ts-ignore
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const _ = await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();

        const abi = [
            'function create(bytes name,bytes symbol,uint8 decimals) public',
            'function name() public view returns (bytes)',
            'function balanceOf(address account) public view returns (uint256)',
            'function transfer(address to, uint256 amount) public',
            'function mint(address account, uint256 amount) public',
        ];

        // @ts-ignore
        const ID  = document.getElementById('token_id').value;

        const contractAddress = `0xffffffff0000000000000000000000000000000${ID}`;
        // @ts-ignore
        const NAME  = stringtobytes(document.getElementById('name').value);
        // @ts-ignore
        const SYMBOL  = stringtobytes(document.getElementById('symbol').value);
        // @ts-ignore
        const DECIMALS  = document.getElementById('decimals').value;

        const myContract = new ethers.Contract(contractAddress,abi,signer);

        const estimatedGas:BigNumber = await myContract.estimateGas.create(NAME,SYMBOL,DECIMALS);

        const finally_estimatedGas  = estimatedGas.mul(12).div(10).toString()

        const result1 = await myContract.create(NAME,SYMBOL,DECIMALS,{
            gasLimit: finally_estimatedGas,
            gasPrice: '1000000000',
        });
        console.log('result', result1);
    }
}

const Home = () =>{
    return (
        <>
            <div className="isolate -space-y-px rounded-md shadow-sm">
                <div className="relative border border-gray-300 rounded-md rounded-b-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
                    <label htmlFor="token_id" className="block text-xs font-medium text-gray-700">
                        Token Id
                    </label>
                    <input
                        type="text"
                        name="token_id"
                        id="token_id"
                        className="block border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                        placeholder=""
                    />
                </div>
                <div className="relative border border-gray-300 rounded-md rounded-b-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
                    <label htmlFor="name" className="block text-xs font-medium text-gray-700">
                        Token Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="block border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                        placeholder=""
                    />
                </div>
                <div className="relative border border-gray-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
                    <label htmlFor="symbol" className="block w-full text-xs font-medium text-gray-700">
                        Token Symbol
                    </label>
                    <input
                        type="text"
                        name="symbol"
                        id="symbol"
                        className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                        placeholder=""
                    />
                </div>
                <div className="relative border border-gray-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
                    <label htmlFor="decimals" className="block w-full text-xs font-medium text-gray-700">
                        Token Decimals
                    </label>
                    <input
                        type="text"
                        name="decimals"
                        id="decimals"
                        className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                        placeholder=""
                    />
                </div>
            </div>
            <button
                type="button"
                className="inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={metamask}
            >
                Create you tokens from Web3Games Chain
                <MailIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
            </button>
        </>
    )
}

export default Home

