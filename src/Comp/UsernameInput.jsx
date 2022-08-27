import { Input } from "@chakra-ui/react"

function UsernameInput({ callback }) {
    return <Input onChange={event => callback("username", event.target.value)} placeholder="username" />
}

export default UsernameInput