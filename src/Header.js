//imports
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import './header.css';
//styling

const useStyles = makeStyles({

header: {
    display: "flex",
    flexDirection: "row",
    width: "100%"
},

flags: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    
},

});



//body

function Header() {

const styles = useStyles()

return (
<div className="header">
    <div id="logodiv">
        <div className="logo">
         <img id="imglogo" src="/LevelupLogo.png" alt="main logo"/>
        </div>
    
    
        <div id="flagdiv">
            <img id="images" src="NZflag.png" alt="nz flag"/>
            <img id="images" src="MaoriFlag.png" alt="maori flag"/>
        </div>
    </div>
</div>
)
}

export default Header;