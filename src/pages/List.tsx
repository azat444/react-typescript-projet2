import React , {useState , useEffect } from 'react'
import Layout, { Header, Content, Footer } from 'antd/lib/layout/layout'
import Sider from 'antd/lib/layout/Sider'
import { Table, Row, Col } from 'antd';
import axios from 'axios'



const columns =[
    {
        title:'First Name',
        dataIndex:'first_name',
        key:'first_name'

    } ,
    {
        title:'Last Name',
        dataIndex:'last_name',
        key:'last_name'

    },
    {
        title:'email',
        dataIndex:'email',
        key:'first_name'

    }

]



const ListUser = () =>{
    const [data, setdata] = useState([])
    const [loading, setloading] = useState(true)
    

    useEffect(() => {
        getData() }
    , [])

    const getData = async () =>{
        const res = await axios.get('https://zoo-animal-api.herokuapp.com/animals/rand')
        setloading(false)
        setdata(  res.data.data.map(row =>({name:row.first_name,last_name:row.last_name })) );
                
    }

    return (
        <Layout>
            <Header>Header </Header>
            
                <Content  style={{padding:50}}>
                    <Row>
                        <Col span={30}/>
                        <Col span={18}>
                            <Table dataSource={data} columns={columns} />
                        </Col>
                        <Col span={3}/>
                    </Row>


                </Content>
            
           <Footer>Footer</Footer> 
        </Layout>
    )
}

export default ListUser