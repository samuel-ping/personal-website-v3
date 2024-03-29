// CURRENTLY UNUSED
import Image from 'next/image';

export default function Avatar({ alt, size }) {
  return (
    <Image
      src="https://avatars.githubusercontent.com/u/55605862?v=4"
      alt={alt}
      width={size}
      height={size}
      layout="intrinsic"
      placeholder="blur"
      // blurDataURL=""
      // blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAFA4PEg8NFBIQEhcVFBgeMiEeHBwePSwuJDJJQExLR0BGRVBac2JQVW1WRUZkiGVtd3uBgoFOYI2XjH2Wc36BfP/bAEMBFRcXHhoeOyEhO3xTRlN8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fP/AABEIAIkAiQMBIgACEQEDEQH/xAAZAAADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAdEAEBAQEBAQADAQAAAAAAAAAAAQIREgMTIWEx/8QAGAEBAQEBAQAAAAAAAAAAAAAAAgMBAAT/xAAaEQEBAQEBAQEAAAAAAAAAAAAAAQIREjEh/9oADAMBAAIRAxEAPwD0y1uha4IXSej2p6GqRPRKfRKFWhRgDBI0NCwY2J0zA1JOhU9HqemgnpPSmktObCUBoMa93oWk9BaoEG0lo2ktCq5CkpqWhVYDMwkMMUelAo9C1ultJKtaTVG1PVaJdVPVNqp6rnQKAWt0Sev6D0l6b0onFOhaT03QquTWlbrBVozAzCFuh0OtgUbQtC0lpI0bU9VrSarRbVTta0lrmxrQ6FodEnoeh9Of2aaURi80PUZo0oVfKvW6SU3QWgsHW6xrdC0LS2kFG0loWk1psSrXRLoNaTuiAboloXRbobWw1odJ6bo9N0TZ5pyzamdK15s10zSkrnzpTNCvTlaU0qUppRWinQ6Xodc01pLWtJa4K2qlrQ6qWtElW1pO6DWk9ad1M10W6JdF9Bf0op1up+m9O4akv7VzUFM1ex48fXRmqSoZp5U69eavNGmkZofTFot6D0n6b0xp7ol0W6JdNCjqpa0OtJarUqGtJa0O6jqs4laa6D0naW6KRsqvpvSHtvbfKnXfw8Hy3FbHlzOGlNKQOp2PRmq+h9I+g9jYtKv7b05/bexLq90W6S9t6aFprU9VrSapcS1SbqdNoldxL6W1PVNpMopIzMxE9rgWKcLYSKdJafSO7xnGy8bWk79Cb1UNato3KmdOj8v9afX+uQe0fJ+nZPoaaced1XOnSBdL9C0kolxK0KSnpNMsdE9pn2RsVjMzNa94tPSUkUtOfbo259tGofSudf6f4gNWz8ZmZhMtioq4cOlYYsM1KhS6NS6ZXRHZD7IyLRmZmtf/2Q=="
      priority
      className="rounded-full object-cover"
    />
  );
}
