import { useGetUsersQuery } from '@/services/users'
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Flex,
	Heading,
	Text
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import {
	FaEnvelopeOpen,
	FaUser,
	FaCalendarTimes,
	FaMap,
	FaPhone,
	FaLock
} from 'react-icons/fa'

interface IPerson {
	image: string
	phone: string
	email: string
	password: string
	age: number
	street: string
	name: string
}

export default function Home() {
	const [person, setPerson] = useState<IPerson | null>(null)
	const [value, setValue] = useState('Random Person')
	const [title, setTitle] = useState('name')

	const { data, isLoading, refetch } = useGetUsersQuery()

	useEffect(() => {
		if (data) {
			const randomPerson = data.results[0]

			const { phone, email } = randomPerson
			const { first, last } = randomPerson.name
			const { large: image } = randomPerson.image
			const { password } = randomPerson.login
			const {
				dob: { age }
			} = randomPerson
			const {
				street: { number, name }
			} = randomPerson.location

			const newPerson = {
				image,
				phone,
				email,
				password,
				age,
				street: `${number} ${name}`,
				name: `${first} ${last}`
			}

			setPerson(newPerson)
			setTitle('name')
			setValue(newPerson.name)
		}
	}, [data])

	return (
		<Flex
			justify='center'
			align={'center'}
			height={'100vh'}
			overflow={'hidden'}
			width={'100vw'}
		>
			<Card align='center'>
				<CardHeader>
					<Heading size='md'> Customer dashboard</Heading>
				</CardHeader>
				<CardBody>
					<Text>
						View a summary of all your customers over the last
						month.
					</Text>
				</CardBody>
				<CardFooter>
					<Button colorScheme='blue'>View here</Button>
				</CardFooter>
			</Card>
		</Flex>
	)
}
