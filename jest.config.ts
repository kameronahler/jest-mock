export default {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.ts',
    '\\.(png|jpeg|jpg|gif|svg|mpeg|mp4|webp|mov|avi)$':
      '<rootDir>/__mocks__/fileMock.ts',
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
