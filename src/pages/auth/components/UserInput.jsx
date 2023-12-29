import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';
import { UserRound } from 'lucide-react';

export function UserInput() {
  return (
    <InputGroup size="lg">
      <InputLeftElement pointerEvents="none">
        <UserRound />
      </InputLeftElement>
      <Input id="user" placeholder="user" type="text" variant="outline" />
    </InputGroup>
  );
}
