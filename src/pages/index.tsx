import { useGetUsersQuery } from '@/services/users'
import { Flex } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

export default function Home() {
	return (
		<Flex
			justify='center'
			align={'center'}
			height={'100vh'}
			overflow={'hidden'}
			width={'100vw'}
		>
			Something in the way
		</Flex>
	)
}
