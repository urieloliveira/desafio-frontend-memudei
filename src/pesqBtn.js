import React from 'react';
import { StyleSheet } from 'react-native';
import { FaMagnifyingGlass } from "react-icons/fa6";

function pesqButton(props) {
    const styles = StyleSheet.create({
        button: {
            borderleft: hidden,
            backgroundcolor: white,
            height: 35,
            width: 35,
            border: 0,
            cursor: pointer,
            padding: 0
          },    
    });
    return (
        <button onClick={props.onClick} id='pesqButton' className='button'>
            <FaMagnifyingGlass />
        </button>
    );
}


export default pesqButton;