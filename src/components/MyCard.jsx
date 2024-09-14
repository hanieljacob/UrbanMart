import PropTypes from 'prop-types';
import { Text } from '@chakra-ui/react';
import { Card, CardBody, CardFooter } from '@chakra-ui/react';
import { Image, Flex, Stack, Heading, Divider, ButtonGroup, Button, Box } from '@chakra-ui/react';

export default function MyCard({title, desc, image, price}) {
  return (
    <Card maxW='sm' margin='4' position='static' overflow='hidden'>
      <CardBody margin='auto'>
      <Box display='flex' justifyContent='center'>
          <Image
            src={image}
            alt={title}
            borderRadius='lg'
            boxSize='200px'
          />
        </Box>
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{title}</Heading>
          <Text>
            {desc.slice(0,300)}
          </Text> 
        </Stack>
      </CardBody>
      <Text paddingBottom="10px" textAlign='center' color='blue.600' fontSize='2xl'>
          {`$${price}`}
      </Text>
      <Divider />
      <CardFooter>
        <ButtonGroup zIndex='1' width='100%'spacing='2'>
          <Flex width='100%' justifyContent='center' textAlign='center'>
            <Button marginRight='5px' variant='solid' colorScheme='blue'>
              Buy now
            </Button>
            <Button variant='ghost' colorScheme='blue'>
              Add to cart
            </Button>
          </Flex>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

MyCard.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number
};
