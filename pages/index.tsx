import { Box, Divider, Link, ListItem, OrderedList, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box p={50}>
      <Text fontSize='lg' fontWeight='bold'>
        Quick stack to build an APP
      </Text>
      <Divider mt={5} mb={5} />
      <OrderedList>
        <ListItem>
          <Link href='https://nextjs.org/' target='_blank'>Next.JS</Link>
        </ListItem>
        <ListItem>
          <Link href='https://chakra-ui.com/' target='_blank'>Chakra UI</Link>
        </ListItem>
        <ListItem>
          <Link href='https://nextjs.org/docs/pages/building-your-application/routing/api-routes' target='_blank'>API Routes</Link>
        </ListItem>
        <ListItem>
          <Link href='https://www.prisma.io/' target='_blank'>Prisma</Link>
        </ListItem>
        <ListItem>
          <Link href='https://www.sqlite.org/index.html' target='_blank'>SQLite</Link>
        </ListItem>
      </OrderedList>
    </Box>
  )
}
