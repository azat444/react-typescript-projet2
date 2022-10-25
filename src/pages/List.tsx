import { useState, useEffect, useContext } from 'react'
import { Table } from 'antd'
import 'antd/dist/antd.css'
import { AnimalType } from '../util/AnimalDataType'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { AnimalContext } from '../context/animalContext'
import { animalsColumns } from '../util/columns'

const ListPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [list, setList] = useState([])
  const { saveAnimal } = useContext(AnimalContext)

  const animalsColumnsWithSaveBtn = [
    ...animalsColumns,
    {
      title: 'Save',
      key: 'save',
      render: (text: string, record: AnimalType) => (
        <Button
          onClick={() => {
            console.log('record', record)
            saveAnimal(record)
          }}
        >
          Save
        </Button>
      ),
    },
  ]

  const fetchAnimals = async () => {
    setIsLoading(true)
    const response = await fetch(
      'http://zoo-animal-api.herokuapp.com/animals/rand/10'
    )
    const data = await response.json()
    setList(data)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchAnimals()
  }, [])

  return (
    <div>
      <Link to={'/'}>Go To HomePage</Link>

      <Table
        columns={animalsColumnsWithSaveBtn}
        dataSource={list}
        loading={isLoading}
        pagination={false}
      />
    </div>
  )
}

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid black;
  color: black;
`

export default ListPage
