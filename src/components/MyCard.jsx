import PropTypes from 'prop-types';
import { Text } from '@chakra-ui/react';
import { Card, CardBody, CardFooter } from '@chakra-ui/react';
import { Image, Stack, Heading, Divider, ButtonGroup, Button, Box } from '@chakra-ui/react';

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
          <Text color='blue.600' fontSize='2xl'>
            {price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Button variant='solid' colorScheme='blue'>
            Buy now
          </Button>
          <Button variant='ghost' colorScheme='blue'>
            Add to cart
          </Button>
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
