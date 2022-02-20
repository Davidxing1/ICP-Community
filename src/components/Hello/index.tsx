import { atom, useAtom } from 'jotai'
import textAtom from '../../Value'



const uppercaseAtom = atom(
    (get) => get(textAtom).toUpperCase()
)

const Input = () => {
    const [text, setText] = useAtom(textAtom)
    const handleChange = (e) => setText(e.target.value)
    return (
        <input value={text} onChange={handleChange} />
    )
}

const Uppercase = () => {
    const [uppercase] = useAtom(uppercaseAtom)
    return (
        <div>Uppercase: {uppercase}</div>
    )
}


const Hello = () =>{
    return (
        <>
            <Input />
            <Uppercase />
        </>
    )
}

export default Hello
