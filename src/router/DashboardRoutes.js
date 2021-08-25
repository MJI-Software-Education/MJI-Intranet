
import React from 'react';
import {Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import {
  PieChartOutlined,
  ReadOutlined,
  ReconciliationOutlined,
  HddOutlined,
  FolderOpenOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import { IntranetPage } from '../pages/intranet/IntranetPage';
import { CursosPage } from '../pages/CursosPage';
import { NavBar } from '../ui/NavBar';
import { Footer } from 'antd/lib/layout/layout';
import { AignaturasPage } from '../pages/AignaturasPage';
import { UnidadesPage } from '../pages/UnidadesPage';
import { OAsPage } from '../pages/OAsPage';
import { UsuariosPage } from '../pages/UsuariosPage';

const {Sider, Content } = Layout;

export const DashBoardRoutes = () => {
 
    return (
        <Router>
            
            <Layout  style={{ minHeight:'100vh',  height: '100%'}} >
            
                <Sider  collapsedWidth="0" breakpoint="md" hidden={false}>
                
                <div className="site-layout-background" style={{ textAlign: "center", color: "#F9FAFB", padding: 24, minHeight: 50 }}>
             MJI
             <hr/>
            </div>
            
                <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<PieChartOutlined />}>
                        <Link to='/'>Dashboard</Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<UsergroupAddOutlined />}>
                        <Link to='/usuarios'>Usuarios</Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<ReadOutlined  />}>
                        <Link to='/cursos'>Cursos</Link>
                        </Menu.Item>
                        <Menu.Item key="4" icon={<ReconciliationOutlined />}>
                        <Link to='/asignaturas'>Asignaturas</Link>
                        </Menu.Item>
                        <Menu.Item key="5" icon={<HddOutlined />}>
                        <Link to='/unidades'>Unidades</Link>
                        </Menu.Item>
                        <Menu.Item key="6" icon={<FolderOpenOutlined />}>
                        <Link to='/oas'>Oas</Link>
                        </Menu.Item>
                        
                    </Menu>
                </Sider>
                <Layout className="site-layout" style={{ marginLeft: 0 }}>
            <NavBar />
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24 }}>

                
                <Switch>
                    <Route exact path='/' component={IntranetPage}/>
                    <Route path='/cursos' component={CursosPage}/>
                    <Route path='/asignaturas' component={AignaturasPage}/>
                    <Route path='/unidades' component={UnidadesPage}/>
                    <Route path='/oas' component={OAsPage}/>
                    <Route path='/usuarios' component={UsuariosPage}/>
                    {/* <Route path='/escritorio' component={Escritorio}/> */}

                    <Redirect to='/login'/>
                </Switch>
        </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>MJI ©2021 Software Education</Footer>
        </Layout>
        
      </Layout>
      
        </Router>
    )
}




