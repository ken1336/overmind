import React, { Component,Fragment } from 'react';
import { Route } from 'react-router-dom';
/*
    Filename: Use PascalCase
    Reference Naming: Use PascalCase for React components and camelCase for their instances
        ex: const reservationItem = <ReservationCard />;
    Component Naming: Use the filename as the component name.
    Props Naming: Avoid using DOM component prop names for different purposes.
    Props Naming: Always use camelCase for prop names.
    img: Must be with 'alt' tag
    Refs: Always use ref callbacks.
        ex: <Foo
            ref={(ref) => { this.myRef = ref; }}
            />
    Event handler: Bind event handlers for the render method in the constructor.
*/

/*Convnetion:
    state나 ref가 없을때  stateless component로 작성한다.

*/
export default function home2(){
    return(
        <Fragment>
    Hello this is home2!  
    </Fragment>
    )
};
