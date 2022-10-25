export const animalsColumns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Image',
    dataIndex: 'image_link',
    key: 'image_link',

    render: (image_link: string) => (
      <img src={image_link} alt="animal" width="100" />
    ),
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Latin Name',
    dataIndex: 'latin_name',
    key: 'latin_name',
  },
  {
    title: 'Animal Type',
    dataIndex: 'animal_type',
    key: 'animal_type',
  },
  {
    title: 'Active Time',
    dataIndex: 'active_time',
    key: 'active_time',
  },
  {
    title: 'Diet',
    dataIndex: 'diet',
    key: 'diet',
  },
  {
    title: 'Weight Max (lbs)',
    dataIndex: 'weight_max',
    key: 'weight_max',
  },
  {
    title: 'Weight Min (lbs)',
    dataIndex: 'weight_min',
    key: 'weight_min',
  },
  {
    title: 'Length Max (ft)',
    dataIndex: 'length_max',
    key: 'length_max',
  },
  {
    title: 'Length Min (ft)',
    dataIndex: 'length_min',
    key: 'length_min',
  },
  {
    title: 'Lifespan (yrs)',
    dataIndex: 'lifespan',
    key: 'lifespan',
  },
  {
    title: 'Habitat',
    dataIndex: 'habitat',
    key: 'habitat',
  },
  {
    title: 'Geo Range',
    dataIndex: 'geo_range',
    key: 'geo_range',
  },
]

export const timeColumns = [
  {
    title: 'Time',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Day',
    dataIndex: 'day',
    key: 'day',
  },
]
