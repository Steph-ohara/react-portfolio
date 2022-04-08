import {
  Box,
  chakra,
  Container,
  Stack,
  Spacer,
  Text,
  useColorModeValue,
  useBreakpointValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { ReactNode } from 'react';


const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <div style={{
      position: "fixed",
      left: 0,
      bottom: 0,
      right: 0,
    }} >
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
    </div>
  );
};

export default function SmallWithNavigation() {
  return (
    <div style={{
      position: "fixed",
      left: 0,
      bottom: 0,
      right: 0,
    }} ><Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Stack direction={'row'} spacing={10} align={useBreakpointValue({ base: 'center'})}>
          <SocialButton label={'Github'} href={'https://github.com/Steph-ohara'}>
            <FaGithub size={100} />
          </SocialButton>
          <SocialButton label={'LinkedIn'} href={'https://www.linkedin.com/in/stephohara/'}>
            <FaLinkedin size={100} />
          </SocialButton>
      </Stack>
      </Container>
    </Box>
    </div>
  );
}