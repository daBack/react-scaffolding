import React from "react"
import { Route } from 'react-router-dom'


/*
 * [Default layout for most of the routes. Will render navbar and footer (if any).]
 * @param {[Class]} component [Which component will be rendered.]
 * @param {[Props]} rest      [Rest of the props (if any) except component.]
 */
export const DefaultLayout = ({
  component: Component,
  ...rest
}) => {
  return (<Route {...rest} render={matchProps => (
    <div className="wrapper">
        <Component {...matchProps}/>
    </div>)
  }/>)
};
