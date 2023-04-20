import { Button, Flex, Heading, Image, Text } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import data from "./data.json";
import './App.css';
import { TextField } from '@aws-amplify/ui-react';

function App() {
  return (
    <>
      <header>
        <h1>Build, Style, Launch: <font color="orange">React</font> & <font color="orange">AWS Amplify</font></h1>
      </header>
      <div className="content">
        <main>
          <div className="form">
            <TextField label="Title" padding="1rem" width="100%" />
            <TextField label="Description" padding="1rem" width="100%" />
            <TextField label="Img Url" padding="1rem" width="100%" />
          </div>
          <Button
            variation="primary"
            marginBottom='1rem'
            onClick={() => alert('Added an item!')}
          >
            Submit
          </Button>
          <Flex direction="row"
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            wrap="wrap"
            gap="1rem"
            className='main-flex'>
            <></>
            {data.map((item) => {
              return (
                <Flex
                  direction="row"
                  alignItems="flex-end"
                  wrap="wrap"
                  gap="1rem"
                  padding="2rem"
                >
                  <Image
                    alt={item.description}
                    height="20rem"
                    width="15rem"
                    src={item.filePath}
                  />
                  <Flex justifyContent="space-between" direction="column" width="15rem" >
                    <Heading level={3}>{item.title}</Heading>
                    <Text >
                      {item.description}
                    </Text>
                  </Flex>
                </Flex>
              )

            })}
          </Flex>

        </main>
      </div>
    </>
  );
}

export default App;