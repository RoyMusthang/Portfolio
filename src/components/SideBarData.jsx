import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: "Home",
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: "Projects",
    path: '/projects',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
  },
  {
    title: "About",
    path: '/about',
    icon: <FaIcons.FaUser />,
    cName: 'nav-text',
  },
  {
    title: "Contact",
    path: '/contact',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text',
  },
]
