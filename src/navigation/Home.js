import React from 'react';
import { Heading, Center, NativeBaseProvider } from 'native-base';

function Example() {
  return <Heading style={{color: 'deeppink' }}>Extra Abigail</Heading>;
}

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Example />
            </Center>
          </NativeBaseProvider>
        );
    };
    