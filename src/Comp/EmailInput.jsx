import { Input } from "@chakra-ui/react"

function EmailInput({ callback }) {
    return <Input onChange={event => callback("email", event.target.value)} placeholder="email" />
}

export default EmailInput