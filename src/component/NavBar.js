import { useNavigate } from "react-router-dom";
import { Button, Flex } from "@chakra-ui/react";

export function NavBar() {
  const navigate = useNavigate();

  return (
    <Flex m={"10px"} gap={"5px"}>
      <Button onClick={() => navigate("/")}>@home</Button>
      <Button onClick={() => navigate("/write")}>@write</Button>
      <Button onClick={() => navigate("/login")}>@login</Button>
      <Button onClick={() => navigate("/logout")}>@logout</Button>
      <Button onClick={() => navigate("/profile")}>@profile</Button>
      <Button onClick={() => navigate("/memberList")}>@memberList</Button>
    </Flex>
  );
}
