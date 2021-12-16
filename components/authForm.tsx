import { Box, Flex, Input, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { useSWRConfig } from "swr";
import NextImage from "next/image";
import { auth } from "../lib/mutations";

const AuthForm: FC<{ mode: "signin" | "signup" }> = ({ mode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await auth(mode, { email, password });
    setIsLoading(false);
    router.push("/");
  };

  return (
    <>
    <Box height="100%" width="100%" bg="white" color="white">
      <Flex
        justify="center"
        paddingTop="20px"
        align="center"
        height="80px"
        margin="0 50px"
        borderBottom="black 1px solid"
      >
        <NextImage src="/crazyYetiLogo.svg" height={80} width={300} />
      </Flex>
      <Flex justify="center" align="center" height="calc(100% - 60px)">
        <Box padding="50px">
          <NextImage src="/foodTable.png" height={600} width={1300} />
          {/* <NextImage src="/cheeseCake.png" height={600} width={1000} />
          <NextImage src="/veggiePuffs.png" height={400} width={600} /> */}
          <NextImage src="/applePie.png" height={600} width={1300} />
          <NextImage src="/chickenPuff.png" height={600} width={1300} />
        </Box>
      </Flex>
    </Box>
    <div className='m-0 p-10'><h4 className="text-3xl font-bold underline">Apple Pie</h4></div>
    </>
  );
};

export default AuthForm;

// return (
//   <Box height="100vh" width="100vw" bg="white" color="white">
//     <Flex
//       justify="center"
//       align="center"
//       height="100px"
//       borderBottom="white 1px solid"
//     >
//       <NextImage src="/crazyYetiLogo.svg" height={100} width={300} />
//     </Flex>
//     <Flex justify="center" align="center" height="calc(100vh - 100px)">
//       <Box padding="50px" bg="gray.900" borderRadius="6px">
//         <form onSubmit={handleSubmit}>
//           <Input
//             placeholder="email"
//             type="email"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <Input
//             placeholder="password"
//             type="password"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <Button
//             type="submit"
//             bg="green.500"
//             isLoading={isLoading}
//             sx={{
//               '&:hover': {
//                 bg: 'green.300',
//               },
//             }}
//           >
//             {mode}
//           </Button>
//         </form>
//       </Box>
//     </Flex>
//   </Box>
// )
