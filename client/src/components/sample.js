import { Drawer, List, ListItem } from "@material-ui/core"

export default function Sample() {
  return (
    <div>
      <Drawer variant="permanent" anchor="left" open="false" width="300px">
        <List>
          <ListItem>
            <h1>Hello World</h1>
          </ListItem>
        </List>
      </Drawer>
      <div style={{ height: "100vh", width: "100%", backgroundColor: "lightblue" }}>
        <h1>Content of the div</h1>
      </div>
    </div>
  )
}
