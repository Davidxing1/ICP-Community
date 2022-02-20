import {atom, useAtom} from "jotai";
import textAtom from "../../Value";

const uppercaseAtom = atom(
    (get) => get(textAtom).toUpperCase()
)

const Uppercase = () => {
    const [uppercase] = useAtom(uppercaseAtom)
    return (
        <div>Uppercase: {uppercase}</div>
    )
}

const Brother = () =>{
    return (
        <>
            <Uppercase />
        </>
    )
}

export default Brother