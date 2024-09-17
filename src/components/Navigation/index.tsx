"use client";
import { useEffect } from "react";
import { Nav, NavList, NavItem, Icon, Submenu, SubmenuItem } from "@/components/Navigation/style";
import Link from "next/link";

export default function Navigation(props: any) {  
  const classNames = require('classnames');

  return (
    <>
      {props?.data && (
        <Nav data-component="Navigation" className="flex-1 navigation">
          <NavList className="flex">
            {props?.data.map((item: any, index: any) => (
              <NavItem 
                className={classNames(
                  `nav-item`,
                  {
                    'current': props?.pathname == item?.url
                  }
                )}  
                key={index}>
                <Link 
                  className="flex items-center link"
                  href={item?.url}
                >
                  {item?.icon && (
                    item?.icon.indexOf('svg') > 0 ? (
                      <Icon dangerouslySetInnerHTML={{ __html: item?.icon }} className="icon" />
                    ) : (
                      <Icon className={item?.icon} />
                    )
                  )}
                  {item?.label}
                </Link>

                {item?.below && (
                  <Submenu className="submenu">
                    {item?.below.map((subItem: any, subIndex: any) => (
                      <SubmenuItem 
                        className={classNames(
                          `flex items-center`,
                          {
                            'current': props?.pathname == subItem?.url
                          }
                        )}
                        key={subIndex}
                      >
                        <Link className="flex items-center link" href={subItem?.url}>
                          {subItem?.icon && (
                            subItem?.icon.indexOf('svg') > 0 ? (
                              <Icon dangerouslySetInnerHTML={{ __html: subItem?.icon }} className="icon" />
                            ) : (
                              <Icon className={subItem?.icon} />
                            )
                          )}
                          {subItem?.label}
                        </Link>
                      </SubmenuItem>
                    ))}
                  </Submenu>
                )}
              </NavItem>
            ))}
          </NavList>
        </Nav>
      )}
    </>
  );
}