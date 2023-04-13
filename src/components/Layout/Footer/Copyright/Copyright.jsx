import { WrapperCopytight, TextCopyright, Text } from "./Copyright.styled";

const Copyright = () => {
  return (
    <WrapperCopytight>
      {/* <Background></Background> */}
      <TextCopyright>
        © 2023 All Rights Reserved. <Text>Terms of Service</Text>
      </TextCopyright>
    </WrapperCopytight>
  );
};

export default Copyright;
