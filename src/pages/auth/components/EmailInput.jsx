import * as React from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { Mail } from 'lucide-react';

export function EmailInput() {
  if (window.location.pathname === '/register') {
    return (
      <InputGroup size="lg">
        <Input
          id="email"
          placeholder="email"
          type="email"
          variant="outline"
          autoComplete="on"
          _hover={{ borderColor: 'none' }}
          className="hover:border-zinc-600/90"
        />
        <InputLeftElement pointerEvents="none">
          <Mail />
        </InputLeftElement>
      </InputGroup>
    );
  } else {
    return (
      <InputGroup size="lg">
        <Input
          id="email"
          placeholder="user or email"
          type="email"
          variant="outline"
          autoComplete="on"
          _hover={{ borderColor: 'none' }}
          className="hover:border-zinc-600/90"
        />
        <InputLeftElement pointerEvents="none">
          <Mail />
        </InputLeftElement>
      </InputGroup>
    );
  }
}
