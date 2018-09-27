import React ,{Component} from 'react';
import imga from '../img/imga.jpeg'
import imgb from '../img/imgb.jpg'
import imgc from '../img/imgc.jpeg'
import imgd from '../img/imgd.jpeg'



class Forty extends Component{
    render(){
        return(
            <section className='container4'>
            <div className='content'>
            <h4>Lorem ipsum dolor </h4>
            </div>
             <div className='boxs-parnt'>
             <div className='box box1'>
             <img src={imga}></img>
             <h3>item1</h3>
             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat nesciunt sapiente quibusdam explicabo rerum non dolor amet harum tenetur quisquam?
             </p>
             
             </div>
             <div className='box box2'>
             <img src={imgb}></img>
             <h3>item2</h3>
             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat nesciunt sapiente quibusdam explicabo rerum non dolor amet harum tenetur quisquam?
             </p>
             </div>
             <div className='box box3'>
             <img src={imgc}></img>
             <h3>item3</h3>
             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat nesciunt sapiente quibusdam explicabo rerum non dolor amet harum tenetur quisquam?
             </p>
             </div>
             <div className='box box4'>
              <img src={imgd}></img>
             <h3>item4</h3>
             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat nesciunt sapiente quibusdam explicabo rerum non dolor amet harum tenetur quisquam?
             </p>
             </div>
             </div>
                 
   
            </section>
        )
    }
}
export default Forty;