import '@mantine/core/styles.css'
import { Route, Routes } from 'react-router-dom'
import './App.css'

import { MantineProvider } from '@mantine/core'
import theme from 'src/theme.ts'
import Home from './pages/home/Home'
import Layout from './pages/layout/Layout'
import { ReactFlowProvider } from 'reactflow'
import { ModalsProvider } from '@mantine/modals'

function App() {
	return (
		<MantineProvider theme={theme} defaultColorScheme='dark'>
			<ReactFlowProvider>
				<ModalsProvider>
					<Routes>
						<Route path='/' element={<Layout />}>
							<Route index element={<Home />} />
							{/* <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} /> */}
							{/* <Route path="*" element={<NoMatch />} /> */}
						</Route>
					</Routes>
				</ModalsProvider>
			</ReactFlowProvider>
		</MantineProvider>
	)
}

export default App
