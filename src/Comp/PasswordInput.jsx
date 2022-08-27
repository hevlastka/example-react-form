import { Input } from "@chakra-ui/react"

function PasswordInput({ callback }) {
    return <Input onChange={event => callback("password", event.target.value)} placeholder="password" />
}

export default PasswordInput