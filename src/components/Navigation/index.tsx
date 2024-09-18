"use client";
import { Nav, NavList, NavItem, Submenu, SubmenuItem, Arrow } from "@/components/Navigation/style";
import Link from "next/link";
import Icon from "@/components/Icon";

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
                  {item?.icon && (<Icon data={item?.icon} />)}

                  {item?.label}

                  {item?.below && <Arrow className="block">
                    <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 9C7.71875 9 7.46875 8.90625 7.28125 8.71875L1.28125 2.71875C0.875 2.34375 0.875 1.6875 1.28125 1.3125C1.65625 0.90625 2.3125 0.90625 2.6875 1.3125L8 6.59375L13.2812 1.3125C13.6562 0.90625 14.3125 0.90625 14.6875 1.3125C15.0938 1.6875 15.0938 2.34375 14.6875 2.71875L8.6875 8.71875C8.5 8.90625 8.25 9 8 9Z" fill="#FFF"/>
                    </svg>
                  </Arrow>}
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
                          {item?.icon && (<Icon data={subItem?.icon} />)}                          
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