import { Test } from '@nestjs/testing';
import { UserRepository } from './user.repository';

const mockCredentialDto = {
  username: 'TestUsername',
  password: 'TestPassword',
};

describe('UserRepository', () => {
  let userRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [UserRepository],
    }).compile();

    userRepository = await module.get<UserRepository>(UserRepository);
  });

  describe('SignUp', () => {
    let save;
    beforeEach(() => {
      save = jest.fn();
      userRepository.create = jest.fn().mockReturnValue({ save });
    });
    it('should successfully register a user', () => {
      save.mockReturnValue(undefined);
      expect(userRepository.signUp(mockCredentialDto)).resolves.not.toThrow();
    });
  });
});
