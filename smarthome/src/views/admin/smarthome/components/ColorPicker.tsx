import { useState } from "react";
import { SketchPicker } from "react-color";

const ColorPicker = (props: any) => {

    const [displayColorPicker, setDisplayColorPicker] = useState(false);
    const [color, setColor] = useState(props.color);
    
    const handleClick = () => {
        setDisplayColorPicker(!displayColorPicker);
    };
    
    const  handleClose = () => {
        setDisplayColorPicker(false);
    };
    
    const handleChange = (color: any) => {
        setColor(color.hex);
        props.callBackFunction(color);
    };

    return (
        <div>
            <div style={{ width: '16px', height: '16px', borderRadius: '1px', background: `${color}`, }}  onClick={ handleClick }/>
            { displayColorPicker ? 
                <div style={{ position: 'absolute', zIndex: '2' }}>
                    <div style={{ position: 'fixed', top: '0px', right: '0px', bottom: '0px', left: '0px' }} onClick={ handleClose }/>
                    <SketchPicker color={ color } onChange={ handleChange } />
                </div> 
                : null 
            }

        </div>
    );
};

export default ColorPicker;