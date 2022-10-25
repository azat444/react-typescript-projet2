import { useEffect, useContext, useState } from 'react'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'
import { AnimalContext } from '../context/animalContext'
import { Table } from 'antd'
import 'antd/dist/antd.css'
import { animalsColumns } from '../util/columns'

const HomePage = () => {
  const [date, setDate] = useState<string>(dayjs().format('DD-MM-YYYY'))
  const [time, setTime] = useState<string>(dayjs().format('HH:mm:ss'))
  const [day, setDay] = useState<string>(dayjs().format('dddd'))

  const { animal } = useContext(AnimalContext)

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Interval ran')
      setDate(dayjs().format('YYYY-MM-DD'))
      setTime(dayjs().format('HH:mm:ss'))
      setDay(dayjs().format('dddd'))
    }, 5000)

    return () => {
      console.log('Interval cleared')
      clearInterval(interval)
    }
  }, [])

  return (
    <>
      <Link to={'/list'}>clique sur la liste</Link>

      <div>
        <h2>
          <br />
          Date: {date}
        </h2>
        <h2>
          <br />
          Time: {time}
        </h2>
        <h2>
          <br />
          Day: {day}
        </h2>
      </div>

      {animal ? (
        <Table
          columns={animalsColumns}
          dataSource={[animal]}
          pagination={false}
        />
      ) : (
        <p>
          <br />
          pas d'animaux pour l'instant
        </p>
      )}
    </>
  )
}

export default HomePage
