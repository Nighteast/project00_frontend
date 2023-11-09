import { useNavigate } from "react-router-dom";
import { Button, Flex } from "@chakra-ui/react";

export function NavBar() {
  const navigate = useNavigate();

  return (
    <Flex>
      <Button onClick={() => navigate("/")}>home</Button>
      <Button onClick={() => navigate("/write")}>write</Button>
    </Flex>
  );
}
