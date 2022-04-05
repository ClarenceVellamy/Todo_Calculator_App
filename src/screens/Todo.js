import {useEffect, useState} from 'react'

import { Feather, Entypo, AntDesign } from '@expo/vector-icons'

import { API } from '../config/api';

import { 
  Box, 
  Button, 
  Input, 
  Text, 
  Center, 
  VStack, 
  HStack, 
  IconButton, 
  useToast, 
  Checkbox, 
  Icon, 
  Heading, 
  Modal } from 'native-base'
import { FlatList } from 'react-native';


export default function Todo() {

  // ---------------- ADD TODO ------------------

  const [form, setForm] = useState({
    task: ''
  })

  const handleAdd = async () => {
    try {
        if (form.task === "") {
          toast.show({
            title: "Input must be filled",
            status: "warning",
            placement: "top"
          });
          return;
        }

        const config = { headers: { "Content-Type": "application/json" } };
        const body = JSON.stringify(form);
        const response = await API.post("/todo", body, config);

        setForm({
          task: ''
        })

        getList()

      } catch (error) {
          throw error
      }
  }

  // -------- MODAL --------

  const [show, setShow] = useState(false)

  const openModal = () => setShow(true)
  const closeModal = () => setShow(false)


  // ---------------- GET TODO ------------------

  const [todos, setTodos] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  const getList = async() => {
    setIsLoading(true)

    try {
      const response = await API.get('/todos')
      setTodos(response.data.list)
      setIsLoading(false)

    } catch (error) {
      setIsLoading(false)
      throw error
    }
  }

  useEffect(() => {
    getList()
  },[])

  // ---------------- DELETE TODO ------------------

  const deleteList = async (id) => {
    try {
      const data = await API.delete(`/todo/${id}`)
      getList()
    } catch (error) {
      throw error
    }
  }

  // ---------------- UPDATE TODO ------------------

  const [idUpdate, setIdUpdate] = useState(null)
  const [neww, setneww] = useState({
    task: ''
  })

  const handleUpdate = (id) =>{
    setIdUpdate(id)
    openModal()
  }

  const loadList = async () => {
    try {
        const response = await API.get(`/todo/${idUpdate}`)

        setneww({
          task: response.data.data.task
        })

    } catch (error) {
        throw error
    }
}


  const updateList = async () => {
    try {
      const config = {
        headers: {
            "Content-type": "application/json"
        }
      }

      const body = JSON.stringify(neww)

      const response = await API.patch('/todo/' + idUpdate, body, config)
      console.log(idUpdate)

      alert('success')

      closeModal()
      getList()

    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
      loadList()
  },[handleUpdate])

  // ---------------- HANDLE DONE TODO ------------------

  const handleDone = async (id) => {
    try {

        const config = {
            headers: {
                "Content-type": "application/json"
            }
        }

        const body = JSON.stringify({ isDone: 'Yes' })

        const response = await API.patch('done/' + id, body, config)

        getList()

    } catch (error) {
        throw error
    }
}


  const renderItem = ({item}) => {
    return(
      <HStack w="100%" justifyContent="space-between" alignItems="center" key={item.task + item.id.toString()}>
            {/* <Checkbox  value={item.task}></Checkbox> */}
            <Text  width="100%" flexShrink={1} textAlign="left" mx="1" color={item.isDone == 'Yes' ? 'gray.400' : 'white'} strikeThrough={item.isDone == 'Yes'} >
              {item.task}
            </Text>
            <IconButton size="sm" colorScheme="trueGray" icon={<Icon as={Feather} name="edit-3" size="xs" color="white" />} onPress={() => handleUpdate(item.id)}  />
            <IconButton size="sm" colorScheme="trueGray" icon={<Icon as={AntDesign} name="check" size="xs" color="white" />}  onPress={() => handleDone(item.id)} />
            <IconButton size="sm" colorScheme="trueGray" icon={<Icon as={Entypo} name="minus" size="xs" color="white" />}  onPress={() => deleteList(item.id)} />
      </HStack>
    )
  }
  return (
    <>
    <Center>
      <Modal  isOpen={show} onClose={closeModal}>
        <Modal.Content maxWidth="400px" bg='coolGray.600'>
          <Modal.Body>
            <Input 
              marginTop={3}
              color='white'
              borderWidth={2} 
              marginBottom={5} 
              size='xl' 
              value={neww.task}
              onChangeText={(value) => {
                setneww((prevState) => ({ ...prevState, task: value }));
              }}
            />
            <Button onPress={updateList}>Update</Button>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </Center>
    

    <Box w="100%" h='100%' bg='#243441' alignItems='center'>
      <Box maxW="390" w="100%" >
        <Heading mb="2" size="md" color='white' marginTop={30} marginBottom={5}>
          Your Task Today
        </Heading>
        <VStack space={4}>
          <HStack space={2}>
            <Input color='white'
              flex={1} 
              value={form.task} 
              placeholder="Add Task" 
              onChangeText={(value) => {
                setForm((prevState) => ({ ...prevState, task: value }));
              }}
            />

            <IconButton borderRadius="sm" variant="solid" icon={<Icon as={Feather} name="plus" size="sm" color="warmGray.50" />} onPress={handleAdd} />
          </HStack>

          <VStack space={2}>
          <FlatList
            data={todos}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            onRefresh={getList}
            refreshing={isLoading}
          />

          </VStack>
        </VStack>
      </Box>
      </Box>
      </>
  )
}
