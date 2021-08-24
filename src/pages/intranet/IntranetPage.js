import { BugOutlined, CustomerServiceOutlined, DollarOutlined, UserOutlined } from '@ant-design/icons';
import { Content } from 'antd/lib/layout/layout'
import React from 'react';
import { Card } from '../../components/Card';
import './index.css';

export const IntranetPage = () => {
    return (
        <div>
            
            <Content style={{   display:'flex', justifyContent:'space-evenly' }} > 
                <div className="contenido">
                   <Card icono={<DollarOutlined  style={{fontSize:50}}  />} title='714K' subtitle='Weekly Sales' color='#C8FACD' iconColor='#007B55' circleColor='#A6E4B9'/>
                   <Card icono={<UserOutlined style={{fontSize:50}}  />} title='1.35m' subtitle='New Users' color='#D0F2FF' iconColor='#0C53B7' circleColor='#AED6F2'/>
                   <Card icono={<CustomerServiceOutlined style={{fontSize:50}}  />} title='1.72m' subtitle='Item Orders' color='#FFF7CD' iconColor='#B78103' circleColor='#F2E1A8'/>
                   <Card icono={<BugOutlined style={{fontSize:50}}  />} title='234' subtitle='Bug Reports' color='#FFE7D9' iconColor='#B72136' circleColor='#F2C3BC'/>
                </div>
            </Content>
        </div>
    )
}
