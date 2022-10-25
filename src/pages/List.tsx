import { useState, useEffect, useContext } from 'react'
import { Button, Table } from 'antd'
import 'antd/dist/antd.css'
import { AnimalType } from '../util/AnimalDataType'
import { Link } from 'react-router-dom'
import { AnimalContext } from '../context/animalContext'
import { animalsColumns } from '../util/columns'

const ListPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [list, setList] = useState([])
  const { animal, saveAnimal } = useContext(AnimalContext)

  const animalsColumnsWithSaveBtn = [
    ...animalsColumns,
    {
      title: 'Save',
      key: 'save',
      render: (text: string, record: AnimalType) => (
        <Button
          type={animal?.id === record.id ? 'primary' : 'ghost'}
          shape="round"
          size={'large'}
          onClick={() => saveAnimal(record)}
        >
          {animal?.id === record.id ? 'Saved' : 'Save'}
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

export default ListPage
