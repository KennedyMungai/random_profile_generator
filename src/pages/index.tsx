import { useGetUsersQuery } from '@/services/users'
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Flex,
	Heading,
	Text,
	Image,
	VStack,
	HStack,
	IconButton,
	Spacer
} from '@chakra-ui/react'
import { useEffect, useState, MouseEvent } from 'react'
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

const handleValue = (e: MouseEvent<HTMLButtonElement>) => {}

export default function Home() {
	const [person, setPerson] = useState<IPerson | null>(null)
	const [value, setValue] = useState('Random Person')
	const [title, setTitle] = useState('My Name')

	const { data, isLoading, refetch } = useGetUsersQuery()

	const defaultImage = useEffect(() => {
		if (data) {
			const randomPerson = data.results[0]

			const { phone, email } = randomPerson
			const { first, last } = randomPerson.name
			const { large: image } = randomPerson.picture
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
			setTitle('My Name')
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
			<Card
				align='center'
				size={'lg'}
				width={'45rem'}
				height={'25rem'}
				bg={'gray.200'}
			>
				<CardHeader>
					<VStack spacing={'2rem'}>
						<Image
							src={person?.image ?? defaultImage}
							alt='avatar'
							rounded='full'
							border={'0.5rem solid white'}
						/>
						<Heading>{title}</Heading>
						<Text>{value}</Text>
					</VStack>
				</CardHeader>
				<CardBody>
					<HStack width={'100%'}>
						<IconButton
							icon={<FaUser />}
							aria-label={'User'}
							data-label='user'
							onMouseOver={handleValue}
							size={'lg'}
							_hover={{ bg: 'blue.200' }}
						/>
						<Spacer />
						<IconButton
							icon={<FaEnvelopeOpen />}
							aria-label={'Email'}
							data-label='email'
							onMouseOver={handleValue}
							size={'lg'}
							_hover={{ bg: 'blue.200' }}
						/>
						<Spacer />
						<IconButton
							icon={<FaCalendarTimes />}
							aria-label={'Age'}
							data-label='age'
							onMouseOver={handleValue}
							size={'lg'}
							_hover={{ bg: 'blue.200' }}
						/>
						<Spacer />
						<IconButton
							icon={<FaMap />}
							aria-label={'Street'}
							data-label='street'
							onMouseOver={handleValue}
							size={'lg'}
							_hover={{ bg: 'blue.200' }}
						/>
						<Spacer />
						<IconButton
							icon={<FaPhone />}
							aria-label={'Phone'}
							data-label='phone'
							onMouseOver={handleValue}
							size={'lg'}
							_hover={{ bg: 'blue.200' }}
						/>
						<Spacer />
						<IconButton
							icon={<FaLock />}
							aria-label={'Password'}
							data-label='password'
							onMouseOver={handleValue}
							size={'lg'}
							_hover={{ bg: 'blue.200' }}
						/>
					</HStack>
				</CardBody>
				<CardFooter>
					<Button colorScheme='blue' onClick={() => refetch()}>
						{isLoading ? 'Loading...' : 'Refresh'}
					</Button>
				</CardFooter>
			</Card>
		</Flex>
	)
}
