import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

const Navbar: React.FC = () => {
  return (
    <>
      <AppBar
        color='default'
        position='static'
        style={{ alignItems: 'center'}}
      >
        <Toolbar>
          <Button>
            ABOUT
          </Button>
          <Button color='inherit'>
            SKILLS
          </Button>
          <Button color='inherit'>
            Works
          </Button>
          <Button color='inherit'>
            CONTACT
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;