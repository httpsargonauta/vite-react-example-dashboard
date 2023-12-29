import { useState } from 'react';
import {
  Input,
  InputGroup,
  InputRightElement,
  InputLeftElement,
} from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';
import { KeyRound } from 'lucide-react';

export function PasswordInput() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="lg">
      <InputLeftElement pointerEvents="none">
        <KeyRound />
      </InputLeftElement>
      <Input
        id="password"
        pr="4.5rem"
        type={show ? 'text' : 'password'}
        placeholder="enter password"
        variant="outline"
        autoComplete="on"
        _hover={{ borderColor: 'none' }}
        className="hover:border-zinc-600/90"
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}
