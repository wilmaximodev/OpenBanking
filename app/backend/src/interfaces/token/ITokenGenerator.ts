import { Payload } from '../../utils/types/Payload';

export default interface ITokenGenerator {
  generate(payload: Payload): string
  decode(token: string): Payload
}
