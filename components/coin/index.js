import React, { Component } from 'react';
import Rive from '@rive-app/react-canvas';
class Coin extends Component{
   render(){
      return(
         <div>
            <Rive
               src="new_file.riv"
               animations={"Animation 2"}
               width={700}
               height={700}
               style={
                  {
                     display:"flex",
                     height:"80vh",
                     justifyContent:"center",
                     alignItems:"center",
                     padding:0
                  }
               }
               />
         </div>
      );
   }
}
export default Coin;
