import { useGetUsersQuery } from '@/services/users'
import { Flex } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import {
	FaEnvelopeOpen,
	FaUser,
	FaCalendarTimes,
	FaMap,
	FaPhone,
	FaLock
} from 'react-icons/fa'

export default function Home() {
	const [person, setPerson] = useState(null)
	const [value, setValue] = useState('Random Person')
	const [title, setTitle] = useState('name')

	const { data, isLoading, refetch } = useGetUsersQuery()

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
