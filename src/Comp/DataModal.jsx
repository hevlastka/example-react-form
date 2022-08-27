import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from "@chakra-ui/react"

import { Text, Button } from "@chakra-ui/react"
import { useDisclosure } from "@chakra-ui/react"

function DataModal({ form }) {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <div>

            <Button alignSelf={`center`} colorScheme={`blue`} onClick={onOpen}>
                Register
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Result</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>Username: {form["username"]}</Text>
                        <Text>Email: {form["email"]}</Text>
                        <Text>Password: {form["password"]}</Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default DataModal