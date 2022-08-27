
import UsernameInput from "./Comp/UsernameInput"
import EmailInput from "./Comp/EmailInput"
import PasswordInput from "./Comp/PasswordInput"
import DataModal from "./Comp/DataModal"


import { Box, Stack, Text, Button } from "@chakra-ui/react"

const App = () => {
  const form = {
    username: null,
    password: null,
    email: null,
  }
  const greet = 'hello'
  const handleFormInput = (field, value) => {
    // 👇️ take parameter passed from Child component
    form[field] = value
    console.log(form[field])
  };

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      height={"100vh"}
    >
      <Stack
        width={`50vh`}
        border={`1px`}
        borderRadius={`2xl`}
        padding={(`100`, `4`)}
      >
        <Text fontSize={`3xl`} fontWeight={`bold`} paddingBottom={`0.5`}>
          Register
        </Text>
        <Text>Username</Text>
        <UsernameInput callback={handleFormInput} />

        <Text>Email</Text>
        <EmailInput callback={handleFormInput} />

        <Text>Password</Text>
        <PasswordInput callback={handleFormInput} />


        <p> {form["username"]} greeting {greet}</p>
        <DataModal form={form}></DataModal>
      </Stack>
    </Box>
  )
}

export default App