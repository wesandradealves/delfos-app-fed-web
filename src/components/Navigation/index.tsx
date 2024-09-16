"use client";
import { useEffect } from "react";
import { Nav, NavList, NavItem, Icon } from "./style";
import Link from "next/link";

export default function Navigation(props: any) {  
  const classNames = require('classnames');

  return (
    <>
        {props?.data && (
            <Nav className="flex-1">
              <NavList className="flex">
                  {props?.data.map((item: any, index: any) => (
                    <NavItem key={index}>
                        <Link 
                        className={
                          classNames(
                            `flex items-center link`,
                            {
                              'current': props?.pathname.indexOf(item?.url) > -1
                            }
                          )      
                        }   
                        href={item?.url}>
                          {item?.icon && (
                            item?.icon.indexOf('svg') > 0 ? <Icon dangerouslySetInnerHTML={{ __html: item?.icon }} className="icon" /> : <Icon className={item?.icon} />
                          )}

                          {item?.label}
                        </Link>
                    </NavItem>
                  ))}
              </NavList>
            </Nav>
        )}  
    </>
  );
};