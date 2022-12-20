import React from 'react';
import { Button, useToast, Center, NativeBaseProvider } from 'native-base';

const Example = () => {
  const toast = useToast();
  return <Button shadow={2} onPress={() => toast.show({
    description: 'Prueba de boton con mensaje'
  })}>
      Dame click
    </Button>;
};

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Example />
            </Center>
          </NativeBaseProvider>
        );
    };
    