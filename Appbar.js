
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import './Appbar.css'
export default function Appbar() {



    return (

        <AppBar color='transparent' style={{position:'fixed',top:0}}>

            <Toolbar className='toolbar'>
                <div className='toolbar1' style={{ fontFamily: 'Bitter', flexDirection: 'row', display: 'flex' }}>
                    <img src='./logo.png' style={{ width: `110px`, position: 'fixed', left: '10px', cursor: 'pointer' }} onClick={() => { window.scrollTo({ behavior: "smooth", top: 0 }) }} />
                    <p className="toolbar_text">Men</p>
                    <p className="toolbar_text">Women</p>
                </div>
                <div className='toolbar2'><InstagramIcon style={{ color: 'black' }} /></div>

            </Toolbar>

        </AppBar>


    )
}


