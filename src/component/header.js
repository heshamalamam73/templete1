import React ,{Component} from 'react';

class Header extends Component{
    render(){
        return(
            
                <header>
                    <div className='logo'>
                    <h2>momuzio</h2>
                    </div>
                    <ul className='item'>
                    <li>home</li>
                    <li>about</li>
                    <li>portafolio</li>
                    </ul>
                </header>
        
        )
    }
}
export default Header;