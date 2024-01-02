import { Grid, Stack } from '@mantine/core'
import { useCallback } from 'react'

import ReactFlow, {
	Background,
	BackgroundVariant,
	Controls,
	MiniMap,
	addEdge,
	useEdgesState,
	useNodesState,
} from 'reactflow'
import 'reactflow/dist/style.css'
import Flow from 'src/canvas/Flow'
import { HeaderDefault } from 'src/components/headers/header-default/HeaderDefault'
import SideNavbar from 'src/components/side-nav/SideNavbar'

export default function Layout() {
	return (
		<Stack>
			<HeaderDefault />
			<Grid
				style={{
					width: '100vw',
				}}
			>
				<Grid.Col span={2}>
					<SideNavbar />
				</Grid.Col>
				<Grid.Col span={10}>
					<Flow />
				</Grid.Col>
			</Grid>
		</Stack>
	)
}
